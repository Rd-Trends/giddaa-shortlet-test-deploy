import { getBookingById } from "@/apis/services/booking";
import ShortLetPay from "@/screens/shortlet-pay";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const booking = await getBookingById(id);

  if (!booking) {
    return notFound();
  }
  return <ShortLetPay booking={booking} />;
}
