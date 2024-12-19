import { ShortLetBooking } from "@/types/short-let";
import React from "react";
import SkeletonLoader from "../ui/Skeleton";
import { useGetExchangeRates } from "@/apis/queries/exchange-rate";
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";
import { formatCurrency } from "@/utils/format-currency";
import pluralize from "pluralize";
import { formatDate } from "date-fns";

const PaymentDetails = ({ booking }: { booking: ShortLetBooking }) => {
  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();

  const shortLet = booking.shortlet;
  const freeServices = shortLet.services
    .filter(
      (service) =>
        JSON.parse(service.extraProperties || "{}")?.payment !== "PAID"
    )
    .map((service) => service.name);

  const nights = booking.numberOfDays;

  return (
    <div>
      <div className=" flex flex-col gap-4 md:flex-row xl:px-14 mt-6">
        <div className=" w-full md:w-[249px]">
          {shortLet?.images?.length === 1 && (
            <img
              src={shortLet.images[0].document}
              className=" rounded-2xl border border-mid-grey h-[233px] w-full object-cover "
              alt=""
            />
          )}
          {shortLet?.images?.length > 1 && (
            <Carousel opts={{ loop: true }} className="w-full group ">
              <CarouselContent className=" -ml-1">
                {shortLet.images.map((image, index) => (
                  <CarouselItem key={index} className=" pl-1  basis-[100%]">
                    <img
                      src={image.document}
                      className=" rounded-2xl border border-mid-grey h-[233px] w-full object-cover "
                      alt=""
                    />
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
        </div>

        <div className=" space-y-1">
          <h2 className=" text-body-sm font-bold">{shortLet.name}</h2>
          <p className=" text-body-sm  font-medium text-black">
            For{" "}
            <b>
              {getName(booking.guest.firstName, booking.guest.lastName)}{" "}
              {booking.guest?.phoneNumber ?? ""} {booking.guest?.email ?? ""}
            </b>
          </p>
          <p className=" text-body-xs text-charcoal-grey">
            Booking for {nights} {pluralize("Night", nights)} (
            {formatDate(booking.checkOutDate, "MMM dd")} -{" "}
            {formatDate(booking.checkInDate, "MMM dd")})
          </p>
          <p className=" text-body-md font-bold text-secondary">
            {formatCurrency(booking.totalFee)}
          </p>
          {exchangeRates && (
            <p className=" text-body-xs text-secondary !mt-0.5">
              {formatCurrency(booking.totalFee / exchangeRates?.dollar, {
                currency: "USD",
              })}
            </p>
          )}
          {isLoadingExchangeRates && (
            <SkeletonLoader className=" h-4 w-8 rounded-md" />
          )}
        </div>
      </div>

      <div className=" xl:px-14">
        <div className=" border-t border-mid-grey flex items-start justify-between pt-4 mt-6">
          <div>
            <h3 className=" text-body-sm font-bold">Booking Fee</h3>
            <p className=" text-body-subtext font-medium text-black">
              For {nights} {pluralize("Night", nights)} (
              {formatDate(booking.checkOutDate, "MMM dd")} -{" "}
              {formatDate(booking.checkInDate, "MMM dd")})
            </p>
            <p className=" text-body-subtext">
              Includes {freeServices.join(", ")}
            </p>
          </div>
          <div>
            <p className=" text-body-md font-bold">
              {formatCurrency(booking.bookingFee)}
            </p>
            {exchangeRates && (
              <p className=" text-body-xs">
                {formatCurrency(booking.bookingFee / exchangeRates?.dollar, {
                  currency: "USD",
                })}
              </p>
            )}
            {isLoadingExchangeRates && (
              <SkeletonLoader className=" h-4 w-8 rounded-md" />
            )}
          </div>
        </div>

        <div className=" border-t border-mid-grey flex items-start justify-between pt-4 mt-6">
          <div>
            <h3 className=" text-body-sm font-bold">
              Caution Fee (Refundable If no damages were made after inspection)
            </h3>
            <p className=" text-body-subtext">
              For {nights} {pluralize("Night", nights)}
            </p>
          </div>
          <div>
            <p className=" text-body-md font-bold">
              {formatCurrency(booking.cautionFee)}
            </p>
            {exchangeRates && (
              <p className=" text-body-xs">
                {formatCurrency(booking.cautionFee / exchangeRates?.dollar, {
                  currency: "USD",
                })}
              </p>
            )}
            {isLoadingExchangeRates && (
              <SkeletonLoader className=" h-4 w-8 rounded-md" />
            )}
          </div>
        </div>

        <div className=" border-t border-mid-grey flex items-start justify-between pt-4 mt-6 text-secondary">
          <div>
            <h3 className=" text-body-sm font-bold ">Grand Total</h3>
            <p className=" text-body-sm font-medium ">
              For {nights} {pluralize("Night", nights)}
            </p>
          </div>
          <div>
            <p className=" text-body-md font-bold">
              {formatCurrency(booking.totalFee)}
            </p>
            {exchangeRates && (
              <p className=" text-body-xs ">
                {formatCurrency(booking.totalFee / exchangeRates?.dollar, {
                  currency: "USD",
                })}
              </p>
            )}
            {isLoadingExchangeRates && (
              <SkeletonLoader className=" h-4 w-8 rounded-md" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;

const getName = (firstName?: string, lastName?: string) => {
  return `${firstName ?? ""} ${lastName ?? ""}`.trim();
};
