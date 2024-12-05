import { useQuery } from "@tanstack/react-query";
import { GET_EXCHANGE_RATES_KEY } from "../constants/keys";
import { getExchangeRates } from "../services/exchange-rate";

export const useGetExchangeRates = () => {
  return useQuery({
    queryKey: [GET_EXCHANGE_RATES_KEY],
    queryFn: getExchangeRates,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
