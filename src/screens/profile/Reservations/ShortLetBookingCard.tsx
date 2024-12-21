import { ShortLetBooking } from "@/types/short-let";
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { cn } from "@/utils/classname";
import { Badge } from "@/components/ui/Badge";
import { getShortLetDescription } from "@/utils/short-let";
import { formatCurrency } from "@/utils/format-currency";
import { useGetExchangeRates } from "@/apis/queries/exchange-rate";
import SkeletonLoader from "@/components/ui/Skeleton";
import pluralize from "pluralize";
import { formatDate } from "date-fns";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/Button";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ShortletBookingCard = ({
  booking,
  isPast,
  handlePayBtnClick,
}: {
  booking: ShortLetBooking;
  isPast?: boolean;
  handlePayBtnClick?: () => void;
}) => {
  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();

  const shortlet = booking.shortlet;

  return (
    <div
      className={
        " p-3 rounded-3xl border border-mid-grey " +
        " hover:ring-1 hover:border-primary ring-primary relative hover:shadow-[0px_4px_4px_0px_#00000040] "
      }>
      {shortlet.images.length === 1 && (
        // <Link href={`/${shortlet.id}`}>
        <img
          src={shortlet.images[0].document}
          className={cn(
            " rounded-2xl border border-mid-grey h-[273px] w-full object-cover "
          )}
          alt={shortlet.name}
        />
      )}
      {shortlet.images.length > 1 && (
        <Carousel opts={{ loop: true }} className="w-full group ">
          <CarouselContent className=" -ml-1">
            {shortlet.images.map((image, index) => (
              <CarouselItem key={index} className=" pl-1  basis-[100%]">
                {/* <Link href={`/${shortlet.id}`}> */}
                <img
                  src={image.document}
                  className={cn(
                    " rounded-2xl border border-mid-grey h-[273px] w-full object-cover "
                  )}
                  alt={shortlet.name}
                />
                {/* </Link> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDotButtons
            wrapperClassName=" w-fit bottom-2 items-center justify-center gap-1.5 bg-black/50 px-4 py-1.5 rounded-full absolute left-1/2 -translate-x-1/2  space-x-0"
            dotClassName="size-1.5 bg-white/50 border-none hover:!bg-white"
            dotActiveClassName="bg-white border-none"
          />

          <CarouselNext className=" hidden group-hover:flex absolute right-4 top-1/2 -translate-y-1/2 size-5 md:size-5 " />
          <CarouselPrevious className=" hidden group-hover:flex absolute left-4 top-1/2 -translate-y-1/2 size-5 md:size-5 " />
        </Carousel>
      )}

      <Badge
        variant={booking.isPaid ? "success" : "warning"}
        className="absolute top-6 left-6 font-black uppercase">
        {booking.isPaid ? "Paid" : "Pending Payment"}
      </Badge>

      <div className=" pt-[22px]">
        <h3 className=" text-body-sm font-bold">{shortlet.name}</h3>
        <p className=" text-body-sm font-medium">
          {getShortLetDescription(shortlet)}
        </p>
        <p className=" text-body-xs text-charcoal-grey">
          Booking for {booking.numberOfDays}{" "}
          {pluralize("Night", booking.numberOfDays)} (
          {formatDate(booking.checkOutDate, "MMM dd")} -{" "}
          {formatDate(booking.checkInDate, "MMM dd")})
        </p>
        <div className="flex items-center ">
          <b className=" text-body-md font-bold text-primary">
            {formatCurrency(shortlet.listingPrice)}
          </b>
          {exchangeRates && (
            <span className="text-body-sm font-semibold ">
              /
              {formatCurrency(shortlet.listingPrice / exchangeRates?.dollar, {
                currency: "USD",
              })}
            </span>
          )}
          {isLoadingExchangeRates && (
            <SkeletonLoader className=" ml-1 h-5 w-8 rounded-xl" />
          )}
          <span className="ml-1 text-body-xs">Per Night</span>
        </div>

        {booking.isPaid && (
          <Link
            className={cn(buttonVariants(), "font-bold w-full mt-4")}
            href={`/${shortlet.id}`}>
            View Details & Directions
            <BsArrowUpRightCircleFill className=" size-5 fill-white" />
          </Link>
        )}

        {!booking.isPaid && !isPast && (
          <Button onClick={handlePayBtnClick} className=" mt-4 w-full">
            Make Payment
            <BsArrowUpRightCircleFill className=" size-5 fill-white" />
          </Button>
        )}

        {!booking.isPaid && isPast && (
          <Button disabled className=" mt-4 w-full">
            Payment Unavailable
          </Button>
        )}

        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "font-bold w-full mt-4"
          )}
          href={`/${shortlet.id}`}>
          View Shortlet
          <BsArrowUpRightCircleFill className=" size-5 fill-primary" />
        </Link>
      </div>
    </div>
  );
};

export default ShortletBookingCard;
