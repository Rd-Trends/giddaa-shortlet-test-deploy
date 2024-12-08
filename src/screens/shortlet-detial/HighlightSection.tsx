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
import { abbreviateCount } from "@/utils/abbreviate-count";
import pluralize from "pluralize";
import React from "react";

const HighlightSection = ({ shortLet }: { shortLet: ShortLet }) => {
  return (
    <div className=" space-y-8 divide-y divide-mid-grey">
      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 xl:gap-8">
       <div className=" flex flex-col md:flex-row items-start gap-4 pr-4 xl:pr-8 border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <MoneyStackIcon className="w-[41px] h-[30px]" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {abbreviateCount(shortLet.listingPrice)}
            </p>
            <p className="text-body-md">Per Nigth</p>
          </div>
        </div>

       <div className=" flex flex-col md:flex-row items-start gap-4 md:border-r border-mid-grey md:pr-4 xl:pr-8">
          <span className="w-11 flex-shrink-0">
            <BedIcon className="w-[37px] h-[24px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet.numberOfBedroom} Beds
            </p>
            <p className="text-body-md">Bedrooms</p>
          </div>
        </div>

       <div className=" flex flex-col md:flex-row items-start gap-4 pr-4 md:pr-0 xl:pr-8 border-r md:border-r-0 xl:border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <BathTubIcon className="w-[32px] h-[29px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet.numberOfBathroom} Baths
            </p>
            <p className="text-body-md">Bathrooms</p>
          </div>
        </div>

       <div className=" flex flex-col md:flex-row items-start gap-4">
          <span className="w-11 flex-shrink-0">
            <LocationIcon className="w-[25px] h-[31px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet.address}
            </p>
            <p className="text-body-md">Location</p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 xl:gap-8 pt-8">
        <div className=" flex flex-col md:flex-row items-start gap-4 pr-4 xl:pr-8 border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <PropertyIcon color="#000" className="w-[42px] h-[30px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className=" font-bold text-body-lg md:text-[20px] leading-tight capitalize ">
              {shortLet.type.split("_").join(" ").toLowerCase()}
            </p>
            <p className="text-body-md">You will book the entire space</p>
          </div>
        </div>

       <div className=" flex flex-col md:flex-row items-start gap-4 md:border-r border-mid-grey md:pr-4 xl:pr-8">
          <span className="w-11 flex-shrink-0">
            <CalendarIcon color="#000" className="w-[27px] h-[30px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet?.minBookingDays || 1}{" "}
              {pluralize("Night", shortLet?.minBookingDays || 1)}
            </p>
            <p className="text-body-md">
              The minimum number of nights you can book
            </p>
          </div>
        </div>

       <div className=" flex flex-col md:flex-row items-start gap-4 pr-4 md:pr-0 xl:pr-8 border-r md:border-r-0 xl:border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <ClockIcon className="w-[30px] h-[30px] shrink-0" />
          </span>
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

       <div className=" flex flex-col md:flex-row items-start gap-4">
          <span className="w-11 flex-shrink-0">
            <DoorOpenIcon className="w-[31px] h-[37px] shrink-0" />
          </span>
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
       <div className=" flex flex-col md:flex-row items-start gap-4 pr-4 xl:pr-8 border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <CautionIcon className="w-[38px] h-[33px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {abbreviateCount(shortLet.cautionFee)} - Paid Back 24 Hours after
              Inspection.
            </p>
            <p className="text-body-md">
              Caution Fee: Used to cover potential damage costs to the short
              let.
            </p>
          </div>
        </div>

       <div className=" flex flex-col md:flex-row items-start gap-4 md:border-r border-mid-grey md:pr-4 xl:pr-8">
          <span className="w-11 flex-shrink-0">
            <PeopleIcon className="w-[37px] h-[28px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-lg md:text-[20px] leading-tight ">
              {shortLet.maxGuestNumber}{" "}
              {pluralize("Guest", shortLet.maxGuestNumber)}
            </p>
            <p className="text-body-md">Maximum Number of Guests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
