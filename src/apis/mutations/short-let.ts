import { useMutation } from "@tanstack/react-query";
import { RESERVE_SHORT_LET_KEY } from "../constants/keys";
import { reserveShortLet } from "../services/short-lets";
import { ReserveShortLetPayload } from "@/types/short-let";

export const useReserveShortLet = (id: string) => {
  return useMutation({
    mutationKey: [RESERVE_SHORT_LET_KEY],
    mutationFn: (payload: ReserveShortLetPayload) =>
      reserveShortLet({ id, ...payload }),
  });
};
