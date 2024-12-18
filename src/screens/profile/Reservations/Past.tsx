import { useGetcustomerBookingsInfinite } from "@/apis/queries/customer";
import ShortLetCard, {
  ShortLetCardLoader,
} from "@/components/shared/Cards/ShortLetCard";
import { Button } from "@/components/ui/Button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ShortLetBooking } from "@/types/short-let";
import { useEffect, useMemo, useState } from "react";
import PaymentDetailsModal from "./PaymentDetailsModal";
import HandlePaymentModal from "@/components/shared/modals/HandlePaymentModal";

const Past = () => {
  const { isIntersecting, ref } = useIntersectionObserver();
  //   const [search] = useState("");
  const [selectedBooking, setSelectedBooking] =
    useState<ShortLetBooking | null>(null);
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] = useState(false);
  const [showSelectPaymentMethodModal, setShowSelectPaymentMethodModal] =
    useState(false);

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
    isPast: true,
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
              <div key={booking.id} className="space-y-4">
                <ShortLetCard shortLet={booking.shortlet} />
                <Button
                  variant={"outline"}
                  className="w-full"
                  onClick={() => {
                    setSelectedBooking(booking);
                    setShowPaymentDetailsModal(true);
                  }}>
                  Pay Now
                </Button>
              </div>
            );
          })}

        {(isFetching || isFetchingNextPage) &&
          Array.from({ length: 4 }).map((_, index) => (
            <ShortLetCardLoader key={index} />
          ))}
      </div>
      <div ref={ref} className="py-4 h-8 bg-transparent w-full" />

      {selectedBooking && (
        <>
          <PaymentDetailsModal
            booking={selectedBooking}
            isOpen={showPaymentDetailsModal}
            setIsOpen={setShowPaymentDetailsModal}
            showSelectPaymentMethodModal={setShowSelectPaymentMethodModal}
          />
          <HandlePaymentModal
            isOpen={showSelectPaymentMethodModal}
            setIsOpen={setShowSelectPaymentMethodModal}
            booking={selectedBooking}
            key={selectedBooking.id}
          />
        </>
      )}
    </div>
  );
};

export default Past;
