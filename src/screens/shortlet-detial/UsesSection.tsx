"use client";

import { SHORT_LET_USES_IMAGE_MAP } from "@/constants/short-let-uses";
import { ShortLet } from "@/types/short-let";
import React, { useMemo } from "react";

const UsesSection = ({ uses = [] }: { uses: ShortLet["uses"] }) => {
  const availableServices = useMemo(() => {
    const uniqueUses = uses.filter(
      (use, index, self) => index === self.findIndex((t) => t.id === use.id)
    );

    return uniqueUses.map((service) => {
      return {
        name: service.name,
        id: service.id,
        description: service.description,
        img: SHORT_LET_USES_IMAGE_MAP[service.id as keyof typeof SHORT_LET_USES_IMAGE_MAP],
      };
    });
  }, [uses]);
  return (
    <div className="!mt-4">
      <p className=" text-body-md text-black">
        This space can and has been used for
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 xl:mt-10 gap-8 xl:gap-10">
        {availableServices.map((service) => {
          return (
            <div
              key={service.id}
              className=" space-y-4 rounded-2xl border-2 border-black">
              <img
                src={service.img}
                alt=""
                className=" w-full rounded-t-2xl h-[264px] object-cover"
              />
              <div className=" space-y-2 p-4">
                <p className=" text-body-lg font-bold">{service.name}</p>
                <p className=" text-body-md">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsesSection;
