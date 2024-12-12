import { useMutation } from "@tanstack/react-query";
import {
  GET_FAVORITE_SHORT_LETS_KEY,
  MARK_SHORT_LET_AS_FAVORITE_KEY,
  REMOVE_SHORT_LET_FROM_FAVORITE_KEY,
  RESERVE_SHORT_LET_KEY,
} from "../constants/keys";
import {
  markShortLetAsFavorite,
  removeShortLetFromFavorite,
  reserveShortLet,
} from "../services/short-lets";
import { ReserveShortLetPayload, ShortLet } from "@/types/short-let";
import { getQueryClient } from "@/lib/get-query-client";

export const useReserveShortLet = (id: string) => {
  return useMutation({
    mutationKey: [RESERVE_SHORT_LET_KEY],
    mutationFn: (payload: ReserveShortLetPayload) =>
      reserveShortLet({ id, ...payload }),
  });
};

export const useMarkShortLetAsFavorite = (shortLet: ShortLet) => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationKey: [MARK_SHORT_LET_AS_FAVORITE_KEY],
    mutationFn: () => markShortLetAsFavorite(shortLet.id),
    onMutate: async () => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: [GET_FAVORITE_SHORT_LETS_KEY],
      });

      // Snapshot the previous value
      const prevFavoriteShortLets = queryClient.getQueryData([
        GET_FAVORITE_SHORT_LETS_KEY,
      ]);

      // Optimistically update to the new value
      queryClient.setQueryData(
        [GET_FAVORITE_SHORT_LETS_KEY],
        (old: ShortLet[]) => [...(old || []), shortLet]
      );

      // Return a context object with the snapshotted value
      return { prevFavoriteShortLets };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [GET_FAVORITE_SHORT_LETS_KEY],
        context?.prevFavoriteShortLets
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_FAVORITE_SHORT_LETS_KEY],
      });
    },
  });
};

export const useRemoveShortLetFromFavorite = (shortLet: ShortLet) => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationKey: [REMOVE_SHORT_LET_FROM_FAVORITE_KEY],
    mutationFn: () => removeShortLetFromFavorite(shortLet.id),
    onMutate: async () => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: [GET_FAVORITE_SHORT_LETS_KEY],
      });

      // Snapshot the previous value
      const prevFavoriteShortLets = queryClient.getQueryData([
        GET_FAVORITE_SHORT_LETS_KEY,
      ]);

      // Optimistically update to the new value
      queryClient.setQueryData(
        [GET_FAVORITE_SHORT_LETS_KEY],
        (old: ShortLet[]) =>
          (old || []).filter((oShortLet) => oShortLet.id !== shortLet.id)
      );

      // Return a context object with the snapshotted value
      return { prevFavoriteShortLets };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [GET_FAVORITE_SHORT_LETS_KEY],
        context?.prevFavoriteShortLets
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_FAVORITE_SHORT_LETS_KEY],
      });
    },
  });
};
