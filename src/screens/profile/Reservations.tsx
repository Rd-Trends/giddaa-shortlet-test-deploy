"use client";

import Container from "@/components/layouts/Container";
import ProfilePagesHeader from "./Header";
// import ShortLetCard, {
//   ShortLetCardLoader,
// } from "@/components/shared/Cards/ShortLetCard";
import { useGetCustomerBookings } from "@/apis/queries/customer";

const Reservations = () => {
  const {} = useGetCustomerBookings(
    {
      pageNumber: 1,
      pageSize: 10,
    },
    { enabled: true }
  );
  return (
    <Container className=" bg-background py-10 space-y-10  ">
      <ProfilePagesHeader title="Reservations" />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 ">
        {!isLoading &&
          !!favoriteShortLets.length &&
          favoriteShortLets.map((shortLet) => {
            return <ShortLetCard key={shortLet.id} shortLet={shortLet} />;
          })}

        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <ShortLetCardLoader key={index} />
          ))}
      </div> */}
    </Container>
  );
};

export default Reservations;
