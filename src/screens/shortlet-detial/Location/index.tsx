"use client";

import React, { useCallback, useMemo, useState } from "react";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import MapBankIcon from "@/svgs/MapBankIcon";
import MapSuperMarketIcon from "@/svgs/MapSuperMarketIcon";
import MapHospitalIcon from "@/svgs/MapHospitalIcon";
import MapFuelStationIcon from "@/svgs/MapFuelStationIcon";
import MapChurchIcon from "@/svgs/MspChurchIcon";
import MapMosqueIcon from "@/svgs/MapMosqueIcon";
import MapHotelIcon from "@/svgs/MapHotelIcon";
import MapSchoolIcon from "@/svgs/MapSchoolIcon";
import MapRestaurantIcon from "@/svgs/MapRestaurantIcon";
import MapContainer from "./MapContainer";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import SkeletonLoader from "@/components/ui/Skeleton";
import { ShortLet } from "@/types/short-let";
import {
  useGetDriveAndWalkTime,
  useGetGMaplocation,
  useGetGMapNearbyPlaces,
} from "@/apis/queries/google-maps";
import LocationDetails from "./LocationDetails";
import pluralize from "pluralize";
import TrafficDataPopover from "./TrafficDataPopover";
import { Button } from "@/components/ui/Button";
import LandmarksPopover from "./LandmarksPopover";
import PlacesAutoComplete from "./PlacesAutoComplet";
import { Coordinates } from "@/types/google-map-api-types";
import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import WalkDistanceIcon from "./icons/WalkDistanceIcon";
import DriveDistanceIcon from "./icons/DriveDistanceIcon";
import { cn } from "@/utils/classname";

type SingleHouseLocationProps = {
  address: string;
  city: ShortLet["city"];
  name: string;
};

const libraries = ["places"] as Libraries;

const HouseLocation = ({ address, name, city }: SingleHouseLocationProps) => {
  const [initialDetailsTab, setInitialDetailsTab] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationCordinates, setDestinationCoordinates] =
    useState<Coordinates | null>(null);

  const [showMapFull, setShowMapFull] = useState(false);

  const { data: coordinates, isLoading: isLoadingCoordinates } =
    useGetGMaplocation(address);

  const { data: nearbyPlaces, isLoading: isLoadingNearbyPlaces } =
    useGetGMapNearbyPlaces(coordinates);

  const { data: calculatedDistance, isLoading: isCalculatingDistance } =
    useGetDriveAndWalkTime({
      origin: coordinates,
      coordinates: destinationCordinates,
    });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
    libraries,
  });

  const amenities = useMemo(() => {
    return [
      {
        id: "bank",
        name: "Bank",
        icon: <MapBankIcon />,
        count: nearbyPlaces?.["bank"]?.length ?? 0,
      },
      {
        id: "supermarket",
        name: "Supermarket",
        icon: <MapSuperMarketIcon />,
        count: nearbyPlaces?.["supermarket"]?.length ?? 0,
      },
      {
        id: "hospital",
        name: "Hospital",
        icon: <MapHospitalIcon />,
        count: nearbyPlaces?.["hospital"]?.length ?? 0,
      },
      {
        id: "gas_station",
        name: "Fuelling Station",
        icon: <MapFuelStationIcon />,
        count: nearbyPlaces?.["gas_station"]?.length ?? 0,
      },
      {
        id: "church",
        name: "Church",
        icon: <MapChurchIcon />,
        count: nearbyPlaces?.["church"]?.length ?? 0,
      },
      {
        id: "mosque",
        name: "Mosque",
        icon: <MapMosqueIcon />,
        count: nearbyPlaces?.["mosque"]?.length ?? 0,
      },
      {
        id: "lodging",
        name: "Hotel",
        icon: <MapHotelIcon />,
        count: nearbyPlaces?.["lodging"]?.length ?? 0,
      },
      {
        id: "school",
        name: "School",
        icon: <MapSchoolIcon />,
        count: nearbyPlaces?.["school"]?.length ?? 0,
      },
      {
        id: "restaurant",
        name: "Restaurant",
        icon: <MapRestaurantIcon />,
        count: nearbyPlaces?.["restaurant"]?.length ?? 0,
      },
    ];
  }, [nearbyPlaces]);

  const calculateDistanc = useCallback(async (address: string) => {
    const results = await getGeocode({ address });
    const coordinates = getLatLng(results[0]);
    if (coordinates) {
      setDestination(address);
      setDestinationCoordinates(coordinates);
    }
  }, []);

  if (!isLoaded || isLoadingCoordinates) return <div>Loading...</div>;
  if (!coordinates) return <div>No Map </div>;

  return (
    <div className="mb-8">
      <div className=" flex flex-col xl:flex-row gap-10">
        <div className=" xl:w-[60%]">
          <div className=" space-y-4 mb-6">
            <p className="text-body-lg font-bold">
              {city.name}, {city.state.name}
            </p>
            <p className=" text-body-sm">
              The location of this short let is off by 2km. This is a map view
              of the surrounding areas. The exact location and address will be
              made available to you upon reservation.
            </p>
          </div>
          <MapContainer location={coordinates} />

          <div className="rounded-b-[20px] bg-background p-5 pb-7 border border-mid-grey border-t-0">
            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center mt-2">
              <LandmarksPopover
                stateId={city.stateId}
                handleSearch={calculateDistanc}
              />
              <TrafficDataPopover location={coordinates} />
            </div>

            {coordinates && (
              <PlacesAutoComplete handleSearch={calculateDistanc} />
            )}

            <div
              className={cn(
                "flex flex-col md:flex-row gap-2 md:gap-8 justify-between md:items-center mt-4",
                {
                  hidden: !calculatedDistance && !isCalculatingDistance,
                }
              )}>
              <div className="flex gap-3 items-center">
                <DriveDistanceIcon className=" size-6 md:size-10 " />
                {!isCalculatingDistance && calculatedDistance?.driveTime && (
                  <p className="text-body-xs">
                    <span className="font-bold text-primary">
                      {calculatedDistance.driveTime} Drive from{" "}
                    </span>
                    <span className="font-semibold">{destination}</span>
                  </p>
                )}
                {isCalculatingDistance && (
                  <SkeletonLoader className=" w-[130px] h-4 rounded-lg" />
                )}
              </div>

              <div className="flex gap-3 items-center mr-8">
                <WalkDistanceIcon className=" size-6 md:size-10 " />
                {!isCalculatingDistance && calculatedDistance?.walkTime && (
                  <p className="text-body-xs">
                    <span className="font-bold text-primary">
                      {calculatedDistance.walkTime} Walk from{" "}
                    </span>
                    <span className="font-semibold">{destination}</span>
                  </p>
                )}
                {isCalculatingDistance && (
                  <SkeletonLoader className=" w-[130px] h-4 rounded-lg" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h3 className="text-body-sm font-bold">NEARBY PLACES & AMENITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 gap-4">
            {amenities.map((amenity, i) => (
              <div
                className="rounded-[20px] bg-background flex flex-col justify-center items-center gap-y-5 w-full px-3 h-[124px] border border-mid-grey relative cursor-pointer"
                key={i}
                onClick={() => {
                  setInitialDetailsTab(amenity.id);
                  setShowMapFull(true);
                }}>
                <div className="absolute top-3 right-3">
                  <ArrowOpenIcon />
                </div>
                {amenity.icon}

                {isLoadingNearbyPlaces && (
                  <SkeletonLoader className=" w-full h-4 rounded-xl" />
                )}
                {!isLoadingNearbyPlaces && (
                  <h4 className="font-semibold text-body-xs text-center">
                    {amenity.count} {pluralize(amenity.name, amenity.count)}
                  </h4>
                )}
              </div>
            ))}
          </div>

          <Button
            variant={"outline"}
            onClick={() => {
              setShowMapFull(true);
            }}
            className=" font-bold text-body-sm mt-8">
            <p>View More Details</p>
            <ArrowOpenIcon />
          </Button>
        </div>
      </div>

      {nearbyPlaces && (
        <LocationDetails
          isOpen={showMapFull}
          setIsOpen={setShowMapFull}
          places={nearbyPlaces}
          coordinates={coordinates}
          city={city}
          shortLetName={name}
          initialTab={initialDetailsTab}
        />
      )}
    </div>
  );
};

export default HouseLocation;
