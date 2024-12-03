"use client";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BiChevronRight } from "react-icons/bi";
import * as yup from "yup";
import { ReservationFormDetails } from "./RenderReservation";

const PersonalDetailsForm = ({
  changeStep,
  formDetails,
  setFormDetails,
  cancelReservation,
}: {
  changeStep: (step: number) => void;
  formDetails: ReservationFormDetails;
  setFormDetails: React.Dispatch<React.SetStateAction<ReservationFormDetails>>;
  cancelReservation: () => void;
}) => {
  const form = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phoneNumber: formDetails.phoneNumber,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    setFormDetails((prev) => ({ ...prev, ...data }));
    changeStep(1);
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[826px] mx-auto space-y-20 md:space-y-40 ">
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-6">
        <Input
          label="First Name"
          required
          {...form.register("firstName")}
          error={form.formState.errors.firstName?.message}
        />
        <Input
          label="Last Name"
          required
          {...form.register("lastName")}
          error={form.formState.errors.lastName?.message}
        />
        <Input
          label="Phone Number"
          required
          {...form.register("phoneNumber")}
          error={form.formState.errors.phoneNumber?.message}
        />
        <Input
          label="First Name"
          {...form.register("email")}
          error={form.formState.errors.email?.message}
        />
      </div>

      <div className=" flex items-center justify-center p-4 space-x-4 border-t border-mid-grey">
        <Button
          variant="outline-danger"
          onClick={cancelReservation}
          className=" font-bold"
          type="button">
          Cancel Reservation
        </Button>
        <Button variant="filled" type="submit" className=" font-bold">
          Booking Details <BiChevronRight className=" size-5" />
        </Button>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email(),
  phoneNumber: yup.string().required("Phone number is required"),
});
