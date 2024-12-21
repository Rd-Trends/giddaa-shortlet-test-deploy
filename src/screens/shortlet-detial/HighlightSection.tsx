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
import VerificationIcon from "@/svgs/VerificationIcon";
import { ShortLet } from "@/types/short-let";
import { abbreviateCount } from "@/utils/abbreviate-count";
import { getShortLetDescription } from "@/utils/short-let";
import pluralize from "pluralize";
import React from "react";

const HighlightSection = ({ shortLet }: { shortLet: ShortLet }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2">
      <div className=" grid grid-cols-2 gap-6 gap-y-8 xl:gap-8 border-b pb-6 border-mid-grey">
        <div className=" flex flex-col xl:flex-row items-start gap-4 pr-6 md:pr-8 border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <MoneyStackIcon className="w-[36px] h-[25px] md:w-[41px] md:h-[30px]" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">
              {abbreviateCount(shortLet.listingPrice)}
            </p>
            <p className="text-body-sm xl:text-body-md">Per Night</p>
          </div>
        </div>

        <div className=" flex flex-col xl:flex-row items-start gap-4 md:border-r border-mid-grey pr-6 xl:pr-8">
          <span className="w-11 flex-shrink-0">
            <BedIcon className="w-[32px] h-[19px]  md:w-[37px] md:h-[24px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">
              {shortLet.numberOfBedroom} {pluralize("Bed", shortLet.numberOfBedroom)}
            </p>
            <p className="text-body-sm xl:text-body-md">Bedrooms</p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-6 gap-y-8 xl:gap-8 border-b pb-6 border-mid-grey mt-6 md:mt-0">
        <div className=" flex flex-col xl:flex-row items-start gap-4 pr-6 md:px-8 border-r md:border-r-0 border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <BathTubIcon className="w-[27px] h-[24px]  md:w-[32px] md:h-[29px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">
              {shortLet.numberOfBathroom}{" "}
              {pluralize("Bath", shortLet.numberOfBathroom)}
            </p>
            <p className="text-body-sm xl:text-body-md">Bathrooms</p>
          </div>
        </div>

        <div className=" flex flex-col xl:flex-row items-start gap-4 md:border-l border-mid-grey md:pl-8">
          <span className="w-11 flex-shrink-0">
            <LocationIcon className=" w-[22px] h-[26px] md:w-[25px] md:h-[31px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">
              {shortLet.city.name}, {shortLet.city.state.name}
            </p>
            <p className="text-body-sm xl:text-body-md">Location</p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-6 gap-y-8 xl:gap-8 pt-6 pb-6 border-b border-mid-grey ">
        <div className=" flex flex-col xl:flex-row items-start gap-4 pr-6 md:pr-8 border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <PropertyIcon
              color="#000"
              className=" w-[37px] h-[25px]  md:w-[42px] md:h-[30px] shrink-0"
            />
          </span>
          <div className=" text-black space-y-2">
            <p className=" font-bold text-body-md md:text-xl capitalize ">
              {getShortLetDescription(shortLet)?.replace("Book the", "")}
            </p>
            <p className="text-body-sm xl:text-body-md">
              You will book the entire space
            </p>
          </div>
        </div>

        <div className=" flex flex-col xl:flex-row items-start gap-4 md:border-r border-mid-grey pr-6 xl:pr-8">
          <span className="w-11 flex-shrink-0">
            <CalendarIcon
              color="#000"
              className="w-[22px] h-[25px] md:w-[27px] md:h-[30px] shrink-0"
            />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">
              {shortLet?.minBookingDays || 1}{" "}
              {pluralize("Night", shortLet?.minBookingDays || 1)}
            </p>
            <p className="text-body-sm xl:text-body-md">
              The minimum number of nights you can book
            </p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2  gap-6 gap-y-8 xl:gap-8 pt-6 pb-6 border-b border-mid-grey">
        <div className=" flex flex-col xl:flex-row items-start gap-4 pr-6 md:px-8 border-r md:border-r-0 border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <ClockIcon className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-lg">
              Check-In and Check-Out
            </p>
            <div className="text-body-sm xl:text-body-md space-y-1">
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

        <div className=" flex flex-col xl:flex-row items-start gap-4 md:border-l border-mid-grey md:pl-8">
          <span className="w-11 flex-shrink-0">
            <DoorOpenIcon className="w-[26px] h-[32px] md:w-[31px] md:h-[37px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl capitalize">
              {shortLet.checkInMethod.split("_").join(" ").toLowerCase()}
            </p>
            <p className="text-body-md capitalize">Check-In Method</p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2  gap-6 gap-y-8 xl:gap-8 pt-6">
        <div className=" flex flex-col xl:flex-row items-start gap-4 pr-4 xl:pr-8 border-r border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <CautionIcon className=" w-[30px] h-[28px] md:w-[38px] md:h-[33px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">
              {shortLet.cautionFee
                ? `${abbreviateCount(
                    shortLet.cautionFee
                  )} - Paid Back 24 Hours after Inspection.`
                : "No Caution Fee"}
            </p>
            <p className="text-body-sm xl:text-body-md">
              Caution Fee: Used to cover potential damage costs to the short
              let.
            </p>
          </div>
        </div>

        <div className=" flex flex-col xl:flex-row items-start gap-4 md:border-r border-mid-grey md:pr-4 xl:pr-8">
          <span className="w-11 flex-shrink-0">
            <PeopleIcon className="w-[32px] h-[23px] md:w-[37px] md:h-[28px] shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">
              {shortLet.maxGuestNumber}{" "}
              {pluralize("Guest", shortLet.maxGuestNumber)}
            </p>
            <p className="text-body-sm xl:text-body-md">
              Maximum Number of Guests
            </p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2  gap-6 gap-y-8 xl:gap-8 pt-6 mt-6 md:mt-0 border-t border-mid-grey md:border-t-0 ">
        <div className=" flex flex-col xl:flex-row items-start gap-4 pr-6 md:px-8 border-r md:border-r-0 border-mid-grey">
          <span className="w-11 flex-shrink-0">
            <VerificationIcon className=" size-[28px] md:sixe-[32px]  shrink-0" />
          </span>
          <div className=" text-black space-y-2">
            <p className="font-bold text-body-md xl:text-body-xl">Verified.</p>
            <p className="text-body-sm xl:text-body-md">
              This place, and its location have been verified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
