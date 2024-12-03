import RenderInnerHtml from "@/components/ui/RenderInnerHtml";
import BathTubIcon from "@/svgs/BathTubIcon";
import BedIcon from "@/svgs/BedIcon";
import CalendarIcon from "@/svgs/CalendarIcon";
import CautionIcon from "@/svgs/CautionIcon";
import ClockIcon from "@/svgs/ClockIcon";
import DoorOpenIcon from "@/svgs/DoorOpenIcon";
import LocationIcon from "@/svgs/LocationIcon";
import MoneyStackIcon from "@/svgs/MoneyStackIcon";
import PeopleIcon from "@/svgs/PeopleIcon";
import PropertyIcon from "@/svgs/PropertyIcon";
import { ShortLet } from "@/types/short-let";
import React from "react";

const HighlightSection = ({ shortLet }: { shortLet: ShortLet }) => {
  return (
    <div className=" space-y-8 divide-y divide-mid-grey">
      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 xl:gap-8">
        <div className=" flex items-start space-x-4 pr-4 xl:pr-8 border-r border-mid-grey">
          <MoneyStackIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              150K
            </p>
            <p className="text-body-md">Per Nigth</p>
          </div>
        </div>

        <div className=" flex items-start space-x-4 md:border-r border-mid-grey md:pr-4 xl:pr-8">
          <BedIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet.numberOfBedroom} Beds
            </p>
            <p className="text-body-md">Bedrooms</p>
          </div>
        </div>

        <div className=" flex items-start space-x-4 pr-4 md:pr-0 xl:pr-8 border-r md:border-r-0 xl:border-r border-mid-grey">
          <BathTubIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet.numberOfBathroom} Baths
            </p>
            <p className="text-body-md">Bathrooms</p>
          </div>
        </div>

        <div className=" flex items-start space-x-4">
          <LocationIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet.address}
            </p>
            <p className="text-body-md">Location</p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 xl:gap-8 pt-8">
        <div className=" flex items-start space-x-4 pr-4 xl:pr-8 border-r border-mid-grey">
          <PropertyIcon color="#000" className="size-6 md:size-8 shrink-0" />
          <div className=" text-black space-y-2">
            <p className=" font-bold text-body-lg md:text-[20px] leading-tight capitalize ">
              {shortLet.type.split("_").join(" ").toLowerCase()}
            </p>
            <p className="text-body-md">You will book the entire space</p>
          </div>
        </div>

        <div className=" flex items-start space-x-4 md:border-r border-mid-grey md:pr-4 xl:pr-8">
          <CalendarIcon color="#000" className="size-6 md:size-6 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              2 Nights
            </p>
            <p className="text-body-md">
              The minimum number of nights you can book
            </p>
          </div>
        </div>

        <div className=" flex items-start space-x-4 pr-4 md:pr-0 xl:pr-8 border-r md:border-r-0 xl:border-r border-mid-grey">
          <ClockIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              Check-In and Check-Out
            </p>
            <div className="text-body-md space-y-1">
              <RenderInnerHtml
                html={shortLet.checkInProcess}
                className="prose-p:my-1 prose-ul:-ml-2"
              />
              <RenderInnerHtml
                html={shortLet.checkOutProcess}
                className="prose-p:my-1 prose-ul:-ml-2"
              />
            </div>
          </div>
        </div>

        <div className=" flex items-start space-x-4">
          <DoorOpenIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              Check-In Method
            </p>
            <p className="text-body-md capitalize">
              {shortLet.checkInMethod.split("_").join(" ").toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 xl:gap-8 pt-8">
        <div className=" flex items-start space-x-4 pr-4 xl:pr-8 border-r border-mid-grey">
          <CautionIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              N50K - Paid Back 24 Hours after Inspection.
            </p>
            <p className="text-body-md">
              Caution Fee: Used to cover potential damage costs to the short
              let.
            </p>
          </div>
        </div>

        <div className=" flex items-start space-x-4 md:border-r border-mid-grey md:pr-4 xl:pr-8">
          <PeopleIcon className="size-6 md:size-7 shrink-0" />
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              2 Guests
            </p>
            <p className="text-body-md">Maximum Number of Guests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
