"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useGetShortLets } from "@/apis/queries/short-lets";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { toast } from "@/lib/toast";
import ShortLetCard, {
  ShortLetCardLoader,
} from "@/components/shared/Cards/ShortLetCard";
import WelcomeModal from "@/components/shared/modals/WelcomeModal";
import ScrollToTop from "@/components/ui/ScrollToTop";

const AllShortLetPage = () => {
  const { isIntersecting, ref } = useIntersectionObserver();
  const [search] = useState("");

  const {
    data,
    isFetchingNextPage,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetched,
    error,
  } = useGetShortLets({
    pageNumber: 1,
    pageSize: 8,
    search,
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    isFetchingNextPage,
    isFetching,
    hasNextPage,
    fetchNextPage,
  ]);

  const shortLets = useMemo(() => {
    return data?.pages.map((page) => page.value).flat() || [];
  }, [data?.pages]);

  const isFetchingForFirstTime = isFetching && !isFetchingNextPage;

  if (error) {
    return <div>An Error Occured</div>;
  }

  if (!isFetching && isFetched && !shortLets.length) {
    return (
      <div className=" h-80 flex flex-col justify-center items-center">
        <h1>No Short Lets</h1>
        <p>There are no available short lets at the moment</p>

        <button
          onClick={() => {
            toast.success({
              title: "Success",
              description: "Login successful",
            });
          }}>
          Click Me
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 ">
        {!isFetchingForFirstTime &&
          !!shortLets.length &&
          shortLets.map((shortLet) => {
            return <ShortLetCard key={shortLet.id} shortLet={shortLet} />;
          })}

        {(isFetching || isFetchingNextPage) &&
          Array.from({ length: 4 }).map((_, index) => (
            <ShortLetCardLoader key={index} />
          ))}
      </div>
      <div ref={ref} className="py-4 h-8 bg-transparent w-full"></div>

      <ScrollToTop />
      <WelcomeModal />
    </>
  );
};

export default AllShortLetPage;
