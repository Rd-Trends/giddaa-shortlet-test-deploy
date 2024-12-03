import { useQuery } from "@tanstack/react-query";
import { GET_COORDINATES_KEY } from "../constants/keys";
import axios from "axios";
import { MapLocationResponse } from "@/types/google-map-api-types";

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

// export const useGetGMapNearbyPlaces = (location?: {
//   lat: number;
//   lng: number;
// }) => {
//   const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
//   return useQuery({
//     queryKey: ["GET_NEARBY_PLACES", location],
//     queryFn: async () => {
//       if (!location) return null;
//       if (!window.google || !window.google.maps || !window.google.maps.places) {
//         return null;
//       }
//       const resultdata = [] as any;

//       try {
//         const map = new window.google.maps.Map(document.createElement("div"));
//         const service = new window.google.maps.places.PlacesService(map);
//         for (const place of placeTypes) {
//           const request = {
//             location: new window.google.maps.LatLng(location.lat, location.lng),
//             radius: 2000,
//             types: [place.type],
//             fields: ["opening_hours"],
//           };
//           service.nearbySearch(request, (results, status) => {
//             if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//               resultdata[place.type] = results;
//             } else {
//               return {};
//             }
//           });
//         }
//         return resultdata;
//       } catch (err) {
//         throw new Error("Error fetching nearby places");
//       }
//     },
//     enabled: !!location?.lat && !!location?.lng && !!key,
//   });
// };

// export const useGetGMapTrafficData = (location?: {
//   lat: number;
//   lng: number;
// }) => {
//   const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
//   return useQuery({
//     queryKey: ["GET_TRAFFIC_DATA", location],
//     queryFn: async () => {
//       if (!window.google) return null;
//       if (!location) return null;

//       const times = ["08:00:00", "12:00:00", "16:00:00", "20:00:00"];
//       const trafficConditions = [];

//       for (const time of times) {
//         // Convert time to seconds since midnight
//         const [hours, minutes] = time?.split(":")?.map(Number);
//         let departureTime = new Date();
//         departureTime.setHours(hours, minutes, 0, 0);

//         // If the time is in the past, set it to tomorrow
//         if (departureTime < new Date()) {
//           departureTime.setDate(departureTime.getDate() + 1);
//         }

//         // Define multiple relevant destinations
//         const destinations = [
//           new window.google.maps.LatLng(
//             location.lat + 0.01,
//             location.lng + 0.01
//           ),
//           new window.google.maps.LatLng(
//             location.lat - 0.01,
//             location.lng - 0.01
//           ),
//           new window.google.maps.LatLng(
//             location.lat + 0.05,
//             location.lng + 0.05
//           ),
//           new window.google.maps.LatLng(
//             location.lat - 0.05,
//             location.lng - 0.05
//           ),
//           // Add more destinations as needed
//         ];

//         const service = new window.google.maps.DistanceMatrixService();
//         const request = {
//           origins: [new window.google.maps.LatLng(location.lat, location.lng)],
//           destinations: destinations,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//           drivingOptions: {
//             departureTime: departureTime,
//             trafficModel: "bestguess",
//           },
//         };

//         service.getDistanceMatrix(request, (response, status) => {
//           if (status === "OK" && response.rows[0].elements[0].status === "OK") {
//             const element = response?.rows[0]?.elements[0];
//             const duration = element?.duration_in_traffic?.value;
//             // Determine traffic level based on duration
//             let trafficLevel;
//             if (duration > 1800) trafficLevel = "Heavy Traffic";
//             else if (duration > 900) trafficLevel = "Medium Traffic";
//             else trafficLevel = "Light Traffic";

//             trafficConditions.push({
//               time: time.slice(0, 5),
//               duration: Math.round(duration / 60),
//               traffic: trafficLevel,
//             });
//             if (trafficConditions.length === times.length) {
//               let sortedData = trafficConditions?.slice()?.sort((a, b) => {
//                 const order = ["08:00", "12:00", "16:00", "20:00"];
//                 return order.indexOf(a.time) - order.indexOf(b.time);
//               });

//               return sortedData;
//             }
//           } else {
//             console.error("Error fetching traffic data:", status);
//           }
//         });
//       }
//     },
//     enabled: !!location?.lat && !!location?.lng && !!key,
//   });
// };
