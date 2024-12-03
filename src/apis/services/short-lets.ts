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
  GET_SHORT_LET_BY_ID,
  GET_SHORT_LETS_IN_A_CITY,
} from "../constants/endpoints";
import { ShortLet } from "@/types/short-let";
import { customFetch } from "../customFetch";

export const getAllShortLets = async (params: GetRequestParamsType) => {
  return http.get(
    GET_ALL_SHORT_LETS,
    { params },
    (res: PaginatedResponseType<ShortLet>) => transformPaginatedResponse(res)
  );
};

export const getShortletById = async (id: string) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  return customFetch(
    `${baseURL}/${GET_SHORT_LET_BY_ID(id)}`,
    {},
    (res: SingleResponseType<ShortLet>) => transformSingleResponse(res)
  );
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
