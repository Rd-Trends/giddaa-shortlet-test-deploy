import { useQuery } from "@tanstack/react-query";
import { GET_COORDINATES_KEY, GET_PLACE_DETAILS_KEY } from "../constants/keys";
import axios from "axios";
import {
  Coordinates,
  GooglePlaceDetails,
  GoogleTrafficData,
  MapLocationResponse,
} from "@/types/google-map-api-types";

const placeTypes = [
  { type: "bank" },
  { type: "supermarket" },
  { type: "hospital" },
  { type: "gas_station" },
  { type: "church" },
  { type: "mosque" },
  { type: "lodging" },
  { type: "school" },
  { type: "restaurant" },
];

export const useGetGMaplocation = (address: string) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  return useQuery({
    queryKey: [GET_COORDINATES_KEY, address],
    queryFn: async () => {
      const response = await axios
        .get<MapLocationResponse>(
          "https://maps.googleapis.com/maps/api/geocode/json",
          { params: { address, key } }
        )
        .then((res) => res.data);
      return response?.results[0]?.geometry?.location ?? null;
    },
    enabled: !!address && !!key,
  });
};

export const useGetGMapNearbyPlaces = (location?: {
  lat: number;
  lng: number;
}) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  return useQuery({
    queryKey: [GET_PLACE_DETAILS_KEY, location],
    queryFn: async () => {
      if (!location) return {};
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        console.log("Google Maps JavaScript API not loaded");
        return {};
      }
      const resultdata = {} as Record<string, GooglePlaceDetails[]>;

      try {
        const map = new window.google.maps.Map(document.createElement("div"));
        const service = new window.google.maps.places.PlacesService(map);
        const promises = [];

        for (const place of placeTypes) {
          const request = {
            location: new window.google.maps.LatLng(location.lat, location.lng),
            radius: 2000,
            types: [place.type],
            fields: ["opening_hours"],
          };

          promises.push(
            new Promise((resolve) => {
              service.nearbySearch(request, (results, status) => {
                if (
                  status === window.google.maps.places.PlacesServiceStatus.OK
                ) {
                  resolve(results as unknown as GooglePlaceDetails[]);
                } else {
                  resolve([]);
                }
              });
            })
          );
        }

        const results = (await Promise.all(promises)) as GooglePlaceDetails[][];
        for (let i = 0; i < results.length; i++) {
          resultdata[placeTypes[i].type] = results[i];
        }
        return resultdata;
      } catch (err) {
        console.error(err);
        return {};
      }
    },
    enabled:
      !!location?.lat &&
      !!location?.lng &&
      !!key &&
      !!window?.google?.maps?.places,
  });
};

export const useGetGMapPlaceOpeningHours = (placeId: string) => {
  return useQuery({
    queryKey: ["GET_PLACE_OPENING_HOURS", placeId],
    queryFn: async () => {
      if (!window.google || !window.google.maps) {
        console.error("Google Maps JavaScript API not loaded");
        return null; // Indicate missing API
      }

      try {
        const service = new window.google.maps.places.PlacesService(
          document.createElement("div")
        );

        const request = {
          placeId: placeId,
          fields: ["opening_hours"],
        };

        const response = (await new Promise((resolve, reject) => {
          service.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              resolve(place);
            } else {
              reject(new Error("Failed to retrieve place details"));
            }
          });
        })) as google.maps.places.PlaceResult | null;

        if (response?.opening_hours) {
          return response.opening_hours;
        } else {
          return null; // Indicate no opening hours information
        }
      } catch (err) {
        console.error("Error fetching opening hours:", err);
        return null; // Indicate error
      }
    },
    enabled: !!placeId && !!window?.google?.maps?.places,
  });
};

export const useGetGMapTrafficData = (
  location?: {
    lat: number;
    lng: number;
  },
  opts = { enabled: true }
) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  return useQuery({
    queryKey: ["GET_TRAFFIC_DATA", location],
    queryFn: async () => {
      if (!window.google) return [];
      if (!location) return [];

      const times = ["08:00:00", "12:00:00", "16:00:00", "20:00:00"];
      const trafficConditions = [] as {
        time: string;
        duration: number;
        traffic: string;
      }[];

      try {
        for (const time of times) {
          // Convert time to seconds since midnight
          const [hours, minutes] = time?.split(":")?.map(Number);
          const departureTime = new Date();
          departureTime.setHours(hours, minutes, 0, 0);

          // If the time is in the past, set it to tomorrow
          if (departureTime < new Date()) {
            departureTime.setDate(departureTime.getDate() + 1);
          }

          // Define multiple relevant destinations
          const destinations = [
            new window.google.maps.LatLng(
              location.lat + 0.01,
              location.lng + 0.01
            ),
            new window.google.maps.LatLng(
              location.lat - 0.01,
              location.lng - 0.01
            ),
            new window.google.maps.LatLng(
              location.lat + 0.05,
              location.lng + 0.05
            ),
            new window.google.maps.LatLng(
              location.lat - 0.05,
              location.lng - 0.05
            ),
            // Add more destinations as needed
          ];

          const service = new window.google.maps.DistanceMatrixService();
          const request = {
            origins: [
              new window.google.maps.LatLng(location.lat, location.lng),
            ],
            destinations: destinations,
            travelMode: window.google.maps.TravelMode.DRIVING,
            drivingOptions: {
              departureTime: departureTime,
              // trafficModel: "bestguess"
            },
          };

          const responsePromise = new Promise((resolve) => {
            service.getDistanceMatrix(request, (response, status) => {
              if (
                status === "OK" &&
                response?.rows[0].elements[0].status === "OK"
              ) {
                const element = response?.rows[0]?.elements[0];
                const duration = element?.duration_in_traffic?.value;
                // Determine traffic level based on duration
                let trafficLevel;
                if (duration > 1800) trafficLevel = "Heavy Traffic";
                else if (duration > 900) trafficLevel = "Medium Traffic";
                else trafficLevel = "Light Traffic";

                resolve({
                  time: time.slice(0, 5),
                  duration: Math.round(duration / 60),
                  traffic: trafficLevel,
                });
              } else {
                resolve({}); // Resolve with empty object on error
              }
            });
          });

          const trafficData = (await responsePromise) as GoogleTrafficData;
          if (trafficData) {
            trafficConditions.push(trafficData);
          }
        }

        // Sort data based on time order
        trafficConditions.sort((a, b) => {
          const order = ["08:00", "12:00", "16:00", "20:00"];
          return order.indexOf(a.time) - order.indexOf(b.time);
        });

        return trafficConditions;
      } catch (err) {
        console.log(err);
        return [];
      }
    },
    enabled: !!location?.lat && !!location?.lng && !!key && opts.enabled,
  });
};

export const useGetDriveAndWalkTime = (
  params: {
    origin?: Coordinates | null;
    coordinates?: Coordinates | null;
  },
  opts = { enabled: true }
) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  return useQuery({
    queryKey: ["GET_DRIVE_AND_WALK_TIME", params],
    queryFn: async () => {
      if (!window.google || !params?.origin || !params?.coordinates) {
        return null;
      }

      const service = new window.google.maps.DistanceMatrixService();
      const origin = new window.google.maps.LatLng(params?.origin);

      const result = {
        driveTime: "",
        walkTime: "",
      };

      await service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [params.coordinates],
          travelMode: "DRIVING" as google.maps.TravelMode,
        },
        (response, status) => {
          if (status === "OK") {
            result.driveTime =
              response?.rows[0].elements[0].duration.text ?? "";
          } else {
            result.driveTime = "Drive time not available";
          }
        }
      );

      await service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [params.coordinates],
          travelMode: "WALKING" as google.maps.TravelMode,
        },
        (response, status) => {
          if (status === "OK") {
            result.walkTime = response?.rows[0].elements[0].duration.text ?? "";
          } else {
            result.walkTime = "Walk time not available";
          }
        }
      );

      return result;
    },
    enabled: !!key && !!params?.coordinates && !!params.origin && opts.enabled,
  });
};
