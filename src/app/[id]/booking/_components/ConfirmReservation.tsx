"use client";
import { Button } from "@/components/ui/Button";
import { BiChevronLeft } from "react-icons/bi";
import { ReservationFormDetails } from "./RenderReservation";
import { BsArrowRight } from "react-icons/bs";

const ConfirmReservation = ({
  changeStep,
}: {
  changeStep: (step: number) => void;
  formDetails: ReservationFormDetails;
}) => {
  return (
    <div className="max-w-[826px] mx-auto -mt-4 ">
      <div className=" space-y-4">
        <h2 className="text-heading-4 font-secondary">Your Reservation</h2>
        <div className=" bg-white rounded-2xl divide-y divide-mid-grey border border-mid-grey">
          <div className=" p-4 flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left">
            <div>
              <p className=" text-body-subtext font-bold ">CHECK-IN</p>
              <p className=" text-body-subtext font-medium">
                23rd October 2024
              </p>
            </div>

            <div className="text-primary flex flex-col items-center">
              <BsArrowRight className=" rotate-90 md:rotate-0" />
              <span className="text-body-subtext text-charcoal-grey">
                Total of 5 Nights
              </span>
            </div>

            <div>
              <p className=" text-body-subtext font-bold ">CHECK-OUT</p>
              <p className=" text-body-subtext font-medium">
                23rd October 2024
              </p>
            </div>
          </div>
          <div className=" p-4 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-6">
            <div>
              <p className=" text-body-subtext font-bold ">GUESTS</p>
              <p className=" text-body-subtext font-medium">
                Total of 5 Guests
              </p>
            </div>

            <p className=" text-body-md font-bold ">5 Expected</p>
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
                A booking fee of 10% will be charged to your card
              </p>
              <p className=" text-body-subtext">
                Includes [list all free services] E.g Housekeeping, Grocery
                delivery
              </p>
            </div>
            <div>
              <p className=" text-body-md font-bold">#16,000</p>
              <p className=" text-body-xs">$200</p>
            </div>
          </div>

          <div className="flex items-start justify-between p-4">
            <div>
              <h3 className=" text-body-sm font-bold">
                Caution Fee (Refundable If no damages were made after
                inspection)
              </h3>
              <p className=" text-body-subtext">For 5 Nights</p>
            </div>
            <div>
              <p className=" text-body-md font-bold">#16,000</p>
              <p className=" text-body-xs">$200</p>
            </div>
          </div>

          <div className="flex items-start justify-between p-4 bg-primary text-white rounded-b-2xl">
            <div>
              <h3 className=" text-body-sm font-bold ">Grand Total</h3>
              <p className=" text-body-sm font-medium ">For 5 Nights</p>
            </div>
            <div>
              <p className=" text-body-md font-bold">#16,000</p>
              <p className=" text-body-xs ">$200</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey">
        <Button
          variant="outline-danger"
          onClick={() => changeStep(1)}
          className=" font-bold"
          type="button">
          <BiChevronLeft className=" size-5" /> Booking Details
        </Button>
        <Button variant="filled" type="submit" className=" font-bold">
          Confirm Reservation
        </Button>
      </div>
    </div>
  );
};

export default ConfirmReservation;
