import {
  useGetAllStatesInACountry,
  useGetCitiesInAState,
} from "@/apis/queries/location";
import Container from "@/components/layouts/Container";
import Combobox from "@/components/ui/Combobox";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { Slider } from "@/components/ui/Slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/Toggle";
import { shortLetFeatures } from "@/constants/short-let-features";
import { stayTypes } from "@/constants/short-let-stay-types";
import { AmmenitiesIconMap } from "@/constants/shortlet-amenities-icon-map";
import { ShortLetServiceIconMap } from "@/constants/shortlet-service-icon-map";
import { cn } from "@/utils/classname";
import { convertCamelCaseToTitleCase } from "@/utils/convert-camel-case-to-title-case";
import { formatCurrency } from "@/utils/format-currency";
import { useMemo, useState } from "react";

const FilterDrawer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedState, setSelectedState] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { data: stateData, isLoading: isLoadingStates } =
    useGetAllStatesInACountry(
      { pageNumber: 1, pageSize: 100, countryId: "NIGERIA" },
      {
        enabled: isOpen,
      }
    );
  const { data: citiesData, isLoading: isLoadingCities } = useGetCitiesInAState(
    {
      pageNumber: 1,
      pageSize: 100,
      stateId: selectedState,
    },
    {
      enabled: !!selectedState && isOpen,
    }
  );

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        preventAutoFocusOnOpen
        className=" flex flex-col overflow-y-auto">
        <DrawerHeader className={"border-b border-midGrey pb-4 pt-6"}>
          <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
            Filters
          </DrawerTitle>
          <DrawerDescription className=" text-center text-body-sm text-charcoal-grey pt-1">
            Filter to find the exact place you’re looking for.
          </DrawerDescription>
        </DrawerHeader>

        <Container className="flex-1 overflow-y-auto divide-y divide-mid-grey">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-20 py-10">
            <div>
              <p className=" text-heading-4 font-bold">Type of Place</p>
              <p className=" text-body-sm pt-2">
                Filter for the exact type of place you’re looking for
              </p>

              <ToggleGroup
                onValueChange={(value) => alert(value)}
                type="multiple"
                className="pt-4 flex items-center justify-start flex-wrap gap-4 px-0">
                <ToggleGroupItem value="All" className=" h-[38px]">
                  All Types
                </ToggleGroupItem>
                {stayTypes.map((type) => (
                  <ToggleGroupItem
                    key={type.id}
                    value={type.id}
                    className=" h-[38px]">
                    {type.name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            <div>
              <p className=" text-heading-4 font-bold">Location</p>
              <p className=" text-body-sm pt-2">Filter for exact locations.</p>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <Combobox
                  label="State"
                  options={
                    stateData?.value?.map((state) => ({
                      label: state.name,
                      value: state.id,
                    })) || []
                  }
                  isLoading={isLoadingStates}
                  onSelect={(value) => setSelectedState(value)}
                />
                <Combobox
                  label="City"
                  options={
                    citiesData?.value?.map((city) => ({
                      label: city.name,
                      value: city.id,
                    })) || []
                  }
                  isLoading={isLoadingCities}
                  onSelect={(value) => console.log(value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-20 py-10">
            <div>
              <p className=" text-heading-4 font-bold">Pricing & Charges</p>
              <p className=" text-body-sm pt-2">
                Filter for price ranges and caution charges
              </p>

              <p className=" text-body-sm pt-4 pb-2">
                Price range:{" "}
                <b className=" text-primary">
                  {formatCurrency(priceRange[0])} -{" "}
                  {formatCurrency(priceRange[1])}
                </b>
              </p>

              <div className="  space-y-1.5">
                <div className="flex items-center justify-between">
                  <p className=" text-body-xs font-bold">Minimum</p>
                  <p className=" text-body-xs font-bold">Maximum</p>
                </div>
                <Slider
                  className=""
                  value={priceRange}
                  onValueChange={(values) => setPriceRange(values)}
                  max={150000000}
                  step={1}
                  minStepsBetweenThumbs={1000000}
                  numberOfThumb={2}
                />
                <div className="flex items-center justify-between">
                  <p className=" text-body-subtext text-primary font-medium">
                    {formatCurrency(5000000)}
                  </p>
                  <p className=" text-body-subtext text-primary font-medium">
                    {formatCurrency(150000000)}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-heading-4 font-bold">Location</p>
              <p className=" text-body-sm pt-2">Filter for exact locations.</p>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <Combobox
                  label="State"
                  options={[
                    { label: "Location 1", value: "location1" },
                    { label: "Location 2", value: "location2" },
                    { label: "Location 3", value: "location3" },
                  ]}
                  onSelect={(value) => console.log(value)}
                />
                <Combobox
                  label="City"
                  options={[
                    { label: "Location 1", value: "location1" },
                    { label: "Location 2", value: "location2" },
                    { label: "Location 3", value: "location3" },
                  ]}
                  onSelect={(value) => console.log(value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-20 py-10">
            <div>
              <p className=" text-heading-4 font-bold">Amenities</p>
              <p className=" text-body-sm pt-2 pb-6">
                Filter for the exact amenities you want in your place.
              </p>
              <AmenitiesSection />
            </div>

            <div>
              <p className=" text-heading-4 font-bold">Services</p>
              <p className=" text-body-sm pt-2">
                Filter for the services you want in your place.
              </p>
              <Services
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
              />
            </div>
          </div>
        </Container>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;

const services = [
  {
    name: "House Keeping",
    id: "FREE_HOUSE_KEEPING_SHORTLET_SERVICE",
  },
  {
    name: "City Tours and Excursions",
    id: "FREE_CITY_TOURS_AND_EXCURSIONS_SHORTLET_SERVICE",
  },
  {
    name: "Dry Cleaning",
    id: "FREE_DRY_CLEANING_SHORTLET_SERVICE",
  },
  {
    name: "Bulk Food Purchase",
    id: "FREE_BULK_FOOD_PURCHASE_SHORTLET_SERVICE",
  },
  {
    name: "Spa and Wellness",
    id: "FREE_SPA_AND_WELNNESS_SHORTLET_SERVICE",
  },
  {
    name: "On-demand Catering",
    id: "FREE_ONDEMAND_CATERING_SHORTLET_SERVICE",
  },
  {
    name: "Car Hire",
    id: "FREE_CAR_HIRE_SHORTLET_SERVICE",
  },
  {
    name: "Grocery Delivery",
    id: "FREE_GROCERY_DELIVERY_SHORTLET_SERVICE",
  },
  {
    name: "Event Hosting",
    id: "FREE_EVENT_HOSTING_SHORTLET_SERVICE",
  },
];

const Services = ({
  selectedServices,
  setSelectedServices,
}: {
  selectedServices: string[];
  setSelectedServices: (value: string[]) => void;
}) => {
  const isAllSelected = selectedServices.length === services.length;
  return (
    <div className="!mt-4">
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
        <label
          className={cn(
            " flex flex-col items-center justify-center border border-mid-grey rounded-2xl space-y-2 p-4 relative",
            " transition-colors duration-150",
            {
              " bg-primary border-primary text-white": isAllSelected,
            }
          )}>
          <input
            type="checkbox"
            className=" sr-only"
            value="All"
            checked={isAllSelected}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedServices(services.map((service) => service.id));
              } else {
                setSelectedServices([]);
              }
            }}
          />
          <p className=" text-body-sm">All Services</p>
        </label>
        {services.map((service) => {
          return (
            <label
              key={service.id}
              className={cn(
                " flex flex-col items-center justify-center border border-mid-grey rounded-2xl space-y-2 p-4 relative",
                " transition-colors duration-150",
                {
                  " bg-primary border-primary text-white":
                    selectedServices.includes(service.id),
                }
              )}>
              <input
                type="checkbox"
                className=" sr-only"
                value={service.id}
                checked={selectedServices.includes(service.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedServices([...selectedServices, service.id]);
                  } else {
                    setSelectedServices(
                      selectedServices.filter((id) => id !== service.id)
                    );
                  }
                }}
              />
              {
                ShortLetServiceIconMap[
                  service.id as keyof typeof ShortLetServiceIconMap
                ]
              }
              <p className=" text-body-sm">{service.name}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

const AmenitiesSection = () => {
  const sections = useMemo(() => {
    return Object.entries(shortLetFeatures)
      .map(([key, value]) => {
        return { id: key, label: key.split("_").join(" "), amenities: value };
      })
      .filter((section) => section.id !== "Safety_and_Security_Features");
  }, []);

  return (
    <div className=" space-y-6">
      {sections.map((section) => {
        return (
          <div key={section.id} className=" ">
            <p className="uppercase text-body-xs font-bold pb-2">
              {section.label}
            </p>

            <div className=" flex flex-wrap gap-4">
              <label
                className={cn(
                  " flex items-center border-2 border-primary text-primary gap-2 px-4 py-1 rounded-full relative",
                  " transition-colors duration-150"
                )}>
                <input type="checkbox" className=" sr-only" value={"All"} />

                <p className=" text-body-sm font-bold">All</p>
              </label>
              {section.amenities.map((amenity) => {
                return (
                  <label
                    key={amenity}
                    className={cn(
                      " flex items-center border-2 border-primary text-primary gap-2 px-4 py-1 rounded-full relative",
                      " transition-colors duration-150"
                    )}>
                    <input
                      type="checkbox"
                      className=" sr-only"
                      value={amenity}
                    />
                    <span className=" w-7 flex-shrink-0 [&_svg]:h-5 [&_svg]:stroke-current ">
                      {
                        AmmenitiesIconMap[
                          amenity as keyof typeof AmmenitiesIconMap
                        ]
                      }
                    </span>
                    <p className=" text-body-sm font-bold">
                      {convertCamelCaseToTitleCase(amenity)}
                    </p>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
