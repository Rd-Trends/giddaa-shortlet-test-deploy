"use client";

import BrushIcon from "@/svgs/BrushIcon";
import CarIcon from "@/svgs/CarIcon";
import CateringIcon from "@/svgs/CateringIcon";
import CelebrationIcon from "@/svgs/CelebrationIcon";
import CompassIcon from "@/svgs/CompassIcon";
import GroceryIcon from "@/svgs/GroceryIcon";
import HotPotIcon from "@/svgs/HotPotIcon";
import SpaAndWellnessIcon from "@/svgs/SpaAndWellnessIcon";
import SteamIronIcon from "@/svgs/SteamIronIcon";
import { ShortLet } from "@/types/short-let";
import React, { useMemo } from "react";

const IconMap = {
  PAID_BULK_FOOD_PURCHASE_SHORTLET_SERVICE: (
    <HotPotIcon className="size-[32px]" />
  ),
  FREE_BULK_FOOD_PURCHASE_SHORTLET_SERVICE: (
    <HotPotIcon className="size-[32px]" />
  ),

  PAID_DRY_CLEANING_SHORTLET_SERVICE: (
    <SteamIronIcon className=" w-[40] h-[33px]" />
  ),
  FREE_DRY_CLEANING_SHORTLET_SERVICE: (
    <SteamIronIcon className=" w-[40] h-[33px]" />
  ),

  FREE_CAR_HIRE_SHORTLET_SERVICE: <CarIcon className="w-[31px] h-[30px] " />,
  PAID_CAR_HIRE_SHORTLET_SERVICE: <CarIcon className="w-[31px] h-[30px] " />,

  FREE_ONDEMAND_CATERING_SHORTLET_SERVICE: (
    <CateringIcon className="size-[32px]" />
  ),
  PAID_ONDEMAND_CATERING_SHORTLET_SERVICE: (
    <CateringIcon className="size-[32px]" />
  ),

  PAID_SPA_AND_WELNNESS_SHORTLET_SERVICE: (
    <SpaAndWellnessIcon className="w-[31px] h-[28px]" />
  ),
  FREE_SPA_AND_WELNNESS_SHORTLET_SERVICE: (
    <SpaAndWellnessIcon className="w-[31px] h-[28px]" />
  ),

  PAID_HOUSE_KEEPING_SHORTLET_SERVICE: (
    <BrushIcon className=" w-[33px] h-[28px] " />
  ),
  FREE_HOUSE_KEEPING_SHORTLET_SERVICE: (
    <BrushIcon className=" w-[33px] h-[28px] " />
  ),

  PAID_CITY_TOURS_AND_EXCURSIONS_SHORTLET_SERVICE: (
    <CompassIcon className="size-[28px]" />
  ),
  FREE_CITY_TOURS_AND_EXCURSIONS_SHORTLET_SERVICE: (
    <CompassIcon className="size-[28px]" />
  ),

  PAID_GROCERY_DELIVERY_SHORTLET_SERVICE: (
    <GroceryIcon className="w-[27px] h-[32px] " />
  ),
  FREE_GROCERY_DELIVERY_SHORTLET_SERVICE: (
    <GroceryIcon className="w-[27px] h-[32px] " />
  ),

  PAID_EVENT_HOSTING_SHORTLET_SERVICE: (
    <CelebrationIcon className=" w-[32px] h-[34px]" />
  ),
  FREE_EVENT_HOSTING_SHORTLET_SERVICE: (
    <CelebrationIcon className=" w-[32px] h-[34px]" />
  ),
};

const ServicesSection = ({ services }: { services: ShortLet["services"] }) => {
  const availableservices = useMemo(() => {
    return services.map((service) => {
      return {
        name: service.name,
        id: service.id,
        description: service.description,
        isPaid: JSON.parse(service.extraProperties || "{}")?.payment === "PAID",
      };
    });
  }, [services]);
  return (
    <div className="!mt-4">
      <p className=" text-body-md text-black">
        Free and paid services offered at this place.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 xl:mt-10 gap-8 xl:gap-x-[72px] xl:gap-y-10">
        {availableservices.map((service) => {
          return (
            <div key={service.id} className=" space-y-4">
              {IconMap[service.id as keyof typeof IconMap]}
              <div className=" space-y-2">
                <p className=" text-body-lg font-bold">{service.name}</p>
                <p className=" text-body-sm font-medium text-primary">
                  {service.isPaid
                    ? " Additional payments required upon service request"
                    : "Free (Paid for with the booking fee)"}
                </p>

                <p className=" text-body-md">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
