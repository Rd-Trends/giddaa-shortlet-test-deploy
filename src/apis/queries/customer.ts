import { GetRequestParamsType } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import {
  GET_CUSTOMER_BOOKINGS_KEY,
  GET_CUSTOMER_FAVORITE_SHORT_LETS_KEY,
} from "../constants/keys";
import {
  getCustomerBookings,
  getCustomerFavoriteShortLets,
} from "../services/customer";

export const useGetCustomerFavoriteShortLets = (
  params: GetRequestParamsType,
  opts = { enabled: false }
) => {
  return useQuery({
    queryKey: [GET_CUSTOMER_FAVORITE_SHORT_LETS_KEY, params],
    queryFn: () => getCustomerFavoriteShortLets(params),
    staleTime: 1000 * 60 * 60 * 1, // 1 hour
    ...opts,
  });
};

export const useGetCustomerBookings = (
  params: GetRequestParamsType,
  opts = { enabled: false }
) => {
  return useQuery({
    queryKey: [GET_CUSTOMER_BOOKINGS_KEY, params],
    queryFn: () => getCustomerBookings(params),
    ...opts,
  });
};
