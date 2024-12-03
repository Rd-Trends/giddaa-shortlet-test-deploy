"use client";

import { useRegisterUser } from "@/apis/mutations/accout";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldErrorText } from "@/components/ui/FormHelpers";
import Input from "@/components/ui/Input";
import { AppRoutes } from "@/constants/routes";
import useAuth from "@/hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";

const SignUpForm = () => {
  const { setAuth } = useAuth();
  const router = useRouter();
  const registerUser = useRegisterUser();
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const isLoading = registerUser.isPending;
  const handleSubmit = form.handleSubmit((data) => {
    delete data.confirmPassword;
    delete data.terms;

    registerUser.mutate(
      {
        ...data,
        roleId: "CUSTOMER_ROLE",
        organizationId: "giddaa_organization",
      },
      {
        onSuccess: (data) => {
          setAuth(data);
          router.replace(AppRoutes.Home);
        },
      }
    );
  });

  return (
    <div className="min-h-screen w-full flex flex-row bg-background container mx-auto overflow-y-auto">
      <div className="w-full flex-col py-6  relative hidden lg:flex space-y-8 xl:w-2/5 xl:pl-[60px]">
        <Link href="/" className="">
          <img
            src="//s3.amazonaws.com/appforest_uf/f1675031132769x885606220423525500/GiddaaLogoGreen.svg"
            alt=""
            className=" w-[48px] h-auto object-cover"
          />
        </Link>
        <img
          src={"/bg-image/auth-bg.svg"}
          alt=""
          className="rounded-[16px] w-[520px] h-auto"
        />
      </div>

      <div className="flex flex-col h-screen flex-1 overflow-y-auto py-14 px-6 lg:px-[60px]">
        <Link href="/" className="lg:hidden pb-8">
          <img
            src="//s3.amazonaws.com/appforest_uf/f1675031132769x885606220423525500/GiddaaLogoGreen.svg"
            alt=""
            className=" w-[48px] h-auto object-cover"
          />
        </Link>
        <div className="mb-5">
          <h1 className="font-secondary text-heading-1">
            <span className=" text-secondary">Welcome to Shortlets</span> by
            Giddaa!
          </h1>
          <p className="text-base pt-[12px]">
            <b>Sign up.</b> Book unique, low-key, and verified short lets and
            stays.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6">
            <Input
              label="First Name"
              required
              className="w-full"
              placeholder="e.g John"
              {...form.register("firstName")}
              error={form.formState.errors.firstName?.message}
            />

            <Input
              label="Last Name"
              required
              className="w-full"
              placeholder="e.g Doe"
              {...form.register("lastName")}
              error={form.formState.errors.lastName?.message}
            />

            <Input
              label="Email"
              required
              type="email"
              className="w-full"
              placeholder="e.g john@mail.com"
              {...form.register("email")}
              error={form.formState.errors.email?.message}
            />

            <Input
              label="Phone Number"
              required
              type="tel"
              className="w-full"
              placeholder="e.g +234812345678"
              {...form.register("phoneNumber")}
              error={form.formState.errors.phoneNumber?.message}
            />

            <Input
              label="Password"
              required
              type="password"
              className="w-full"
              placeholder="*******"
              {...form.register("password")}
              error={form.formState.errors.password?.message}
            />
            <Input
              label="Confirm Your Password"
              required
              type="password"
              className="w-full"
              placeholder="*******"
              {...form.register("confirmPassword")}
              error={form.formState.errors.confirmPassword?.message}
            />
          </div>

          <Controller
            control={form.control}
            name="terms"
            render={({ field }) => (
              <div className=" space-y-1">
                <div className=" flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="terms"
                    onCheckedChange={field.onChange}
                    checked={field.value}
                    ref={field.ref}
                  />
                  <label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary font-bold">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary font-bold">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {form.formState.errors.terms?.message && (
                  <FieldErrorText error={form.formState.errors.terms.message} />
                )}
              </div>
            )}
          />

          <div className="mt-7 space-y-4">
            <Button
              type="submit"
              size={"large"}
              isLoading={isLoading}
              className="text-[13px] font-bold py-2 px-4 w-full "
              onClick={() => console.log(form.formState.errors)}>
              {isLoading ? "Processing..." : "Sign Up"}
            </Button>
            <p className=" text-center font-normal text-[13px]">
              {`Already have an account?`}{" "}
              <Link
                href={AppRoutes.LOGIN}
                className="text-primary font-bold hover:text-[#335f32]">
                Log in here
              </Link>
            </p>
          </div>
        </form>

        <div className=" mt-4 space-y-4">
          <div className="flex items-center justify-center">
            <hr className="w-full border-[#666666]/25" />
            <p className="mx-4 text-[#666666] text-base">OR</p>
            <hr className="w-full border-[#666666]/25" />
          </div>

          <Button
            type="button"
            variant={"outline"}
            size={"large"}
            className="text-[13px] font-bold py-2 px-4 w-full gap-0 ">
            <FcGoogle className="size-6 mr-2" />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
