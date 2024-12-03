import { GetRequestParamsType } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { GET_CITIES_IN_A_STATE_KEY } from "../constants/keys";
import { getCitiesInAState } from "../services/location";

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
