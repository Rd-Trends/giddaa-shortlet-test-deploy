import { getBookingById } from "@/apis/services/booking";
import ReservationDetails from "@/screens/profile/ReservationDetails";
import { notFound } from "next/navigation";
import React from "react";

const ReservationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const booking = await getBookingById(id);

  // If the booking is not found or the transaction is not paid, return a 404 page
  if (!booking || !booking.transaction?.isPaid) {
    notFound();
  }

  return <ReservationDetails booking={booking} />;
};

export default ReservationDetailsPage;
