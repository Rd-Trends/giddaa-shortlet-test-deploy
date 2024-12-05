import { GetRequestParamsType, PaginatedResponseType } from "@/types/api";
import { GET_CITIES_IN_A_STATE } from "../constants/endpoints";
import http from "../http";
import { transformPaginatedResponse } from "../helpers/transformers";
import { City } from "@/types/location";

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