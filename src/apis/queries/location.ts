import { GetRequestParamsType } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import {
  GET_ALL_STATES_IN_A_COUNTRY_KEY,
  GET_CITIES_IN_A_STATE_KEY,
  GET_STATES_KEY,
} from "../constants/keys";
import {
  getAllStatesInACountry,
  getCitiesInAState,
  getStates,
} from "../services/location";

export const useGetAllStates = (
  params: GetRequestParamsType,
  opts?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: [GET_STATES_KEY, params],
    queryFn: () => getStates(params),
    ...opts,
  });
};

export const useGetAllStatesInACountry = (
  params: GetRequestParamsType & { countryId: string },
  opts?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: [GET_ALL_STATES_IN_A_COUNTRY_KEY, params],
    queryFn: () => getAllStatesInACountry(params),
    ...opts,
  });
};

export const useGetCitiesInAState = (
  params: GetRequestParamsType & { stateId: string },
  opts?: { enabled?: boolean }
) => {
  const { stateId, ...rest } = params;
  return useQuery({
    queryKey: [GET_CITIES_IN_A_STATE_KEY, stateId, rest],
    queryFn: () => getCitiesInAState(params),
    ...opts,
  });
};
