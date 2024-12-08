"use client";

import Container from "@/components/layouts/Container";
import useAuth from "@/hooks/useAuth";
import CheckCircleFillIcon from "@/svgs/CheckCircleFillIcon";
import { ShortLet } from "@/types/short-let";
import { cn } from "@/utils/classname";
import { useState } from "react";
import { BiXCircle } from "react-icons/bi";
import PersonalDetailsForm from "./PersonalDetailsform";
import BookingDetails from "./BookingDetails";
import { Button } from "@/components/ui/Button";
import ConfirmReservation from "./ConfirmReservation";
import { CommonModal } from "@/components/shared/modals/CommonModal";
import { useRouter } from "next/navigation";
import { DEFAULT_IMAGES } from "@/constants/images";
// import { ReservationSuccessModal } from "./ReservationSuccessModal";
import { useMediaQuery } from "@/hooks/useMediaQueries";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/TopNav";

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

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Navbar />
      <Container className="pt-20 bg-background min-h-screen pb-8">
        <div className=" text-center py-6">
          <h1 className=" text-heading-2 font-secondary text-primary">
            Make a Reservation
          </h1>
          <p className=" text-body-sm mt-1">
            Reserve <b>{shortLet.name}</b> in{" "}
            <b>
              {shortLet.address}, {shortLet.city.name},{" "}
              {shortLet.city.state.name}
            </b>
            . Once we confirm availability and your booking, you then pay.
          </p>

          <div className="relative flex items-center justify-center gap-4 mt-6">
            {step > 0 && !isMobile && (
              <Button
                variant="outline-danger"
                className=" absolute left-0 top-0 font-bold px-2"
                onClick={() => setShowCancelModal(true)}>
                <BiXCircle className="size-5" />
                Cancel
              </Button>
            )}

            {step > 0 && isMobile && (
              <button
                className="inline-flex items-center font-bold px-2 py-1 rounded-full bg-transparent border-2 border-danger text-danger text-body-sm leading-none"
                onClick={() => setShowCancelModal(true)}>
                <BiXCircle className="size-5 mr-1" />
                Cancel Reservation
              </button>
            )}

            {!isAuthenticated && (
              <div className=" flex items-center w-fit py-1.5 px-3.5 bg-accent-green text-primary uppercase text-body-tiny font-bold border-2 border-primary rounded-full">
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
                    {index + 1}
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
            <BookingDetails
              changeStep={setStep}
              formDetails={formDetails}
              setFormDetails={setFormDetails}
              shortLet={shortLet}
            />
          )}

          {step === 2 && (
            <ConfirmReservation
              changeStep={setStep}
              formDetails={formDetails}
              shortLet={shortLet}
            />
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
      </Container>
      <Footer />
    </div>
  );
};

export default ReservationForm;
