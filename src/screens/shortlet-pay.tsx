"use client";

import { ShortLetBooking } from "@/types/short-let";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQueries";
import { useState } from "react";
import HandlePaymentModal from "@/components/shared/modals/HandlePaymentModal";
import Logo from "@/svgs/Logo";
import Link from "next/link";
import PaymentDetails from "@/components/shared/PaymentDetails";
import { CommonModal } from "@/components/shared/modals/CommonModal";
import { DEFAULT_IMAGES } from "@/constants/images";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/constants/routes";

const ShortLetPay = ({ booking }: { booking: ShortLetBooking }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSelectPaymentMethodModal, setShowSelectPaymentMethodModal] =
    useState(false);

  console.log("booking", booking);
  return (
    <Container className=" bg-background py-10 min-h-screen">
      <div className=" relative ">
        <Link href="/" className="block md:absolute left-0 top-0 mb-6 md:mb-0">
          <Logo />
        </Link>
        <h1 className=" text-heading-4 md:text-heading-2 font-secondary text-primary text-center">
          {booking.guest.firstName ?? ""} {booking.guest.lastName ?? ""} Payment
          Link
        </h1>
        <p className=" text-body-sm mt-1 text-center">
          Make your payment to confirm the reservation for your stay.
        </p>
      </div>

      <hr className=" max-w-[911px] mx-auto border-mid-grey mt-4" />

      <div className=" max-w-[911px] mx-auto">
        <PaymentDetails booking={booking} />
        <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey mt-10">
          <Button
            size={isMobile ? "medium" : "large"}
            variant="outline-danger"
            onClick={() => setShowCancelModal(true)}
            className=" font-bold px-10 md:px-14"
            type="button">
            Cancel
          </Button>
          <Button
            size={isMobile ? "medium" : "large"}
            variant="filled"
            className=" font-bold px-10 md:px-14"
            onClick={() => setShowSelectPaymentMethodModal(true)}>
            Pay Now
          </Button>
        </div>
      </div>

      <HandlePaymentModal
        isOpen={showSelectPaymentMethodModal}
        setIsOpen={setShowSelectPaymentMethodModal}
        booking={booking}
      />

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
        title="Cancel Payment"
        subHeader="Cancel Payment for Reservation"
        description="Are you sure you want to cancel this payment? You can always come back to make the payment later. Remember, the reservation is not confirmed until payment is made."
        confirmBtnText="Yes, Cancel"
        cancelBtnText="No, Don't Cancel"
        confirmAction={() => {
          router.push(AppRoutes.HOME);
          setShowCancelModal(false);
        }}
      />
    </Container>
  );
};

export default ShortLetPay;
