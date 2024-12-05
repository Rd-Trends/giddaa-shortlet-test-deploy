import React from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { allShortLetsOptions } from "@/apis/queries/short-lets";
import AllShortLetPage from "@/screens/home";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchInfiniteQuery(
    allShortLetsOptions({ pageNumber: 1, pageSize: 8, search: "" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AllShortLetPage />
    </HydrationBoundary>
  );
}
