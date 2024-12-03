import RenderInnerHtml from "@/components/ui/RenderInnerHtml";
import ClockIcon from "@/svgs/ClockIcon";
import HouseRulesIcon from "@/svgs/HouseRulesIcon";
import MoneyReverseIcon from "@/svgs/MoneyReverseIcon";
import { ShortLet } from "@/types/short-let";
import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const BookingPoliciesAndHouseRulesSection = ({
  shortLet,
}: {
  shortLet: ShortLet;
}) => {
  return (
    <div className=" grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className=" space-y-4">
        <ClockIcon className=" size-6" />
        <div className=" space-y-2">
          <p className=" text-body-lg font-bold">
            Clock-In - {shortLet.checkInTime}
          </p>
          <p className=" text-body-lg font-bold">
            Clock-Out - {shortLet.checkOutTime}
          </p>
          <div className="text-body-md space-y-1">
            <RenderInnerHtml
              html={shortLet.checkInProcess}
              className="prose-p:my-1 prose-ul:-ml-2 text-black"
            />
            <RenderInnerHtml
              html={shortLet.checkOutProcess}
              className="prose-p:my-1 prose-ul:-ml-2 text-black"
            />
          </div>
        </div>
      </div>

      <div className=" space-y-4">
        <HouseRulesIcon className=" size-6" />
        <div className=" space-y-2">
          <p className=" text-body-lg font-bold">House Rules</p>
          <ul>
            {[1, 2, 3].map((_, index) => {
              return (
                <li key={index}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor, nemo.
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className=" space-y-4">
        <IoMdCloseCircleOutline strokeWidth={0} className=" size-7" />
        <div className=" space-y-2">
          <p className=" text-body-lg font-bold">Cancellation Policy</p>
          <ul>
            {[1, 2, 3].map((_, index) => {
              return (
                <li key={index}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor, nemo.
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className=" space-y-4">
        <MoneyReverseIcon className=" size-6" />
        <div className=" space-y-2">
          <p className=" text-body-lg font-bold">Refund Policy</p>
          <ul>
            {[1, 2, 3].map((_, index) => {
              return (
                <li key={index}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor, nemo.
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingPoliciesAndHouseRulesSection;
