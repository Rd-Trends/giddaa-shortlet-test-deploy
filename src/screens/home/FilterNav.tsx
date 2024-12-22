"use client";

import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/Button";
import FilterIcon from "@/svgs/Filtericon";
import React, { useState } from "react";
import FilterDrawer from "./FilterDrawer";
import CustomPopoverAsDropdownMenu from "./components/CustomPopover";
import { Checkbox } from "@/components/ui/Checkbox";
import { SHORT_LET_STAY_TYPES } from "@/constants/short-let-stay-types";
import { SHORT_LET_HOUSE_TYPES } from "@/constants/short-let-house-types";
import { formatCurrency } from "@/utils/format-currency";
import { Slider } from "@/components/ui/Slider";
import DropdownInput from "@/components/ui/Select";
import pluralize from "pluralize";
import {
  useGetAllStatesInACountry,
  useGetCitiesInAState,
} from "@/apis/queries/location";
import Combobox from "@/components/ui/Combobox";
import { useFilterStore } from "@/app/providers/home-page-filter-provider";
import { cn } from "@/utils/classname";

type FilterNavProps = {
  totalShortLets: number;
  isFetching?: boolean;
};

const FilterNav = ({ totalShortLets, isFetching }: FilterNavProps) => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const numberOfBedrooms = useFilterStore((state) => state.bedrooms);
  const numberOfBathrooms = useFilterStore((state) => state.bathrooms);
  const city = useFilterStore((state) => state.city);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const { data: stateData, isLoading: isLoadingStates } =
    useGetAllStatesInACountry(
      { pageNumber: 1, pageSize: 100, countryId: "NIGERIA" },
      {
        enabled: isStateDropdownOpen,
      }
    );

  const { data: citiesData, isLoading: isLoadingCities } = useGetCitiesInAState(
    {
      pageNumber: 1,
      pageSize: 100,
      stateId: selectedState,
    },
    {
      enabled: !!selectedState && isCityDropdownOpen,
    }
  );

  return (
    <>
      <Container className=" border-b border-mid-grey py-4 flex items-center gap-2 sticky top-[5rem] z-50 bg-background overflow-x-auto ">
        <SelectPlaceTypes />
        <Combobox
          wrapperClassName=" hidden xl:flex"
          open={isStateDropdownOpen}
          onOpenChange={setIsStateDropdownOpen}
          triggerClassName=" h-[35px] gap-2"
          placeholder="State"
          align="start"
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
          wrapperClassName=" hidden xl:flex"
          open={isCityDropdownOpen}
          onOpenChange={setIsCityDropdownOpen}
          triggerClassName=" h-[35px] gap-2"
          placeholder="Area"
          align="start"
          defaultValue={city}
          options={
            citiesData?.value?.map((city) => ({
              label: city.name,
              value: city.id,
            })) || []
          }
          isLoading={isLoadingCities}
          onSelect={(value) => updateFilter({ city: value })}
        />

        <PriceFilter />

        <DropdownInput
          wrapperClassName=" hidden xl:flex"
          triggerClassName=" h-[35px]  gap-2"
          contentClassName="max-h-[320px] w-[220px]"
          options={[
            { label: "All number of beds", value: "all" },
            ...Array.from({ length: 20 }).map((_, index) => ({
              label: `${index + 1} ${pluralize("Bed", index + 1)}`,
              value: `${index + 1}`,
            })),
          ]}
          sort={false}
          placeholder="Beds"
          defaultValue={
            numberOfBedrooms === 0 ? "all" : numberOfBedrooms.toString()
          }
          onSelect={(value) => {
            updateFilter({
              bedrooms: value === "all" ? 0 : parseInt(value),
            });
          }}
        />
        <DropdownInput
          wrapperClassName=" hidden xl:flex"
          triggerClassName=" h-[35px]  gap-2"
          contentClassName="max-h-[320px] w-[220px]"
          placeholder="Baths"
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
        />

        <SelectHouseTypes />

        <Button
          variant={"outline"}
          className=" text-body-subtext font-bold h-[35px]"
          onClick={() => setShowFilterDrawer(true)}>
          <FilterIcon className=" size-4" />
          More Filters
        </Button>
      </Container>

      <FilterDrawer
        isOpen={showFilterDrawer}
        setIsOpen={setShowFilterDrawer}
        totalShortLets={totalShortLets}
        isFetching={isFetching}
      />
    </>
  );
};

export default FilterNav;

const SelectPlaceTypes = () => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const types = useFilterStore((state) => state.types);

  const isAllSelected = types.includes("all");
  const filterCount = isAllSelected ? 0 : types.length;

  return (
    <DisplayFilterCount count={filterCount}>
      <CustomPopoverAsDropdownMenu
        placeholder="Place Type"
        triggerClassName=" h-[35px] gap-2">
        <div>
          <div className=" flex items-center space-x-2 border-b border-mid-grey px-4 py-2">
            <Checkbox
              id="all-place-type"
              checked={isAllSelected}
              value={"All"}
              onCheckedChange={(checked) => {
                if (checked) {
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
            <label htmlFor="all-place-type" className="text-body-xs font-bold">
              All Types
            </label>
          </div>

          {SHORT_LET_STAY_TYPES.map((type) => {
            const isChecked = types.includes(type.id) || isAllSelected;

            return (
              <div
                key={type.id}
                className=" flex items-center space-x-2 px-4 py-2">
                <Checkbox
                  id={type.id}
                  value={type.id}
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    if (checked) {
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
                <label htmlFor={type.id} className="text-body-xs font-normal">
                  {type.name}
                </label>
              </div>
            );
          })}
        </div>
      </CustomPopoverAsDropdownMenu>
    </DisplayFilterCount>
  );
};

const SelectHouseTypes = () => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const types = useFilterStore((state) => state.houseTypes);

  const isAllSelected = types.includes("all");
  const filterCount = isAllSelected ? 0 : types.length;

  return (
    <DisplayFilterCount count={filterCount} className=" hidden xl:flex">
      <CustomPopoverAsDropdownMenu
        placeholder="House Type"
        triggerClassName=" h-[35px] w-full gap-2 "
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
            <label htmlFor="all-place-type" className="text-body-xs font-bold">
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
                  <label htmlFor={type.id} className="text-body-xs font-normal">
                    {type.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </CustomPopoverAsDropdownMenu>
    </DisplayFilterCount>
  );
};

const PriceFilter = () => {
  const updateFilter = useFilterStore((state) => state.setFilter);
  const minimumPrice = useFilterStore((state) => state.minimumPrice);
  const maximumPrice = useFilterStore((state) => state.maximumPrice);
  const cautionFee = useFilterStore((state) => state.cautionFee);
  const [priceRange, setPriceRange] = useState([minimumPrice, maximumPrice]);
  const [prevPriceRange, setPrevPriceRange] = useState([
    minimumPrice,
    maximumPrice,
  ]);

  // Update the filter if the price range changes, without using useEffect
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
    <DisplayFilterCount count={priceCount + cautionFeeCount}>
      <CustomPopoverAsDropdownMenu
        placeholder="Price"
        triggerClassName=" h-[35px] gap-2">
        <div className=" space-y-6 p-4">
          <div>
            <p className=" text-body-sm pb-2">
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
      </CustomPopoverAsDropdownMenu>
    </DisplayFilterCount>
  );
};

const DisplayFilterCount = ({
  children,
  count,
  className,
}: {
  children: React.ReactNode;
  count: number;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full", className)}>
      {children}
      {!!count && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-body-sm rounded-full size-[18px] flex justify-center items-center">
          {count}
        </span>
      )}
    </div>
  );
};
