import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/Button";
import FilterIcon from "@/svgs/Filtericon";
import React, { useState } from "react";
import FilterDrawer from "./FilterDrawer";
import CustomPopoverAsDropdownMenu from "./components/CustomPopover";
import { Checkbox } from "@/components/ui/Checkbox";
import { stayTypes } from "@/constants/short-let-stay-types";
import { houseTypes } from "@/constants/short-let-house-types";

const FilterNav = () => {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  return (
    <>
      <Container className=" border-b border-mid-grey py-4 flex items-center gap-4">
        <CustomPopoverAsDropdownMenu
          placeholder="Place Type"
          triggerClassName=" h-[35px] w-fit gap-2">
          <div>
            <div className=" flex items-center space-x-2 border-b border-mid-grey px-4 py-2">
              <Checkbox id="all-place-type" />
              <label
                htmlFor="all-place-type"
                className="text-body-xs font-bold">
                All Types
              </label>
            </div>

            {stayTypes.map((type) => {
              return (
                <div
                  key={type.id}
                  className=" flex items-center space-x-2 px-4 py-2">
                  <Checkbox id={type.id} />
                  <label htmlFor={type.id} className="text-body-xs font-normal">
                    {type.name}
                  </label>
                </div>
              );
            })}
          </div>
        </CustomPopoverAsDropdownMenu>

        <CustomPopoverAsDropdownMenu
          placeholder="House Type"
          triggerClassName=" h-[35px] w-fit gap-2 "
          wrapperClassName="max-h-[320px]">
          <div className="max-h-[320px] flex flex-col overflow-y-auto">
            <div className=" flex items-center space-x-2 border-b border-mid-grey px-4 py-2">
              <Checkbox id="all-place-type" />
              <label
                htmlFor="all-place-type"
                className="text-body-xs font-bold">
                All Types
              </label>
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col">
              {houseTypes.map((type) => {
                return (
                  <div
                    key={type.id}
                    className=" flex items-center space-x-2 px-4 py-2">
                    <Checkbox id={type.id} />
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
        <Button
          variant={"outline"}
          className=" text-body-subtext font-bold h-[35px]"
          onClick={() => setShowFilterDrawer(true)}>
          <FilterIcon className=" size-4" />
          More Filters
        </Button>
      </Container>

      <FilterDrawer isOpen={showFilterDrawer} setIsOpen={setShowFilterDrawer} />
    </>
  );
};

export default FilterNav;
