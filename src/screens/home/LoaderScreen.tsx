import React from "react";
import Container from "@/components/layouts/Container";
import { ShortLetCardLoader } from "@/components/shared/Cards/ShortLetCard";
import SkeletonLoader from "@/components/ui/Skeleton";

const HomePageLoader = () => {
  return (
    <>
      <Container className=" border-b border-mid-grey py-4 flex items-center gap-2 sticky top-[5rem] z-10 bg-background overflow-x-auto ">
        <SkeletonLoader className="w-full h-[38px] rounded-full" />
        <SkeletonLoader className="w-full h-[38px] rounded-full" />
        <SkeletonLoader className="w-full h-[38px] rounded-full" />
        <SkeletonLoader className="hidden xl:block w-full h-[38px] rounded-full" />
        <SkeletonLoader className="hidden xl:block w-full h-[38px] rounded-full" />
        <SkeletonLoader className="hidden xl:block w-full h-[38px] rounded-full" />
        <SkeletonLoader className="hidden xl:block w-full h-[38px] rounded-full" />
        <SkeletonLoader className="hidden xl:block w-full h-[38px] rounded-full" />
      </Container>
      <div className="pb-[60px] md:pb-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 pt-6 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <ShortLetCardLoader key={index} />
          ))}
        </Container>
      </div>
    </>
  );
};

export default HomePageLoader;
