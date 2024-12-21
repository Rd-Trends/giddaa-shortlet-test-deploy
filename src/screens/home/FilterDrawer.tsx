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
import DropdownInput from "@/components/ui/Select";
import { Slider } from "@/components/ui/Slider";
import { SHORT_LET_FEATURES } from "@/constants/short-let-features";
import { SHORT_LET_STAY_TYPES } from "@/constants/short-let-stay-types";
import { SHORT_LET_AMENITIES_ICON_MAP } from "@/constants/shortlet-amenities-icon-map";
import { SHORT_LET_SERVICE_ICON_MAP } from "@/constants/shortlet-service-icon-map";
import { cn } from "@/utils/classname";
import { convertCamelCaseToTitleCase } from "@/utils/convert-camel-case-to-title-case";
import { formatCurrency } from "@/utils/format-currency";
import pluralize from "pluralize";
import { useMemo, useState } from "react";
import CustomPopoverAsDropdownMenu from "./components/CustomPopover";
import { Checkbox } from "@/components/ui/Checkbox";
import { SHORT_LET_HOUSE_TYPES } from "@/constants/short-let-house-types";
import { useFilterStore } from "@/app/providers/home-page-filter-provider";
import {
  SHORT_LET_USES_ICON_MAP,
  SHORT_LET_USES_TEXT_MAP,
} from "@/constants/short-let-uses";
import { Button } from "@/components/ui/Button";
import SkeletonLoader from "@/components/ui/Skeleton";

type FilterDrawerProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  totalShortLets: number;
  isFetching?: boolean;
};

const FilterDrawer = ({
  isOpen,
  setIsOpen,
  totalShortLets,
  isFetching,
}: FilterDrawerProps) => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const clearFilter = useFilterStore((state) => state.clearFilter);
  const city = useFilterStore((state) => state.city);
  const [selectedState, setSelectedState] = useState("");
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
            <TypesSection />

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
                  defaultValue={city}
                  onSelect={(value) => {
                    updateFilter({
                      city: value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-20 py-10">
            <BedsAndBathsSection />
            <HouseTypeAndAreaSection />
          </div>

          <PriceSection />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-20 py-10">
            <UsesSection />
            <Services />
          </div>

          <AmenitiesSection />
        </Container>

        <div className=" flex flex-col md:flex-row items-center justify-center py-4 border-t border-mid-grey gap-4">
          {!isFetching && (
            <p className=" text-body-sm text-charcoal-grey">
              {totalShortLets} {pluralize("place", totalShortLets)} match your
              filter criteria
            </p>
          )}
          {isFetching && <SkeletonLoader className=" w-40 h-5 rounded-xl" />}
          <div className=" flex items-center gap-4">
            <Button
              isLoading={isFetching}
              onClick={() => {
                setIsOpen(false);
              }}>
              {isFetching
                ? "Applying Filters"
                : `View ${totalShortLets} ${pluralize(
                    "place",
                    totalShortLets
                  )} found`}
            </Button>
            <Button variant="outline" onClick={clearFilter}>
              Clear Filters
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;

const TypesSection = () => {
  const types = useFilterStore((state) => state.types);
  const updateFilter = useFilterStore((state) => state.setFilter);

  const isAllSelected = types.includes("all");
  const filterCount = isAllSelected ? 0 : types.length;

  return (
    <div>
      <SectionTitle title="Type of Place" filterCount={filterCount} />
      <p className=" text-body-sm pt-2">
        Filter for the exact type of place you’re looking for
      </p>

      <div className=" flex flex-wrap gap-4 pt-6">
        <label
          className={cn(
            " flex items-center border-2 border-primary text-primary gap-2 px-4 py-1 rounded-full relative",
            " transition-colors duration-150 h-[38px] cursor-pointer",
            {
              " bg-primary border-primary text-white": isAllSelected,
            }
          )}>
          <input
            type="checkbox"
            className=" sr-only"
            checked={isAllSelected}
            value={"All"}
            onChange={(e) => {
              if (e.target.checked) {
                updateFilter({
                  types: ["all"],
                });
              } else {
                updateFilter({
                  types: [],
                });
              }
            }}
          />
          <p className=" text-body-sm font-bold">All Types</p>
        </label>
        {SHORT_LET_STAY_TYPES.map((type) => {
          const isChecked = types.includes(type.id) || isAllSelected;

          return (
            <label
              key={type.id}
              className={cn(
                " flex items-center border-2 border-primary text-primary gap-2 px-4 py-1 rounded-full relative",
                " transition-colors duration-150 h-[38px] cursor-pointer",
                {
                  " bg-primary border-primary text-white": isChecked,
                }
              )}>
              <input
                type="checkbox"
                className=" sr-only"
                value={type.id}
                checked={isChecked}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFilter({
                      types: [...types, type.id],
                    });
                  } else {
                    if (types.includes("all")) {
                      updateFilter({
                        types: SHORT_LET_STAY_TYPES.filter(
                          (stayType) => stayType.id !== type.id
                        ).map((stayType) => stayType.id),
                      });
                    } else {
                      updateFilter({
                        types: types.filter((t) => t !== type.id),
                      });
                    }
                  }
                }}
              />
              <p className=" text-body-sm font-bold">{type.name}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

const BedsAndBathsSection = () => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const numberOfBedrooms = useFilterStore((state) => state.bedrooms);
  const numberOfBathrooms = useFilterStore((state) => state.bathrooms);

  const bedroomCount = numberOfBedrooms === 0 ? 0 : 1;
  const bathroomCount = numberOfBathrooms === 0 ? 0 : 1;

  return (
    <div>
      <SectionTitle
        title="Beds & Baths"
        filterCount={bedroomCount + bathroomCount}
      />
      <p className=" text-body-sm pt-2">Filter for beds and baths.</p>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <DropdownInput
          label="Beds"
          options={[
            { label: "All number of beds", value: "all" },
            ...Array.from({ length: 20 }).map((_, index) => ({
              label: `${index + 1} ${pluralize("Bed", index + 1)}`,
              value: `${index + 1}`,
            })),
          ]}
          sort={false}
          defaultValue={
            numberOfBedrooms === 0 ? "all" : numberOfBedrooms.toString()
          }
          onSelect={(value) => {
            updateFilter({
              bedrooms: value === "all" ? 0 : parseInt(value),
            });
          }}
          contentClassName="max-h-[320px]"
        />
        <DropdownInput
          label="Baths"
          options={[
            { label: "All number of baths", value: "all" },
            ...Array.from({ length: 20 }).map((_, index) => ({
              label: `${index + 1} ${pluralize("Bath", index + 1)}`,
              value: `${index + 1}`,
            })),
          ]}
          sort={false}
          defaultValue={
            numberOfBathrooms === 0 ? "all" : numberOfBathrooms.toString()
          }
          onSelect={(value) => {
            updateFilter({
              bathrooms: value === "all" ? 0 : parseInt(value),
            });
          }}
          contentClassName="max-h-[320px]"
        />
      </div>
    </div>
  );
};

const HouseTypeAndAreaSection = () => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const types = useFilterStore((state) => state.houseTypes);

  const isAllSelected = types.includes("all");
  const filterCount = isAllSelected ? 0 : types.length;

  const values = useMemo(() => {
    if (types.includes("all")) return "All Types";
    if (!!types.length) {
      return types
        .map((type) => SHORT_LET_HOUSE_TYPES.find((t) => t.id === type)?.name)
        .join(", ");
    }
    return "";
  }, [types]);

  return (
    <div>
      <SectionTitle title="House Type & Area" filterCount={filterCount} />
      <p className=" text-body-sm pt-2">
        Filter for exact house types and the areas that exist in the house.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <CustomPopoverAsDropdownMenu
          label="House Type"
          value={values}
          placeholder="House Type"
          wrapperClassName=" w-full"
          triggerClassName=" h-[35px] gap-2 "
          contentClassName="max-h-[320px]">
          <div className="max-h-[320px] flex flex-col overflow-y-auto">
            <div className=" flex items-center space-x-2 border-b border-mid-grey px-4 py-2">
              <Checkbox
                id="all-place-type"
                value={"all"}
                checked={isAllSelected}
                onCheckedChange={(check) => {
                  if (check) {
                    updateFilter({
                      houseTypes: ["all"],
                    });
                  } else {
                    updateFilter({
                      houseTypes: [],
                    });
                  }
                }}
              />
              <label
                htmlFor="all-place-type"
                className="text-body-xs font-bold">
                All Types
              </label>
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col">
              {SHORT_LET_HOUSE_TYPES.map((type) => {
                const isChecked = types.includes(type.id) || isAllSelected;
                return (
                  <div
                    key={type.id}
                    className=" flex items-center space-x-2 px-4 py-2">
                    <Checkbox
                      id={type.id}
                      checked={isChecked}
                      value={type.id}
                      onCheckedChange={(check) => {
                        if (check) {
                          updateFilter({
                            houseTypes: [...types, type.id],
                          });
                        } else {
                          if (types.includes("all")) {
                            updateFilter({
                              houseTypes: SHORT_LET_HOUSE_TYPES.filter(
                                (stayType) => stayType.id !== type.id
                              ).map((stayType) => stayType.id),
                            });
                          } else {
                            updateFilter({
                              houseTypes: types.filter((t) => t !== type.id),
                            });
                          }
                        }
                      }}
                    />
                    <label
                      htmlFor={type.id}
                      className="text-body-xs font-normal">
                      {type.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </CustomPopoverAsDropdownMenu>
      </div>
    </div>
  );
};

const PriceSection = () => {
  const minimumPrice = useFilterStore((state) => state.minimumPrice);
  const maximumPrice = useFilterStore((state) => state.maximumPrice);
  const cautionFee = useFilterStore((state) => state.cautionFee);
  const updateFilter = useFilterStore((state) => state.setFilter);

  const [priceRange, setPriceRange] = useState([minimumPrice, maximumPrice]);
  const [prevPriceRange, setPrevPriceRange] = useState([
    minimumPrice,
    maximumPrice,
  ]);

  // update the price range if the minimum or maximum price changes
  if (
    prevPriceRange[0] !== minimumPrice ||
    prevPriceRange[1] !== maximumPrice
  ) {
    setPriceRange([minimumPrice, maximumPrice]);
    setPrevPriceRange([minimumPrice, maximumPrice]);
  }

  const cautionFeeCount = !!cautionFee ? 1 : 0;
  const priceCount = priceRange[0] !== 0 || priceRange[1] !== 0 ? 1 : 0;

  return (
    <div className="py-10">
      <SectionTitle
        title="Pricing & Charges"
        filterCount={cautionFeeCount + priceCount}
      />
      <p className=" text-body-sm pt-2">
        Filter for price ranges and caution charges.
      </p>

      <div className=" grid items-end grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-20">
        <div>
          <p className=" text-body-sm pt-4 pb-2">
            Price range:{" "}
            <b className=" text-primary">
              {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
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
              onValueCommit={(values) => {
                updateFilter({
                  minimumPrice: values[0],
                  maximumPrice: values[1],
                });
              }}
              max={500000}
              step={1}
              minStepsBetweenThumbs={5000}
              numberOfThumb={2}
            />
            <div className="flex items-center justify-between">
              <p className=" text-body-subtext text-primary font-medium">
                {formatCurrency(0)}
              </p>
              <p className=" text-body-subtext text-primary font-medium">
                {formatCurrency(500000)}
              </p>
            </div>
          </div>
        </div>

        <DropdownInput
          label="Caution Fee Charges"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
          defaultValue={cautionFee}
          onSelect={(value) => {
            updateFilter({
              cautionFee: value,
            });
          }}
        />
      </div>
    </div>
  );
};

const Services = () => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const selectedServices = useFilterStore((state) => state.services);
  const isAllSelected = selectedServices.includes("all");

  const filterCount = isAllSelected ? 0 : selectedServices.length;

  return (
    <div>
      <SectionTitle title="Services" filterCount={filterCount} />
      <p className=" text-body-sm pt-2">
        Filter for the services you want in your place.
      </p>
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
                  updateFilter({
                    services: ["all"],
                  });
                } else {
                  updateFilter({
                    services: [],
                  });
                }
              }}
            />
            <p className=" text-body-sm">All Services</p>
          </label>
          {SHORTLET_SERVICES.map((service) => {
            const isChecked =
              selectedServices.includes(service.id) || isAllSelected;
            return (
              <label
                key={service.id}
                className={cn(
                  " flex flex-col items-center justify-center border border-mid-grey rounded-2xl space-y-2 p-4 relative",
                  " transition-colors duration-150",
                  {
                    " bg-primary border-primary text-white": isChecked,
                  }
                )}>
                <input
                  type="checkbox"
                  className=" sr-only"
                  value={service.id}
                  checked={isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFilter({
                        services: [...selectedServices, service.id],
                      });
                    } else {
                      if (selectedServices.includes("all")) {
                        updateFilter({
                          services: SHORTLET_SERVICES.filter(
                            (selectedService) =>
                              selectedService.id !== service.id
                          ).map((selectedService) => selectedService.id),
                        });
                      } else {
                        updateFilter({
                          services: selectedServices.filter(
                            (selectedService) => selectedService !== service.id
                          ),
                        });
                      }
                    }
                  }}
                />
                {
                  SHORT_LET_SERVICE_ICON_MAP[
                    service.id as keyof typeof SHORT_LET_SERVICE_ICON_MAP
                  ]
                }
                <p className=" text-body-sm">{service.name}</p>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const UsesSection = () => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const selectedUses = useFilterStore((state) => state.uses);
  const isAllSelected = selectedUses.includes("all");

  const filterCount = isAllSelected ? 0 : selectedUses.length;

  const shortletUses = useMemo(() => {
    return Object.entries(SHORT_LET_USES_TEXT_MAP).map(([key, value]) => {
      return { id: key, name: value };
    });
  }, []);

  return (
    <div>
      <SectionTitle title="Uses" filterCount={filterCount} />
      <p className=" text-body-sm pt-2">
        Filter for the different things the short let can be used for.
      </p>
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
                  updateFilter({
                    uses: ["all"],
                  });
                } else {
                  updateFilter({
                    uses: [],
                  });
                }
              }}
            />
            <p className=" text-body-sm">All Services</p>
          </label>
          {shortletUses.map((use) => {
            const isChecked = selectedUses.includes(use.id) || isAllSelected;
            return (
              <label
                key={use.id}
                className={cn(
                  " flex flex-col items-center justify-center border border-mid-grey rounded-2xl space-y-2 p-4 relative",
                  " transition-colors duration-150",
                  {
                    " bg-primary border-primary text-white": isChecked,
                  }
                )}>
                <input
                  type="checkbox"
                  className=" sr-only"
                  value={use.id}
                  checked={isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFilter({
                        uses: [...selectedUses, use.id],
                      });
                    } else {
                      if (selectedUses.includes("all")) {
                        updateFilter({
                          uses: SHORTLET_SERVICES.filter(
                            (selectedService) => selectedService.id !== use.id
                          ).map((selectedService) => selectedService.id),
                        });
                      } else {
                        updateFilter({
                          uses: selectedUses.filter(
                            (selectedService) => selectedService !== use.id
                          ),
                        });
                      }
                    }
                  }}
                />
                {
                  SHORT_LET_USES_ICON_MAP[
                    use.id as keyof typeof SHORT_LET_USES_ICON_MAP
                  ]
                }
                <p className=" text-body-sm">{use.name}</p>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AmenitiesSection = () => {
  const features = useFilterStore((state) => state.features);
  const updateFilter = useFilterStore((state) => state.setFilter);

  const sections = useMemo(() => {
    const mappedSections = Object.entries(SHORT_LET_FEATURES).map(
      ([key, value]) => {
        return { id: key, label: key.split("_").join(" "), features: value };
      }
    );

    // ensure the section with Safety_and_Security_Features comes first
    const safetyAndSecuritySection = mappedSections.find(
      (section) => section.id === "Safety_and_Security_Features"
    );
    const otherSections = mappedSections.filter(
      (section) => section.id !== "Safety_and_Security_Features"
    );
    return [safetyAndSecuritySection!, ...otherSections];
  }, []);

  return (
    <div className=" py-10">
      <SectionTitle title="Features & Amenities" />
      <p className=" text-body-sm pt-2">
        Filter for the features and amenities you want in your place.
      </p>
      <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-x-20">
        {sections.map((section) => {
          const isAllSectionSelected = section.features.every((feature) =>
            features.includes(feature)
          );
          return (
            <div key={section.id} className=" ">
              <p className="uppercase text-body-xs font-bold pb-2">
                {section.label}
              </p>

              <div className=" flex flex-wrap gap-4">
                <label
                  className={cn(
                    " flex items-center border-2 border-primary text-primary gap-2 px-4 py-1 rounded-full relative",
                    " transition-colors duration-150 h-[38px] cursor-pointer",
                    {
                      " bg-primary border-primary text-white":
                        isAllSectionSelected,
                    }
                  )}>
                  <input
                    type="checkbox"
                    className=" sr-only"
                    value={"All"}
                    checked={isAllSectionSelected}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateFilter({
                          features: [
                            ...features,
                            ...section.features.filter(
                              (feature) => !features.includes(feature)
                            ),
                          ],
                        });
                      } else {
                        updateFilter({
                          features: features.filter(
                            (selectedAmenity) =>
                              !section.features.includes(selectedAmenity)
                          ),
                        });
                      }
                    }}
                  />

                  <p className=" text-body-sm font-bold px-2">All</p>
                </label>
                {section.features.map((amenity) => {
                  const isChecked = features.includes(amenity);
                  return (
                    <label
                      key={amenity}
                      className={cn(
                        " flex items-center border-2 border-primary text-primary gap-2 px-4 py-1 rounded-full relative",
                        " transition-colors duration-150 h-[38px] cursor-pointer",
                        {
                          " bg-primary border-primary text-white": isChecked,
                        }
                      )}>
                      <input
                        type="checkbox"
                        className=" sr-only"
                        value={amenity}
                        checked={features.includes(amenity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFilter({
                              features: [...features, amenity],
                            });
                          } else {
                            updateFilter({
                              features: features.filter(
                                (selectedAmenity) => selectedAmenity !== amenity
                              ),
                            });
                          }
                        }}
                      />
                      <span className=" w-7 flex-shrink-0 [&_svg]:h-5 [&_svg]:fill-current ">
                        {
                          SHORT_LET_AMENITIES_ICON_MAP[
                            amenity as keyof typeof SHORT_LET_AMENITIES_ICON_MAP
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
    </div>
  );
};

const SectionTitle = ({
  title,
  filterCount,
}: {
  title: string;
  filterCount?: number;
}) => {
  return (
    <div className="w-fit relative">
      <h2 className=" text-heading-4 font-bold">{title}</h2>
      {!!filterCount && (
        <span className=" size-6 rounded-full flex items-center justify-center absolute -right-6 -top-3 text-body-subtext text-white font-bold bg-primary">
          {filterCount}
        </span>
      )}
    </div>
  );
};

const SHORTLET_SERVICES = [
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
