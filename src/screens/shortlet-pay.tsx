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

const ShortLetPay = ({ booking }: { booking: ShortLetBooking }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [showSelectPaymentMethodModal, setShowSelectPaymentMethodModal] =
    useState(false);

  return (
    <Container className=" bg-background min-h-screen py-10">
      <Link href="/">
        <Logo />
      </Link>
      <div className=" max-w-[911px] mx-auto py-10">
        <div className=" border-b border-mid-grey pb-3">
          <h1 className=" text-center text-heading-4 text-primary font-secondary">
            {booking.guest.firstName ?? ""} {booking.guest.lastName ?? ""}{" "}
            Payment Link
          </h1>
          <p className=" text-body-sm font-normal text-center pt-1">
            Make your payment to confirm the reservation for your stay.
          </p>
        </div>

        <PaymentDetails booking={booking} />

        <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey mt-10">
          <Button
            size={isMobile ? "medium" : "large"}
            variant="outline-danger"
            // onClick={() => changeStep(0)}
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
    </Container>
  );
};

export default ShortLetPay;
