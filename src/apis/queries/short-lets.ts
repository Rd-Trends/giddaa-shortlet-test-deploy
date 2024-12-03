import { GetRequestParamsType } from "@/types/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllShortLets, getShortletsInACity } from "../services/short-lets";
import {
  GET_ALL_SHORT_LETS_KEY,
  GET_SHORT_LETS_IN_A_CITY_KEY,
} from "../constants/keys";

export const useGetShortLets = (params: GetRequestParamsType) => {
  return useInfiniteQuery({
    queryKey: [GET_ALL_SHORT_LETS_KEY, params],
    queryFn: ({ pageParam = 1 }) =>
      getAllShortLets({ ...params, pageNumber: pageParam }),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPageParam >= lastPage?.metadata.totalPages) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    initialPageParam: 1,
  });
};

export const useGetShortLetsInACity = (
  params: GetRequestParamsType & { id: string }
) => {
  return useQuery({
    queryKey: [GET_SHORT_LETS_IN_A_CITY_KEY, params],
    queryFn: () => getShortletsInACity(params),
  });
};
