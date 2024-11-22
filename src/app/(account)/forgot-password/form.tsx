"use client";

import { useGenerateResetPasswordLink } from "@/apis/mutations/accout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { AppRoutes } from "@/constants/routes";
import { isProduction } from "@/utils/is-production";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const ForgotPasswordForm = () => {
  const generateResetPasswordLink = useGenerateResetPasswordLink();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const isLoading = generateResetPasswordLink.isPending;
  const handleSubmit = form.handleSubmit((data) => {
    generateResetPasswordLink.mutate(
      {
        ...data,
        type: "CUSTOMER",
      },
      {
        onSuccess: (data) => {
          if (!isProduction()) {
            // get key and code (query params) from data(url)
            const url = new URL(data.value);
            const key = url.searchParams.get("key");
            const code = url.searchParams.get("code");

            // redirect to reset password page
            router.push(AppRoutes.RESET_PASSWORD + `?key=${key}&code=${code}`);
          }
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  });

  return (
    <div className="min-h-screen w-full flex flex-row bg-background">
      <div className="w-full  flex-col justify-center relative hidden lg:flex space-y-8 xl:w-2/5 xl:pl-[60px]">
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

      <div className="flex flex-col xl:justify-center flex-1 overflow-y-auto py-10 px-6 lg:px-[60px]">
        <Link href="/" className="lg:hidden pb-8">
          <img
            src="//s3.amazonaws.com/appforest_uf/f1675031132769x885606220423525500/GiddaaLogoGreen.svg"
            alt=""
            className=" w-[48px] h-auto object-cover"
          />
        </Link>
        <div className="mb-[24px]">
          <h1 className="font-secondary text-heading-1 text-secondary">
            Forgot Your Password?
          </h1>
          <p className="giddaa-heading-five pt-[12px]">
            Enter your email beiow. A link will be sent to the email you enter
            to create a new password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className=" space-y-10">
          <Input
            label="Email"
            required
            type="email"
            className="w-full"
            placeholder="Enter Email Address"
            {...form.register("email")}
            error={form.formState.errors.email?.message}
          />

          <Button
            type="submit"
            size={"large"}
            isLoading={isLoading}
            className="text-[13px] font-bold py-2 px-8 w-full ">
            {isLoading ? "Processing..." : "  Send Forgot Password Link"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

const schema = yup.object({
  email: yup.string().email().required(),
});
