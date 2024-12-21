"use client";

import { useVerifyBookingPayment } from "@/apis/mutations/booking";
import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import { toast } from "@/lib/toast";
import { ShortLetBooking } from "@/types/short-let";
import { cn } from "@/utils/classname";
import { formatCurrency } from "@/utils/format-currency";
import pluralize from "pluralize";
import { use100vh } from "react-div-100vh";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Paystack from "@paystack/inline-js";

type SelectPaymentMethodModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  booking: ShortLetBooking;
};

const HandlePaymentModal = ({
  isOpen,
  setIsOpen,
  booking,
}: SelectPaymentMethodModalProps) => {
  const maxHeight = use100vh() || "700";

  const verifyPayment = useVerifyBookingPayment();

  const initializePayment = async () => {
    if (!booking?.transaction?.rrr) {
      return;
    }

    const popup = new Paystack();
    const status = popup
      .resumeTransaction({
        accessCode: booking?.transaction?.rrr,
      })
      .getStatus().status;

    if (status === "success") {
      handlePaymentSuccess();
    }
    if (status === "failed") {
      handlePaymentFailure();
    }
  };

  const handlePaymentSuccess = async () => {
    await verifyPayment.mutateAsync(booking.id, {
      onSuccess: () => {
        toast.success({
          title: "Payment Successful",
          description: "Your payment was successful",
        });
      },
      onError: () => {
        toast.error({
          title: "Failed to verify payment",
          description: "Your payment was successful but we could not verify it",
        });
      },
    });
  };

  const handlePaymentFailure = () => {
    toast.error({
      title: "Payment Failed",
      description: "Your payment was not successful",
    });
  };

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        style={{ maxHeight: `calc(${maxHeight}px - 2rem)` }}
        className=" rounded-[20px] max-w-full p-0 flex flex-col overflow-y-auto flex-1"
        wrapperClassName=" rounded-[22px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[911px] flex flex-col overflow-y-auto ">
        <ModalHeader className=" border-b border-mid-grey text-center p-4">
          <ModalTitle className=" font-secondary text-heading-4 text-primary text-center">
            Available Payment Method
          </ModalTitle>
          <ModalDescription className=" text-body-sm text-center">
            You will pay <b>{formatCurrency(booking.totalFee)}</b> for a{" "}
            <b>
              {booking.numberOfDays} {pluralize("night", booking.numberOfDays)}
            </b>{" "}
            stay at the <b>{booking.shortlet.type}</b> in{" "}
            <b>
              {booking?.shortlet?.city?.name},{" "}
              {booking?.shortlet?.city?.state?.name}
            </b>
          </ModalDescription>
        </ModalHeader>
        <div className=" flex-1 space-y-4 overflow-y-auto p-4 relative z-0 px-4 xl:px-10 ">
          <div
            className={cn(
              " flex w-full cursor-pointer relative rounded-2xl bg-background p-0.5"
              // {
              //   " bg-primary-gradient shadow-[0px_4px_4px_2px_rgba(0,_0,_0,_0.10)] "

              // }
            )}>
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
          </div>

          <hr className=" border-mid-grey" />

          <div
            className={cn(
              " flex w-full cursor-pointer relative rounded-2xl bg-background p-0.5"
              // {
              //   " bg-primary-gradient shadow-[0px_4px_4px_2px_rgba(0,_0,_0,_0.10)] ":

              // }
            )}>
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
          </div>

          <hr className=" border-mid-grey" />

          <label
            className={cn(
              " flex w-full cursor-pointer relative rounded-2xl bg-background p-0.5"
              // {
              //   " bg-primary-gradient shadow-[0px_4px_4px_2px_rgba(0,_0,_0,_0.10)] "
              // }
            )}>
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
          <Button
            onClick={() => {
              setIsOpen(false);
              initializePayment();
            }}
            className=" font-bold md:px-8">
            Continue to Payment{" "}
            <BsArrowUpRightCircleFill className={cn(" size-5 fill-white")} />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HandlePaymentModal;
