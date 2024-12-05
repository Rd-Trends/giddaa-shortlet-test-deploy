import { ExchangeRates } from "@/types/exchange-rate";
import { GET_EXCHANGE_RATE } from "../constants/endpoints";
import http from "../http";
import { SingleResponseType } from "@/types/api";

export const getExchangeRates = async () => {
  return http.get(
    GET_EXCHANGE_RATE,
    {},
    (res: SingleResponseType<ExchangeRates[]>) =>
      res.value[
        0 as unknown as keyof typeof res.value
      ] as unknown as ExchangeRates
  );
};
