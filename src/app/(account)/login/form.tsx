"use client";

import { useLoginUser } from "@/apis/mutations/accout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { AppRoutes } from "@/constants/routes";
import useAuth from "@/hooks/useAuth";
import { toast } from "@/lib/toast";
import Logo from "@/svgs/Logo";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const router = useRouter();
  const loginUser = useLoginUser();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const isLoading = loginUser.isPending;
  const handleSubmit = form.handleSubmit((data) => {
    loginUser.mutate(
      { ...data, type: "CUSTOMER" },
      {
        onSuccess: (data) => {
          setAuth(data);
          router.replace(AppRoutes.Home);
          toast.success({
            title: "Success",
            description: "Login successful",
          });
        },
        onError(error) {
          toast.error({
            title: "Login Failed",
            description: error.message,
          });
        },
      }
    );
  });

  return (
    <div className="min-h-screen w-full flex flex-row bg-background container">
      <div className="w-full  flex-col justify-center relative hidden lg:flex space-y-8 xl:w-2/5 xl:pl-[60px]">
        <Link href="/" className="">
          <Logo />
        </Link>
        <img
          src={"/bg-image/auth-bg.svg"}
          alt=""
          className="rounded-[16px] w-[520px] h-auto"
        />
      </div>

      <div className="flex flex-col xl:justify-center flex-1 overflow-y-auto py-10 px-6 lg:px-[60px]">
        <Link href="/" className="lg:hidden pb-8">
          <Logo />
        </Link>
        <div className="mb-5">
          <h1 className="font-secondary text-heading-1">
            <span className=" text-secondary">Welcome to Shortlets</span> by
            Giddaa!
          </h1>
          <p className="giddaa-heading-five pt-[12px]">
            Log into your acccount to find houses and purchase plans in Nigeria
            you can afford.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
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
              label="Password"
              required
              type="password"
              className="w-full"
              placeholder="*******"
              {...form.register("password")}
              error={form.formState.errors.password?.message}
            />
          </div>
          <div className="mt-1.5 flex justify-end">
            <Link
              href={AppRoutes.FORGOT_PASSWORD}
              className="text-xs text-primary font-bold underline underline-offset-2">
              Forgot Password
            </Link>
          </div>

          <div className="mt-7 space-y-4">
            <Button
              type="submit"
              size={"large"}
              isLoading={isLoading}
              className="text-[13px] font-bold py-2 px-4 w-full ">
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
            <p className=" text-center font-normal text-[13px]">
              {`Don't have an account?`}{" "}
              <Link
                href={AppRoutes.SIGNUP}
                className="text-primary font-bold hover:text-[#335f32]">
                Sign up here
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

export default LoginForm;

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
