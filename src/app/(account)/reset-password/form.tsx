"use client";

import { useResetPassword } from "@/apis/mutations/accout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { AppRoutes } from "@/constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const code = searchParams.get("code");
  const resetPassword = useResetPassword();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const isLoading = resetPassword.isPending;
  const handleSubmit = form.handleSubmit((data) => {
    if (!key || !code) {
      return;
    }

    resetPassword.mutate(
      {
        key,
        code,
        newPassword: data.password,
      },
      {
        onSuccess: () => {
          router.push(AppRoutes.LOGIN);
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
            Reset Password
          </h1>
          <p className="giddaa-heading-five pt-[12px]">
            Create a new password for the account associated with the email
            address below.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-[24px]">
            <Input
              label="Email"
              required
              type="email"
              className="w-full"
              placeholder="Enter Email Address"
              {...form.register("email")}
              error={form.formState.errors.email?.message}
            />
            <Input
              label="New Password"
              required
              type="password"
              className="w-full"
              placeholder="*******"
              {...form.register("password")}
              error={form.formState.errors.password?.message}
            />
            <Input
              label="Confirm Password"
              required
              type="password"
              className="w-full"
              placeholder="*******"
              {...form.register("confirmPassword")}
              error={form.formState.errors.confirmPassword?.message}
            />
          </div>

          <div className="mt-10 space-y-6">
            <Button
              type="submit"
              size={"large"}
              isLoading={isLoading}
              className="text-[13px] font-bold py-2 px-8 mx-auto w-full ">
              {isLoading ? "Processing..." : "Reset Password"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

export const schema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      {
        message:
          "Your password must contain a minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      }
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});
