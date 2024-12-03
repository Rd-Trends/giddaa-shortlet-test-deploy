"use client";

import { useGetShortLetsInACity } from "@/apis/queries/short-lets";
import ShortLetCard from "@/components/shared/Cards/ShortLetCard";
import { ShortLet } from "@/types/short-let";
import React from "react";

const ShortletsNearBy = ({ city }: { city: ShortLet["city"] }) => {
  const { data } = useGetShortLetsInACity({
    pageNumber: 1,
    pageSize: 4,
    id: city.id,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {data?.value?.map((shortLet) => {
        return <ShortLetCard key={shortLet.id} shortLet={shortLet} />;
      })}
    </div>
  );
};

export default ShortletsNearBy;
