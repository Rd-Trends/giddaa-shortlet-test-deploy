import React, { useEffect, useState } from "react";
import NearbyPlacesCard from "./NearbyPlacesCard";
import MapContainer from "./MapContainer";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import Container from "@/components/layouts/Container";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/Toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { cn } from "@/utils/classname";
import { GooglePlaceDetails } from "@/types/google-map-api-types";
import { ShortLet } from "@/types/short-let";

// Define a mapping for types to display names
const typeMapping = {
  gas_station: "Fueling Station",
  lodging: "Hotel",
};

const getDisplayName = (type: string) =>
  typeMapping[type as keyof typeof typeMapping] || type;

type LocationDetailsProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  coordinates: {
    lat: number;
    lng: number;
  };
  shortLetName: string;
  city: ShortLet["city"];
  places: Record<string, GooglePlaceDetails[]>;
  initialTab?: string;
};

const LocationDetails = ({
  isOpen,
  setIsOpen,
  coordinates,
  places,
  city,
  shortLetName,
  initialTab,
}: LocationDetailsProps) => {
  const tabs = Object.keys(places)?.map((place) => ({
    name: place,
    displayName: getDisplayName(place),
  }));

  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        preventAutoFocusOnOpen
        className=" flex flex-col overflow-y-auto">
        <DrawerHeader className={"border-b border-midGrey pb-4"}>
          <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
            Where You’ll Stay
          </DrawerTitle>
          <DrawerDescription className=" text-center text-body-sm text-charcoal-grey pt-1">
            Places close to <b>{shortLetName}</b> located at{" "}
            <b>
              {city.name}, {city?.state?.name}
            </b>
          </DrawerDescription>
        </DrawerHeader>
        <Container className="py-2.5 border-b border-mid-grey">
          <ToggleGroup
            type="single"
            variant={"default"}
            size="sm"
            className="border border-primary bg-white w-fit rounded-full p-0.5 mx-auto">
            <ToggleGroupItem value="a" className="px-4">
              MAP VIEW
            </ToggleGroupItem>
            <ToggleGroupItem value="b" className="px-4">
              STREET VIEW
            </ToggleGroupItem>
          </ToggleGroup>
        </Container>

        <div className=" flex-1 overflow-y-auto xl:flex flex-row items-start ">
          <Tabs
            defaultValue={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
            }}
            className="xl:w-fit flex flex-col h-full overflow-y-auto">
            <TabsList className=" px-4 md:px-6 lg:px-6 xl:px-10 w-full overflow-x-scroll">
              {tabs.map((tab) => (
                <TabsTrigger
                  className="px-0 pb-0.5 h-10 items-end capitalize "
                  key={tab.name}
                  value={tab.name}>
                  {tab.displayName}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent
                value={tab.name}
                key={tab.name}
                className={cn(
                  " px-4 md:px-6 lg:px-6 xl:px-10 flex-1 overflow-y-auto pb-6",
                  {
                    hidden: tab.name !== activeTab,
                  }
                )}>
                <h3 className="mt-2 mb-6 text-body-sm text-[#4B4B4B] text-center lg:text-left">
                  <span className="capitalize">{tab.displayName}</span> within 2
                  kilometres of <b>{shortLetName}</b> located at{" "}
                  <b>
                    {city.name}, {city?.state?.name}
                  </b>
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {places[tab.name]?.map((business, index) => (
                    <NearbyPlacesCard key={index} business={business} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="relative flex-1 p-4 ">
            <MapContainer
              location={coordinates}
              styles={{
                borderRadius: "20px 20px 20px 20px",
              }}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LocationDetails;
