import { StoreContext } from "@/context/Store";
import { useCallback, useContext } from "react";

export const useGetFavoriteShortlets = () => {
  const { favoriteShortLets, isLoadingFavoriteShortLets } =
    useContext(StoreContext);

  const isFavorite = useCallback(
    (shortLetId: string) => {
      return favoriteShortLets?.some((shortLet) => shortLet.id === shortLetId);
    },
    [favoriteShortLets]
  );

  return {
    favoriteShortLets,
    isLoading: isLoadingFavoriteShortLets,
    isFavorite,
  };
};
