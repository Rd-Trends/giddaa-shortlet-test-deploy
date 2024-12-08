"use client";
import { Button } from "@/components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import * as yup from "yup";
import { ReservationFormDetails } from ".";
import { DatePicker } from "@/components/ui/DatePicker";
import { useGetExchangeRates } from "@/apis/queries/exchange-rate";
import { formatCurrency } from "@/utils/format-currency";
import { ShortLet } from "@/types/short-let";
import { differenceInDays, formatDate } from "date-fns";
import SkeletonLoader from "@/components/ui/Skeleton";
import Input from "@/components/ui/Input";
import pluralize from "pluralize";

const BookingDetails = ({
  changeStep,
  formDetails,
  setFormDetails,
  shortLet,
}: {
  changeStep: (step: number) => void;
  formDetails: ReservationFormDetails;
  setFormDetails: React.Dispatch<React.SetStateAction<ReservationFormDetails>>;
  shortLet: ShortLet;
}) => {
  const form = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      checkInDate: formDetails.checkInDate,
      checkOutDate: formDetails.checkOutDate,
      numberOfGuests: formDetails.numberOfGuests,
    },
  });

  const freeServices = shortLet.services
    .filter(
      (service) =>
        JSON.parse(service.extraProperties || "{}")?.payment !== "PAID"
    )
    .map((service) => service.name);

  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();

  const handleSubmit = form.handleSubmit((data) => {
    setFormDetails((prev) => ({ ...prev, ...data }));
    changeStep(2);
  });

  const checkInDate = form.watch("checkInDate") ?? "";
  const checkOutDate = form.watch("checkOutDate") ?? "";

  const nights =
    differenceInDays(checkOutDate, checkInDate) > 0
      ? differenceInDays(checkOutDate, checkInDate)
      : 0;
  const bookingFee = shortLet.listingPrice * nights;

  const cautionFee = nights ? shortLet.cautionFee : 0;

  const totalPrice = bookingFee + cautionFee;

  return (
    <form onSubmit={handleSubmit} className="max-w-[826px] mx-auto space-y-10 ">
      <div>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Controller
            control={form.control}
            name="checkInDate"
            render={({ field }) => (
              <DatePicker
                label="Check-In Date"
                required
                defaultValue={
                  field.value && formatDate(field.value, "yyyy-MM-dd")
                }
                onValueChange={(value) => field.onChange(value)}
                error={form.formState.errors.checkInDate?.message}
              />
            )}
          />
          <Controller
            control={form.control}
            name="checkOutDate"
            render={({ field }) => (
              <DatePicker
                label="CHeck-Out Date"
                required
                defaultValue={field.value}
                onValueChange={(value) => field.onChange(value)}
                error={form.formState.errors.checkOutDate?.message}
              />
            )}
          />

          <Input
            label="Number of Guests"
            type="number"
            required
            error={form.formState.errors.numberOfGuests?.message}
            wrapperClassName=" md:col-span-2"
            min={0}
            max={shortLet.maxGuestNumber}
            {...form.register("numberOfGuests")}
          />
        </div>

        <div className=" border-t border-mid-grey flex items-start justify-between pt-4 mt-6">
          <div>
            <h3 className=" text-body-sm font-bold">Booking Fee</h3>
            <p className=" text-body-subtext font-medium text-black">
              For {nights} {pluralize("Night", nights)}{" "}
              {checkInDate && checkOutDate
                ? `(${formatDate(checkOutDate, "MMM dd")} - ${formatDate(
                    checkInDate,
                    "MMM dd"
                  )})`
                : ""}
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
              Caution Fee (Refundable If no damages were made after inspection)
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
              {formatCurrency(totalPrice)}
            </p>
            {exchangeRates && (
              <p className=" text-body-xs ">
                {formatCurrency(totalPrice / exchangeRates?.dollar, {
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

      <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey">
        <Button
          variant="outline"
          onClick={() => changeStep(0)}
          className=" font-bold"
          type="button">
          <BiChevronLeft className=" size-5" /> Personal Details
        </Button>
        <Button variant="filled" type="submit" className=" font-bold">
          Confirm Reservation <BiChevronRight className=" size-5" />
        </Button>
      </div>
    </form>
  );
};

export default BookingDetails;

const schema = yup.object({
  checkInDate: yup
    .string()
    .required("Check-in date is required")
    .test({
      test: (checkInDate) => {
        if (!checkInDate) return false;

        return differenceInDays(new Date(checkInDate), new Date()) >= 0;
      },
      message: "Check-in date must be today or later",
    }),
  checkOutDate: yup
    .string()
    .required("Check-out date is required")
    .when("checkInDate", ([checkInDate], schema) => {
      if (!checkInDate) return schema;

      return schema.test({
        test: (checkOutDate) => {
          if (!checkOutDate) return false;

          return new Date(checkOutDate) > new Date(checkInDate);
        },
        message: "Check-out date must be greater than check-in date",
      });
    }),
  numberOfGuests: yup
    .number()
    .required("Number of guests is required")
    .default(0),
});
