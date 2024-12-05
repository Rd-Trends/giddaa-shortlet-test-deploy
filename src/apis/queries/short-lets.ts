import { GetRequestParamsType } from "@/types/api";
import {
  infiniteQueryOptions,
  useQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import {
  getAllShortLets,
  getContactAgentsForShortLet,
  getShortletsInACity,
} from "../services/short-lets";
import {
  GET_ALL_SHORT_LETS_KEY,
  GET_CONTACT_AGENTS_FOR_SHORTLET_KEY,
  GET_SHORT_LETS_IN_A_CITY_KEY,
} from "../constants/keys";

export const allShortLetsOptions = (params: GetRequestParamsType) =>
  infiniteQueryOptions({
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

export const useGetShortLets = (params: GetRequestParamsType) => {
  return useSuspenseInfiniteQuery(allShortLetsOptions(params));
};

export const useGetShortLetsInACity = (
  params: GetRequestParamsType & { id: string }
) => {
  return useQuery({
    queryKey: [GET_SHORT_LETS_IN_A_CITY_KEY, params],
    queryFn: () => getShortletsInACity(params),
  });
};

export const useGetContactAgentsForShortLet = (
  payload: GetRequestParamsType & { id: string },
  opts = { enabled: false }
) => {
  const { id, ...params } = payload;
  return useQuery({
    queryKey: [GET_CONTACT_AGENTS_FOR_SHORTLET_KEY, id, params],
    queryFn: () => getContactAgentsForShortLet(payload),
    ...opts,
  });
};
