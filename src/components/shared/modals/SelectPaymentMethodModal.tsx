"use client";

import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import { ShortLet } from "@/types/short-let";
import { cn } from "@/utils/classname";
import { formatCurrency } from "@/utils/format-currency";
import pluralize from "pluralize";
import { useState } from "react";
import { use100vh } from "react-div-100vh";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type SelectPaymentMethodModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  totalFee: number;
  numberOfNights: number;
  propertyType: string;
  city: ShortLet["city"];
};

const SelectPaymentMethodModal = ({
  isOpen,
  setIsOpen,
  totalFee,
  numberOfNights,
  propertyType,
  city,
}: SelectPaymentMethodModalProps) => {
  const maxHeight = use100vh() || "700";
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        style={{ maxHeight: `calc(${maxHeight}px - 2rem)` }}
        className=" rounded-[20px] max-w-full p-0 flex flex-col overflow-y-auto flex-1"
        wrapperClassName=" rounded-[22px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[911px] flex flex-col overflow-y-auto ">
        <ModalHeader className=" border-b border-mid-grey text-center p-4">
          <ModalTitle className=" font-secondary text-heading-4 text-primary text-center">
            Select Payment Method
          </ModalTitle>
          <ModalDescription className=" text-body-sm text-center">
            You will pay <b>{formatCurrency(totalFee)}</b> for a{" "}
            <b>
              {numberOfNights} {pluralize("night", numberOfNights)}
            </b>{" "}
            stay at the <b>{propertyType}</b> in{" "}
            <b>
              {city.name}, {city?.state?.name}
            </b>
          </ModalDescription>
        </ModalHeader>
        <div className=" flex-1 space-y-4 overflow-y-auto p-4 relative z-0 px-4 xl:px-10 ">
          <label
            className={cn(
              " flex w-full cursor-pointer relative rounded-2xl bg-background p-0.5",
              {
                " bg-primary-gradient shadow-[0px_4px_4px_2px_rgba(0,_0,_0,_0.10)] ":
                  selectedPaymentMethod === "bank-transfer",
              }
            )}>
            <input
              type="radio"
              onChange={(e) => {
                setSelectedPaymentMethod(e.target.value);
              }}
              name="payment-method"
              value="bank-transfer"
              className=" sr-only"
            />
            <div className=" w-full flex flex-row items-start space-x-5 p-4 bg-background rounded-[14px]">
              <img
                src="/icons/bank-transfer.png"
                alt="Bank Transfer"
                className=" w-11 h-auto"
              />
              <div className="w-full flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-8 xl:gap-10 text-black">
                <div className="  ">
                  <span className=" inline-block border-2 border-primary bg-accent-green rounded-full py-1 px-3.5 text-primary text-body-tiny font-bold uppercase mb-2">
                    Recommended
                  </span>
                  <h3 className=" font-bold text-body-sm">Bank Transfer</h3>
                  <p className=" text-body-sm">
                    Make a secured bank transfer to a unique account number to
                    secure your reservation. Payments are handled by PayStack.
                  </p>
                </div>

                <div className=" whitespace-nowrap ">
                  <p className=" text-body-md font-bold">
                    {formatCurrency(50)}
                  </p>
                  <p className=" text-body-xs font-medium">Estimated Fee</p>
                </div>
              </div>
            </div>
          </label>

          <hr className=" border-mid-grey" />

          <label
            className={cn(
              " flex w-full cursor-pointer relative rounded-2xl bg-background p-0.5",
              {
                " bg-primary-gradient shadow-[0px_4px_4px_2px_rgba(0,_0,_0,_0.10)] ":
                  selectedPaymentMethod === "card",
              }
            )}>
            <input
              type="radio"
              onChange={(e) => {
                setSelectedPaymentMethod(e.target.value);
              }}
              name="payment-method"
              value="card"
              className=" sr-only"
            />
            <div className=" w-full flex flex-row items-start space-x-5 p-4 bg-background rounded-[14px]">
              <img
                src="/icons/card-payment.png"
                alt="Card Payment"
                className=" w-11 h-auto"
              />
              <div className="w-full flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-8 xl:gap-10 text-black">
                <div className=" ">
                  <h3 className=" font-bold text-body-sm">Card</h3>
                  <p className=" text-body-sm">
                    Make a secured debit card payment with a Visa, Verve, or
                    Mastercard for your reservation. Payments are handled by
                    PayStack.
                  </p>
                </div>

                <div className=" whitespace-nowrap ">
                  <p className=" text-body-md font-bold">
                    {formatCurrency(500)}
                  </p>
                  <p className=" text-body-xs font-medium">Estimated Fee</p>
                </div>
              </div>
            </div>
          </label>

          <hr className=" border-mid-grey" />

          <label
            className={cn(
              " flex w-full cursor-pointer relative rounded-2xl bg-background p-0.5",
              {
                " bg-primary-gradient shadow-[0px_4px_4px_2px_rgba(0,_0,_0,_0.10)] ":
                  selectedPaymentMethod === "others",
              }
            )}>
            <input
              type="radio"
              onChange={(e) => {
                setSelectedPaymentMethod(e.target.value);
              }}
              name="payment-method"
              value="others"
              className=" sr-only"
            />
            <div className="w-full flex flex-row items-start space-x-5 p-4 bg-background rounded-[14px]">
              <img
                src="/icons/others-payment.png"
                alt="Others Payment"
                className=" w-11 h-auto"
              />
              <div className="w-full flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-8 xl:gap-10 text-black">
                <div className=" ">
                  <h3 className=" font-bold text-body-sm">Others</h3>
                  <p className=" text-body-sm">
                    Other payment methods include USSD, and pay with Opay.
                  </p>
                </div>

                <div className=" whitespace-nowrap ">
                  <p className=" text-body-md font-bold">Varies</p>
                  <p className=" text-body-xs font-medium">Estimated Fee</p>
                </div>
              </div>
            </div>
          </label>
        </div>

        <ModalFooter className=" p-4 border-t flex flex-row items-center border-mid-grey !justify-center mt-8 space-x-4">
          <Button
            variant={"outline-danger"}
            className=" font-bold md:px-8"
            onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button>
            Continue to Payment{" "}
            <BsArrowUpRightCircleFill className=" size-5 fill-white" />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectPaymentMethodModal;
