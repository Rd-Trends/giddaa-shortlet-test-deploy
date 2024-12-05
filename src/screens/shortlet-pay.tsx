"use client";

import { ShortLet } from "@/types/short-let";
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Container from "@/components/layouts/Container";
import { useGetExchangeRates } from "@/apis/queries/exchange-rate";
import { formatCurrency } from "@/utils/format-currency";
import SkeletonLoader from "@/components/ui/Skeleton";
import pluralize from "pluralize";
import { Button } from "@/components/ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQueries";

const ShortLetPay = ({ shortLet }: { shortLet: ShortLet }) => {
  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const freeServices = shortLet.services
    .filter(
      (service) =>
        JSON.parse(service.extraProperties || "{}")?.payment !== "PAID"
    )
    .map((service) => service.name);

  const nights = 5;
  const bookingFee = shortLet.listingPrice * nights;
  const cautionFee = nights ? shortLet.cautionFee : 0;

  const grandTotal = bookingFee + cautionFee;

  return (
    <Container className=" bg-background min-h-screen pt-8">
      <div className=" max-w-[911px] mx-auto">
        <div className=" border-b border-mid-grey pb-3">
          <h1 className=" text-center text-heading-4 text-primary font-secondary">
            [Guest’s Name] Payment Link
          </h1>
          <p className=" text-body-sm font-normal text-center pt-1">
            Make your payment to confirm the reservation for your stay.
          </p>
        </div>

        <div className=" flex flex-col gap-4 md:flex-row xl:px-14 mt-6">
          <div className=" w-full md:w-[249px]">
            {shortLet.images.length === 1 && (
              <img
                src={shortLet.images[0].document}
                className=" rounded-2xl border border-mid-grey h-[233px] w-full object-cover "
                alt=""
              />
            )}
            {shortLet.images.length > 1 && (
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
              For [Guest Name] [Phone Number] [Email]
            </p>
            <p className=" text-body-sxs text-charcoal-grey">
              Booking for 5 nights (Jan 25 - Jan 29)
            </p>
            <p className=" text-body-md font-bold text-secondary">
              {formatCurrency(grandTotal)}
            </p>
            {exchangeRates && (
              <p className=" text-body-xs text-secondary !mt-0.5">
                {formatCurrency(grandTotal / exchangeRates?.dollar, {
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
                For {nights} {pluralize("Night", nights)} (Jan 24 - Jan 29)
              </p>
              <p className=" text-body-subtext">
                Includes {freeServices.join(", ")}
              </p>
            </div>
            <div>
              <p className=" text-body-md font-bold">
                {formatCurrency(bookingFee)}
              </p>
              {exchangeRates && (
                <p className=" text-body-xs">
                  {formatCurrency(bookingFee / exchangeRates?.dollar, {
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
                Caution Fee (Refundable If no damages were made after
                inspection)
              </h3>
              <p className=" text-body-subtext">
                {" "}
                For {nights} {pluralize("Night", nights)}
              </p>
            </div>
            <div>
              <p className=" text-body-md font-bold">
                {formatCurrency(cautionFee)}
              </p>
              {exchangeRates && (
                <p className=" text-body-xs">
                  {formatCurrency(cautionFee / exchangeRates?.dollar, {
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
                {formatCurrency(grandTotal)}
              </p>
              {exchangeRates && (
                <p className=" text-body-xs ">
                  {formatCurrency(grandTotal / exchangeRates?.dollar, {
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

        <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey mt-10">
          <Button
            size={isMobile ? "medium" : "large"}
            variant="filled"
            className=" font-bold px-10 md:px-14">
            Pay Now
          </Button>
          <Button
            size={isMobile ? "medium" : "large"}
            variant="outline-danger"
            // onClick={() => changeStep(0)}
            className=" font-bold px-10 md:px-14"
            type="button">
            Cancel
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ShortLetPay;
