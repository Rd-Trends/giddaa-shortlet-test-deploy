"use client";
import { Button } from "@/components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import * as yup from "yup";
import { ReservationFormDetails } from "./RenderReservation";
import { DatePicker } from "@/components/ui/DatePicker";

const MakeReservationForm = ({
  changeStep,
  formDetails,
  setFormDetails,
}: {
  changeStep: (step: number) => void;
  formDetails: ReservationFormDetails;
  setFormDetails: React.Dispatch<React.SetStateAction<ReservationFormDetails>>;
}) => {
  const form = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      checkInDate: formDetails.checkInDate,
      checkOutDate: formDetails.checkOutDate,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    setFormDetails((prev) => ({ ...prev, ...data }));
    changeStep(2);
  });

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
                defaultValue={field.value}
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
        </div>

        <div className=" border-t border-mid-grey flex items-start justify-between pt-4 mt-6">
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

        <div className=" border-t border-mid-grey flex items-start justify-between pt-4 mt-6">
          <div>
            <h3 className=" text-body-sm font-bold">
              Caution Fee (Refundable If no damages were made after inspection)
            </h3>
            <p className=" text-body-subtext">For 5 Nights</p>
          </div>
          <div>
            <p className=" text-body-md font-bold">#16,000</p>
            <p className=" text-body-xs">$200</p>
          </div>
        </div>

        <div className=" border-t border-mid-grey flex items-start justify-between pt-4 mt-6">
          <div>
            <h3 className=" text-body-sm font-bold text-primary">
              Grand Total
            </h3>
            <p className=" text-body-sm font-medium text-primary">
              For 5 Nights
            </p>
          </div>
          <div>
            <p className=" text-body-md font-bold text-primary">#16,000</p>
            <p className=" text-body-xs text-primary">$200</p>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey">
        <Button
          variant="outline-danger"
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

export default MakeReservationForm;

const schema = yup.object({
  checkInDate: yup.string().required("Check-in date is required"),
  checkOutDate: yup.string().required("Check-out date is required"),
});
