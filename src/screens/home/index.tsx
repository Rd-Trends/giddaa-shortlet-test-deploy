"use client";

import React, { useEffect, useMemo } from "react";
import { useGetShortLets } from "@/apis/queries/short-lets";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ShortLetCard, {
  ShortLetCardLoader,
} from "@/components/shared/Cards/ShortLetCard";
import WelcomeModal from "@/components/shared/modals/WelcomeModal";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Container from "@/components/layouts/Container";
import FilterNav from "./FilterNav";
import { useFilter } from "./useFilter";
import { useNavStore } from "@/app/providers/nav-provider";

const AllShortLetPage = () => {
  const { isIntersecting, ref } = useIntersectionObserver();
  const search = useNavStore((state) => state.search);
  const filter = useFilter();

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
    advancedSearch: filter.length ? JSON.stringify(filter) : null,
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
  const totalShortLets =
    data?.pages.map((page) => page.metadata.totalRecords).flat()[0] || 0;

  const isFetchingForFirstTime = isFetching && !isFetchingNextPage;

  return (
    <>
      <FilterNav totalShortLets={totalShortLets} isFetching={isFetching} />
      <div className="pb-[60px] md:pb-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 pt-6 ">
          {!isFetchingForFirstTime &&
            !!shortLets.length &&
            shortLets.map((shortLet) => {
              return <ShortLetCard key={shortLet.id} shortLet={shortLet} />;
            })}

          {(isFetching || isFetchingNextPage) &&
            Array.from({ length: 4 }).map((_, index) => (
              <ShortLetCardLoader key={index} />
            ))}
        </Container>
        <div ref={ref} className="py-4 h-8 bg-transparent w-full" />

        {!isFetching && isFetched && !shortLets.length && (
          <Container className=" pb-10 flex flex-col justify-center items-center">
            <h1>No Short Lets</h1>
            <p>There are no available short lets at the moment</p>
          </Container>
        )}

        {error && (
          <Container className=" pt-[7rem] pb-10 ">
            <p>An error occured</p>
          </Container>
        )}

        <ScrollToTop />
        <WelcomeModal />
      </div>
    </>
  );
};

export default AllShortLetPage;
