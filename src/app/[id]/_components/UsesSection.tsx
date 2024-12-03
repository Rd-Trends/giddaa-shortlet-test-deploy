"use client";

import { ShortLet } from "@/types/short-let";
import React, { useMemo } from "react";

const ImageMap = {
  GET_AWAY_SPOT_SHORTLET_USE: "/images/shortlet-uses/get-away.png",
  OFFICIAL_TRAVEL_SHORTLET_USE: "/images/shortlet-uses/travel.png",
  PARTIES_SHORTLET_USE: "/images/shortlet-uses/parties.png",
  WEDDING_PREPARATION_SHORTLET_USE: "/images/shortlet-uses/weddings.png",
  CONTENT_STUDIO_SHORTLET_USE: "/images/shortlet-uses/content-studio.png",
  MOVIE_SHOOTS_SHORTLET_USE: "/images/shortlet-uses/movie-shoots.png",
};

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
        img: ImageMap[service.id as keyof typeof ImageMap],
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
