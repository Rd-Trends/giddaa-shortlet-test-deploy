import { GetRequestParamsType, PaginatedResponseType } from "@/types/api";
import {
  GET_ALL_STATES_IN_A_COUNTRY,
  GET_CITIES_IN_A_STATE,
  GET_STATES,
} from "../constants/endpoints";
import http from "../http";
import { transformPaginatedResponse } from "../helpers/transformers";
import { City, State } from "@/types/location";

export const getStates = async (params: GetRequestParamsType) => {
  return await http.get(
    GET_STATES,
    { params },
    (res: PaginatedResponseType<State>) => transformPaginatedResponse(res)
  );
};

export const getAllStatesInACountry = async (
  payload: GetRequestParamsType & { countryId: string }
) => {
  const { countryId, ...params } = payload;
  return await http.get(
    GET_ALL_STATES_IN_A_COUNTRY(countryId),
    { params },
    (res: PaginatedResponseType<State>) => transformPaginatedResponse(res)
  );
};

export const getCitiesInAState = async (
  payload: GetRequestParamsType & { stateId: string }
) => {
  const { stateId, ...params } = payload;
  return await http.get(
    GET_CITIES_IN_A_STATE(stateId),
    { params },
    (res: PaginatedResponseType<City>) => transformPaginatedResponse(res)
  );
};
