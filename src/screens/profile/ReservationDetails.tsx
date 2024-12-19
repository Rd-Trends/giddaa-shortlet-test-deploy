import Container from "@/components/layouts/Container";
import { ShortLetBooking } from "@/types/short-let";
import ProfilePagesHeader from "./Header";

const ReservationDetails = ({ booking }: { booking: ShortLetBooking }) => {
  console.log(booking);
  return (
    <Container className=" bg-background py-10 space-y-6  ">
      <ProfilePagesHeader title="Reservations" />
    </Container>
  );
};

export default ReservationDetails;
