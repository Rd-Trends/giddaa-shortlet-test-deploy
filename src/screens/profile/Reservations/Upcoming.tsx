import { useGetcustomerBookingsInfinite } from "@/apis/queries/customer";
import ShortLetCard, {
  ShortLetCardLoader,
} from "@/components/shared/Cards/ShortLetCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React, { useEffect, useMemo } from "react";

const Upcoming = () => {
  const { isIntersecting, ref } = useIntersectionObserver();
  //   const [search] = useState("");

  const {
    data,
    isFetchingNextPage,
    isFetching,
    hasNextPage,
    fetchNextPage,
    // isFetched,
    // error,
  } = useGetcustomerBookingsInfinite({
    pageNumber: 1,
    pageSize: 8,
    isPast: false,
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    isFetchingNextPage,
    isFetching,
    hasNextPage,
    fetchNextPage,
  ]);

  const bookings = useMemo(() => {
    return data?.pages.map((page) => page.value).flat() || [];
  }, [data?.pages]);

  const isFetchingForFirstTime = isFetching && !isFetchingNextPage;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 ">
        {!isFetchingForFirstTime &&
          !!bookings.length &&
          bookings.map((booking) => {
            return (
              <div key={booking.id}>
                <ShortLetCard shortLet={booking.shortlet} />
              </div>
            );
          })}

        {(isFetching || isFetchingNextPage) &&
          Array.from({ length: 4 }).map((_, index) => (
            <ShortLetCardLoader key={index} />
          ))}
      </div>
      <div ref={ref} className="py-4 h-8 bg-transparent w-full" />
    </div>
  );
};

export default Upcoming;
