import Link from "next/link";
import React from "react";

type ProfileListCardProps = {
  name: string;
  description: string;
  icon: React.JSX.Element;
  link?: string;
  onClick?: () => void;
  requiresAction?: boolean;
};

const Tag = ({
  children,
  link,
  onClick,
  className,
}: {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
  className?: string;
}) => {
  if (link) {
    return (
      <Link href={link} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

const ProfileListCard = ({
  name,
  description,
  icon,
  link,
  onClick,
  requiresAction,
}: ProfileListCardProps) => {
  return (
    <Tag
      link={link}
      onClick={onClick}
      className={
        " group px-4 py-6 rounded-2xl border border-mid-grey relative" +
        " shadow-[1px_4px_4px_5px_rgba(0,_0,_0,_0.02)] cursor-pointer " +
        "hover:ring-1 ring-offset-0 ring-primary hover:border-primary"
      }>
      {icon}
      {requiresAction && (
        <span
          className={
            " flex items-center justify-center px-2 py-1.5 text-[9px] uppercase font-bold h-[22px] " +
            " text-dark-red border-2 border-dark-red bg-danger-light rounded-full leading-none " +
            " absolute top-4 right-4"
          }>
          Action Required
        </span>
      )}

      <h3 className=" text-body-md font-bold text-black mt-4">{name}</h3>
      <p className=" text-body-sm text-charcoal-grey">{description}</p>
    </Tag>
  );
};

export default ProfileListCard;
