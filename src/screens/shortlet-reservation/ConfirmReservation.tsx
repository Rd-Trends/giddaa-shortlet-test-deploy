"use client";
import { Button } from "@/components/ui/Button";
import { BiChevronLeft } from "react-icons/bi";
import { ReservationFormDetails } from ".";
import { BsArrowRight } from "react-icons/bs";
import { ShortLet } from "@/types/short-let";
import { differenceInDays, formatDate } from "date-fns";
import pluralize from "pluralize";
import { formatCurrency } from "@/utils/format-currency";
import { useGetExchangeRates } from "@/apis/queries/exchange-rate";
import SkeletonLoader from "@/components/ui/Skeleton";
import { ReservationSuccessModal } from "./ReservationSuccessModal";
import { useState } from "react";
import { useReserveShortLet } from "@/apis/mutations/short-let";
import { toast } from "@/lib/toast";

const ConfirmReservation = ({
  changeStep,
  formDetails,
  shortLet,
}: {
  changeStep: (step: number) => void;
  formDetails: ReservationFormDetails;
  shortLet: ShortLet;
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const reserveShortLet = useReserveShortLet(shortLet.id);

  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();

  const freeServices = shortLet.services
    .filter(
      (service) =>
        JSON.parse(service.extraProperties || "{}")?.payment !== "PAID"
    )
    .map((service) => service.name);

  const nights = differenceInDays(
    formDetails.checkOutDate,
    formDetails.checkInDate
  );

  const bookingFee = shortLet.listingPrice * nights;
  const cautionFee = nights ? shortLet.cautionFee : 0;

  const grandTotal = bookingFee + cautionFee;

  const handleConfirmReservation = () => {
    reserveShortLet.mutate(
      {
        guest: {
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
          phoneNumber: formDetails.phoneNumber,
        },
        checkInDate: formDetails.checkInDate,
        checkOutDate: formDetails.checkOutDate,
        numberOfGuests: formDetails.numberOfGuests,
        cautionFee,
        bookingFee,
        numberOfDays: nights,
        shortletId: shortLet.id,
        isPaid: false,
        contactMethod: "EMAIL",
        parentBookingId: "",
      },
      {
        onSuccess: () => {
          setShowSuccessModal(true);
        },
        onError: (error) => {
          toast.error({
            title: "Error",
            description: error.message ?? "Failed to reserve short let",
          });
        },
      }
    );
  };

  return (
    <div className="max-w-[826px] mx-auto -mt-4 ">
      <div className=" space-y-4">
        <h2 className="text-heading-4 font-secondary">Your Reservation</h2>
        <div className=" bg-white rounded-2xl divide-y divide-mid-grey border border-mid-grey">
          <div className=" p-4 flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left">
            <div>
              <p className=" text-body-subtext font-bold ">CHECK-IN</p>
              <p className=" text-body-subtext font-medium">
                {formatDate(formDetails.checkInDate, "do MMMM yyyy")}
              </p>
            </div>

            <div className="text-primary flex flex-col items-center">
              <BsArrowRight className=" rotate-90 md:rotate-0" />
              <span className="text-body-subtext text-charcoal-grey">
                Total of {nights} {pluralize("Night", nights)}
              </span>
            </div>

            <div>
              <p className=" text-body-subtext font-bold ">CHECK-OUT</p>
              <p className=" text-body-subtext font-medium">
                {formatDate(formDetails.checkOutDate, "do MMMM yyyy")}
              </p>
            </div>
          </div>
          <div className=" p-4 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-6">
            <div>
              <p className=" text-body-subtext font-bold ">GUESTS</p>
              <p className=" text-body-subtext font-medium">
                Total of {formDetails.numberOfGuests}{" "}
                {pluralize("Guest", formDetails.numberOfGuests)}
              </p>
            </div>

            <p className=" text-body-md font-bold ">
              {formDetails.numberOfGuests} Expected
            </p>
          </div>
        </div>
      </div>

      <div className=" space-y-4 my-6">
        <h2 className="text-heading-4 font-secondary">Fees</h2>
        <div className=" bg-white rounded-2xl divide-y divide-mid-grey border border-mid-grey">
          <div className="flex items-start justify-between p-4">
            <div>
              <h3 className=" text-body-sm font-bold">Booking Fee</h3>
              <p className=" text-body-sm font-medium text-dark-grey">
                For {nights} {pluralize("Night", nights)}
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

          <div className="flex items-start justify-between p-4">
            <div>
              <h3 className=" text-body-sm font-bold">
                Caution Fee (Refundable If no damages were made after
                inspection)
              </h3>
              <p className=" text-body-subtext">
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

          <div className="flex items-start justify-between p-4 bg-primary text-white rounded-b-2xl">
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
      </div>

      <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey">
        <Button
          variant="outline"
          onClick={() => changeStep(1)}
          className=" font-bold"
          type="button">
          <BiChevronLeft className=" size-5" /> Booking Details
        </Button>
        <Button
          isLoading={reserveShortLet.isPending}
          onClick={handleConfirmReservation}
          variant="filled"
          className=" font-bold">
          {reserveShortLet.isPending ? "Reserving..." : "Confirm Reservation"}
          {/* Confirm Reservation */}
        </Button>
      </div>

      <ReservationSuccessModal
        isOpen={showSuccessModal}
        setIsOpen={setShowSuccessModal}
        shortLetName={shortLet.name}
        state={shortLet.city.state.name}
        city={shortLet.city.name}
      />
    </div>
  );
};

export default ConfirmReservation;
