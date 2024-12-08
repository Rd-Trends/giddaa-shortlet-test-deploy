import ArmedGuardIcon from "@/svgs/ArmedGuardIcon";
import CCTVIcon from "@/svgs/CCTVICon";
import DoorOpenIcon from "@/svgs/DoorOpenIcon";
import GatedIcon from "@/svgs/GatedIcon";
import ShootingStarIcon from "@/svgs/ShootingStarIcon";
import WindowIcon from "@/svgs/Window";
import { ShortLet } from "@/types/short-let";
import React from "react";

const SafetyAndSecuritySection = ({ shortLet }: { shortLet: ShortLet }) => {
  const features = shortLet.features[0];
  return (
    <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
      {features.hasCCTVSurveillanceSystem && (
        <div className=" space-y-4">
          <CCTVIcon className=" w-[31px] h-[30px] " />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">CCTV Cameras</p>

            <p className=" text-body-md">
              CCTV cameras are present inside and outside the house, but not in
              the rooms
            </p>
          </div>
        </div>
      )}

      {features.hasArmedGuards && (
        <div className=" space-y-4">
          <ArmedGuardIcon className=" w-[27px] h-[34px] " />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">Armed Guards</p>

            <p className=" text-body-md">
              There are armed personnel guarding at the estate gate
            </p>
          </div>
        </div>
      )}

      {features.hasGatedCompound && (
        <div className=" space-y-4">
          <GatedIcon className=" w-[42px] h-[33px] " />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">In a Gated Community</p>

            <p className=" text-body-md">
              In a gated community, where the ins and outs are checkecjed
            </p>
          </div>
        </div>
      )}

      {features.hasHighBrowArea && (
        <div className=" space-y-4">
          <ShootingStarIcon className=" w-[42px] h-[33px] " />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">In a High Brow Area</p>

            <p className=" text-body-md">
              In a gated community, where the ins and outs are checkecjed
            </p>
          </div>
        </div>
      )}

      {features.hasBulletProofDoors && (
        <div className=" space-y-4">
          <DoorOpenIcon className=" w-[31px] h-[37px] " />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">Bulletproof Doors</p>

            <p className=" text-body-md">
              The main doors at this place are bulletproof and extremely
              durable.
            </p>
          </div>
        </div>
      )}

      {features.hasBurglaryProofWindows && (
        <div className=" space-y-4">
          <WindowIcon className=" w-[28px] h-[28px] " />
          <div className=" space-y-2">
            <p className=" text-body-lg font-bold">Burglary Proof Windows</p>

            <p className=" text-body-md">
              All windows have durable burglary proof guard rails and
              protection.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyAndSecuritySection;
