import BrushIcon from "@/svgs/BrushIcon";
import CarIcon from "@/svgs/CarIcon";
import CateringIcon from "@/svgs/CateringIcon";
import CelebrationIcon from "@/svgs/CelebrationIcon";
import CompassIcon from "@/svgs/CompassIcon";
import GroceryIcon from "@/svgs/GroceryIcon";
import HotPotIcon from "@/svgs/HotPotIcon";
import SpaAndWellnessIcon from "@/svgs/SpaAndWellnessIcon";
import SteamIronIcon from "@/svgs/SteamIronIcon";

export const SHORT_LET_SERVICE_ICON_MAP = {
  PAID_BULK_FOOD_PURCHASE_SHORTLET_SERVICE: (
    <HotPotIcon color="currentColor" className="size-[32px]" />
  ),
  FREE_BULK_FOOD_PURCHASE_SHORTLET_SERVICE: (
    <HotPotIcon color="currentColor" className="size-[32px]" />
  ),

  PAID_DRY_CLEANING_SHORTLET_SERVICE: (
    <SteamIronIcon color="currentColor" className=" w-[40] h-[33px]" />
  ),
  FREE_DRY_CLEANING_SHORTLET_SERVICE: (
    <SteamIronIcon color="currentColor" className=" w-[40] h-[33px]" />
  ),

  FREE_CAR_HIRE_SHORTLET_SERVICE: (
    <CarIcon color="currentColor" className="w-[31px] h-[30px] " />
  ),
  PAID_CAR_HIRE_SHORTLET_SERVICE: (
    <CarIcon color="currentColor" className="w-[31px] h-[30px] " />
  ),

  FREE_ONDEMAND_CATERING_SHORTLET_SERVICE: (
    <CateringIcon color="currentColor" className="size-[32px]" />
  ),
  PAID_ONDEMAND_CATERING_SHORTLET_SERVICE: (
    <CateringIcon color="currentColor" className="size-[32px]" />
  ),

  PAID_SPA_AND_WELNNESS_SHORTLET_SERVICE: (
    <SpaAndWellnessIcon color="currentColor" className="w-[31px] h-[28px]" />
  ),
  FREE_SPA_AND_WELNNESS_SHORTLET_SERVICE: (
    <SpaAndWellnessIcon color="currentColor" className="w-[31px] h-[28px]" />
  ),

  PAID_HOUSE_KEEPING_SHORTLET_SERVICE: (
    <BrushIcon color="currentColor" className=" w-[33px] h-[28px] " />
  ),
  FREE_HOUSE_KEEPING_SHORTLET_SERVICE: (
    <BrushIcon color="currentColor" className=" w-[33px] h-[28px] " />
  ),

  PAID_CITY_TOURS_AND_EXCURSIONS_SHORTLET_SERVICE: (
    <CompassIcon color="currentColor" className="size-[28px]" />
  ),
  FREE_CITY_TOURS_AND_EXCURSIONS_SHORTLET_SERVICE: (
    <CompassIcon color="currentColor" className="size-[28px]" />
  ),

  PAID_GROCERY_DELIVERY_SHORTLET_SERVICE: (
    <GroceryIcon color="currentColor" className="w-[27px] h-[32px] " />
  ),
  FREE_GROCERY_DELIVERY_SHORTLET_SERVICE: (
    <GroceryIcon color="currentColor" className="w-[27px] h-[32px] " />
  ),

  PAID_EVENT_HOSTING_SHORTLET_SERVICE: (
    <CelebrationIcon color="currentColor" className=" w-[32px] h-[34px]" />
  ),
  FREE_EVENT_HOSTING_SHORTLET_SERVICE: (
    <CelebrationIcon color="currentColor" className=" w-[32px] h-[34px]" />
  ),
};
