import {
  GetRequestParamsType,
  PaginatedResponseType,
  SingleResponseType,
} from "@/types/api";
import http from "../http";
import {
  transformPaginatedResponse,
  transformSingleResponse,
} from "../helpers/transformers";
import {
  GET_ALL_SHORT_LETS,
  GET_CONTACT_AGENTS_FOR_SHORTLET,
  GET_SHORT_LET_BY_ID,
  GET_SHORT_LETS_IN_A_CITY,
  MARK_SHORT_LET_AS_FAVORITE,
  REMOVE_SHORT_LET_FROM_FAVORITE,
  RESERVE_SHORT_LET,
} from "../constants/endpoints";
import { ReserveShortLetPayload, ShortLet } from "@/types/short-let";
import { User } from "@/types/user";

export const getAllShortLets = async (params: GetRequestParamsType) => {
  return http.get(
    GET_ALL_SHORT_LETS,
    { params },
    (res: PaginatedResponseType<ShortLet>) => transformPaginatedResponse(res)
  );
};

export const getShortletById = async (id: string) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const res = await fetch(`${baseURL}/${GET_SHORT_LET_BY_ID(id)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as SingleResponseType<ShortLet>;
  return transformSingleResponse(data);
};

export const getShortletsInACity = async (
  params: GetRequestParamsType & { id: string }
) => {
  const { id, ...rest } = params;
  return http.get(
    GET_SHORT_LETS_IN_A_CITY(id),
    { params: rest },
    (res: PaginatedResponseType<ShortLet>) => transformPaginatedResponse(res)
  );
};

export const reserveShortLet = async (
  payload: ReserveShortLetPayload & { id: string }
) => {
  const { id, ...rest } = payload;
  return http.post(RESERVE_SHORT_LET(id), rest);
};

export const getContactAgentsForShortLet = (
  payload: GetRequestParamsType & { id: string }
) => {
  const { id, ...params } = payload;

  return http.get(
    GET_CONTACT_AGENTS_FOR_SHORTLET(id),
    { params },
    (res: PaginatedResponseType<User>) => transformPaginatedResponse(res)
  );
};

export const markShortLetAsFavorite = async (id: string) => {
  return http.get(MARK_SHORT_LET_AS_FAVORITE(id));
};

export const removeShortLetFromFavorite = async (id: string) => {
  return http.get(REMOVE_SHORT_LET_FROM_FAVORITE(id));
};
