"use client";

import Container from "@/components/layouts/Container";
import useAuth from "@/hooks/useAuth";
import CheckCircleFillIcon from "@/svgs/CheckCircleFillIcon";
import { ShortLet } from "@/types/short-let";
import { cn } from "@/utils/classname";
import { useState } from "react";
import { BiXCircle } from "react-icons/bi";
import PersonalDetailsForm from "./PersonalDetailsform";
import MakeReservationForm from "./MakeReservationForm";
import { Button } from "@/components/ui/Button";
import ConfirmReservation from "./ConfirmReservation";
import { CommonModal } from "@/components/shared/modals/CommonModal";
import { useRouter } from "next/navigation";
import { DEFAULT_IMAGES } from "@/constants/images";
import { ReservationSuccessModal } from "./ReservationSuccessModal";

const steps = ["Personal Details", "Booking Details", "Confirm Reservation"];

export type ReservationFormDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
};

const ReservationForm = ({ shortLet }: { shortLet: ShortLet }) => {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const [step, setStep] = useState(0);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [formDetails, setFormDetails] = useState<ReservationFormDetails>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    checkInDate: "",
    checkOutDate: "",
    numberOfGuests: 0,
  });

  return (
    <Container className=" bg-background min-h-screen">
      <div className=" text-center py-6">
        <h1 className=" text-heading-2 font-secondary text-primary">
          Make a Reservation
        </h1>
        <p className=" text-body-sm mt-1">
          Reserve the entire apartment in {shortLet.city.name},{" "}
          {shortLet.city.state.name}. Once we confirm availability and your
          booking, you then pay.
        </p>

        <div className="relative">
          {step > 0 && (
            <Button
              variant="outline-danger"
              className=" absolute left-4 top-0 font-bold px-2"
              onClick={() => setShowCancelModal(true)}>
              <BiXCircle className="size-5" />
              Cancel
            </Button>
          )}

          {!isAuthenticated && (
            <div className=" flex items-center w-fit mt-6 mx-auto py-1.5 px-3.5 bg-accent-green text-primary uppercase text-body-tiny font-bold border-2 border-primary rounded-full">
              Reserving as a guest user
            </div>
          )}
        </div>

        <div className=" flex items-center justify-center space-x-4 mt-6">
          {steps.map((s, index) => (
            <div
              key={index}
              className={
                "outline-none border-none bg-transparent flex flex-col items-center"
              }>
              <div className=" relative text-white">
                <span
                  className={cn(
                    "size-9 flex items-center justify-center rounded-full text-body-lg font-bold relative z-10 text-white",
                    {
                      "bg-primary": step === index,
                      "bg-dark-grey": step !== index && step > index,
                      "bg-mid-grey": step !== index && step < index,
                    }
                  )}>
                  {index}
                </span>
                {step > index && (
                  <CheckCircleFillIcon className="size-[13px] absolute -top-0.5 -right-1 z-10 fill-charcoal-grey stroke-background" />
                )}
                {index !== steps.length - 1 && (
                  <span
                    className={cn(
                      "absolute left-full top-1/2 -translate-1/2 text-body-xs font-bold h-0.5 w-28 ",
                      step > index ? "bg-primary" : "bg-mid-grey"
                    )}
                  />
                )}
              </div>

              <span
                className={cn(
                  " text-body-xs mt-2 font-semibold",
                  step === index
                    ? "text-primary font-bold"
                    : "text-charcoal-grey "
                )}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-6">
        {step === 0 && (
          <PersonalDetailsForm
            changeStep={setStep}
            formDetails={formDetails}
            setFormDetails={setFormDetails}
            cancelReservation={() => setShowCancelModal(true)}
          />
        )}

        {step === 1 && (
          <MakeReservationForm
            changeStep={setStep}
            formDetails={formDetails}
            setFormDetails={setFormDetails}
          />
        )}

        {step === 2 && (
          <ConfirmReservation changeStep={setStep} formDetails={formDetails} />
        )}
      </div>

      <CommonModal
        icon={
          <img
            src={DEFAULT_IMAGES.modal_cancel_icon}
            className="size-[114px] mx-auto mt-2"
            alt="cancel"
          />
        }
        isOpen={showCancelModal}
        setIsOpen={setShowCancelModal}
        title="Cancel Reservation"
        subHeader="Cancel Reservation"
        description={`Are you sure you want to cancel the reservation for the entire apartment in Gwarimpa Abuja?`}
        confirmBtnText="Yes, Cancel"
        cancelBtnText="No, Don't Cancel"
        confirmAction={() => {
          router.push(`/${shortLet.id}`);
          setShowCancelModal(false);
        }}
      />

      <ReservationSuccessModal
        isOpen={true}
        setIsOpen={() => {}}
        shortLetName={shortLet.name}
        state={shortLet.city.state.name}
        city={shortLet.city.name}
      />
    </Container>
  );
};

export default ReservationForm;
