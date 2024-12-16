"use client";

import { ShortLetServiceIconMap } from "@/constants/shortlet-service-icon-map";
import { ShortLet } from "@/types/short-let";
import React, { useMemo } from "react";

const ServicesSection = ({ services }: { services: ShortLet["services"] }) => {
  const availableservices = useMemo(() => {
    return services.map((service) => {
      return {
        name: service.name,
        id: service.id,
        description: service.description,
        isPaid: JSON.parse(service.extraProperties || "{}")?.payment === "PAID",
      };
    });
  }, [services]);
  return (
    <div className="!mt-4">
      <p className=" text-body-md text-black">
        Free and paid services offered at this place.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 xl:mt-10 gap-8 xl:gap-x-[72px] xl:gap-y-10">
        {availableservices.map((service) => {
          return (
            <div key={service.id} className=" space-y-4">
              {
                ShortLetServiceIconMap[
                  service.id as keyof typeof ShortLetServiceIconMap
                ]
              }
              <div className=" space-y-2">
                <p className=" text-body-lg font-bold">{service.name}</p>
                <p className=" text-body-sm font-medium text-primary">
                  {service.isPaid
                    ? " Additional payments required upon service request"
                    : "Free (Paid for with the booking fee)"}
                </p>

                <p className=" text-body-md">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
