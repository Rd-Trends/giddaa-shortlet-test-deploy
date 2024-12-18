import { GetRequestParamsType, PaginatedResponseType } from "@/types/api";
import {
  GET_CUSTOMER_BOOKINGS,
  GET_CUSTOMER_FAVORITE_SHORT_LETS,
} from "../constants/endpoints";
import http from "../http";
import { ShortLet, ShortLetBooking } from "@/types/short-let";
import { transformPaginatedResponse } from "../helpers/transformers";

export const getCustomerFavoriteShortLets = async (
  params: GetRequestParamsType
) => {
  return http.get(
    GET_CUSTOMER_FAVORITE_SHORT_LETS,
    { params },
    (res: PaginatedResponseType<{ customerId: string; shortlet: ShortLet }>) =>
      transformPaginatedResponse(res).value?.map((item) => item.shortlet)
  );
};

export const getCustomerBookings = async (
  params: GetRequestParamsType & { isPast?: boolean }
) => {
  return http.get(
    GET_CUSTOMER_BOOKINGS,
    { params },
    (res: PaginatedResponseType<ShortLetBooking>) =>
      transformPaginatedResponse(res)
  );
};
