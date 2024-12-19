import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import { DEFAULT_IMAGES } from "@/constants/images";
import React from "react";

export const ReservationSuccessModal = ({
  isOpen,
  setIsOpen,
  shortLetName,
  state,
  city,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  shortLetName: string;
  state: string;
  city: string;
}) => {
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        preventAutoFocusOnOpen
        className=" rounded-[20px] p-4"
        wrapperClassName="w-full max-w-[calc(100vw-2rem)] md:max-w-[441px] rounded-[22px]">
        <ModalHeader className="py-4 px-8">
          <img
            src={DEFAULT_IMAGES.reservation_success}
            alt="Reservation Success"
            className="size-[133px] mx-auto -mt-4"
          />
          <ModalTitle className="text-body-md font-bold text-center !-mt-5">
            Awesome! We’ve Received Your Reservation.
          </ModalTitle>
        </ModalHeader>

        <ModalDescription className=" text-body-sm font-normal text-center">
          Our team will confirm the availability of ,<b>{shortLetName}</b>{" "}
          located at{" "}
          <b>
            {state}, {city}
          </b>
          . If it is available, you’ll be sent a payment link to make payment.
          If it isn’t available, we will get back to you with other options
          within the same location and price point.
        </ModalDescription>

        <ModalFooter className=" px-4 py-1 border-2 border-primary bg-white rounded-xl mt-6">
          <p className=" text-body-subtext text-black text-center">
            A payment link will be sent to your email and phone number once
            availability is confirmed.
          </p>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
