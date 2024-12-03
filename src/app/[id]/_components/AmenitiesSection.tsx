import { Button } from "@/components/ui/Button";
import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import SpaAndWellnessIcon from "@/svgs/SpaAndWellnessIcon";
import { ShortLet } from "@/types/short-let";
import { useState } from "react";

const AmenitiesSection = ({}: { shortLet: ShortLet }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  console.log(isDrawerOpen);

  return (
    <div className=" space-y-4 md:space-y-10">
      <div className=" grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <div className=" flex items-start space-x-4">
          <SpaAndWellnessIcon />
          <p className=" text-body-md ">Spa & Wellness</p>
        </div>
      </div>

      <Button
        variant={"outline"}
        size={"large"}
        className=" text-body-sm w-full md:w-fit relative"
        onClick={() => setIsDrawerOpen(true)}>
        View All Amenities
        <ArrowOpenIcon className="w-4 h-4 ml-2 absolute right-6 md:static" />
      </Button>
    </div>
  );
};

export default AmenitiesSection;
