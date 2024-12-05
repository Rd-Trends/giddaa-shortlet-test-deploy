"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useGetShortLets } from "@/apis/queries/short-lets";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Container from "@/components/layouts/Container";
import { toast } from "@/lib/toast";
import Navbar from "@/components/layouts/TopNav";
import ShortLetCard, {
  ShortLetCardLoader,
} from "@/components/shared/Cards/ShortLetCard";
import WelcomeModal from "@/components/shared/modals/WelcomeModal";
import Footer from "@/components/layouts/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container px-0 bg-background min-h-screen">
      <Navbar />
      <Container className=" pt-[7rem] pb-10">{children}</Container>
      <Footer />
    </div>
  );
};

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
    return (
      <Layout>
        <div>An Error Occured</div>
      </Layout>
    );
  }

  if (!isFetching && isFetched && !shortLets.length) {
    return (
      <Layout>
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
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
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

      <WelcomeModal />
    </Layout>
  );
};

export default AllShortLetPage;
