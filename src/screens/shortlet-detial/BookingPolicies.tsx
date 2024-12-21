import RenderInnerHtml from "@/components/ui/RenderInnerHtml";
import ClockIcon from "@/svgs/ClockIcon";
import HouseRulesIcon from "@/svgs/HouseRulesIcon";
import MoneyReverseIcon from "@/svgs/MoneyReverseIcon";
import { ShortLet } from "@/types/short-let";
import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";

const BookingPoliciesAndHouseRulesSection = ({
  shortLet,
}: {
  shortLet: ShortLet;
}) => {
  return (
    <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className=" space-y-4">
        <ClockIcon className=" size-6" />
        <div className=" space-y-2">
          <p className=" text-body-lg font-bold">
            Check-In - {shortLet.checkInTime}
          </p>
          <p className=" text-body-lg font-bold">
            Check-Out - {shortLet.checkOutTime}
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
        <HouseRulesIcon className=" w-[29px] h-[31px]" />
        <div className=" space-y-2">
          <p className=" text-body-lg font-bold">House Rules</p>
          <ul className=" list-image-none">
            {shortLet.rules.map((rule, index) => {
              return (
                <li className="flex items-start gap-2" key={index}>
                  <BsCaretRightFill className=" size-2.5 mt-1.5" />
                  <span>
                    {rule.name}. {rule.description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {shortLet.cancellationPolicy && (
        <div className=" space-y-4">
          <IoMdCloseCircleOutline strokeWidth={0} className=" size-6" />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">Cancellation Policy</p>
            <RenderInnerHtml
              html={shortLet.cancellationPolicy}
              className="prose-p:my-1 prose-ul:-ml-2 text-black"
            />
          </div>
        </div>
      )}

      {shortLet.refundPolicy && (
        <div className=" space-y-4">
          <MoneyReverseIcon className=" size-6" />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">Refund Policy</p>
            <RenderInnerHtml
              html={shortLet.refundPolicy}
              className="prose-p:my-1 prose-ul:-ml-2 text-black list"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPoliciesAndHouseRulesSection;
