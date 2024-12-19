import { AppRoutes } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProfilePagesHeader = ({
  title,
  link = AppRoutes.PROFILE,
  linkText = "Your Profile",
}: {
  title: string;
  link?: string;
  linkText?: string;
}) => {
  return (
    <div
      className={
        " bg-background border border-mid-grey rounded-full relative py-6 " +
        " flex items-center justify-center gap-4 px-4 md:px-6 "
      }>
      <Link
        href={link}
        className={
          " flex items-center justify-center gap-2 text-primary text-body-sm font-bold " +
          " absolute left-6"
        }>
        <FaArrowLeftLong className=" size-4" />
        <span className=" hidden md:inline">{linkText}</span>
      </Link>
      <h1 className=" text-heading-3 font-secondary font-bold capitalize text-primary text-center">
        {title}
      </h1>
    </div>
  );
};

export default ProfilePagesHeader;
