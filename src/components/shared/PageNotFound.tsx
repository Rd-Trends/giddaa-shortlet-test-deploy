"use client";

import React from "react";
import Container from "../layouts/Container";
import Link from "next/link";
import { cn } from "@/utils/classname";
import { buttonVariants } from "../ui/Button";

const PageNotFound = () => {
  return (
    <Container className=" flex flex-col items-center justify-center bg-background py-10">
      <img
        src="/images/not-found-page.png"
        alt="404"
        className="w-full max-w-[343px] h-auto"
      />

      <div className=" space-y-2 mb-4 max-w-[335px]">
        <h1 className=" text-body-xl font-bold text-center">
          Oops! You Seem To Be Lost.
        </h1>
        <p className="text-center text-body-md">
          We could not find the page you are looking for. Kindly click the
          button below to go back home.
        </p>
      </div>

      <Link href={"/"} className={cn(buttonVariants())}>
        Go Home
      </Link>
    </Container>
  );
};

export default PageNotFound;
