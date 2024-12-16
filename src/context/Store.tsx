"use client";

import { useGetCustomerFavoriteShortLets } from "@/apis/queries/customer";
import useAuth from "@/hooks/useAuth";
import { ShortLet } from "@/types/short-let";
import { createContext } from "react";

type StoreContextProps = {
  favoriteShortLets: ShortLet[];
  isLoadingFavoriteShortLets: boolean;
};

export const StoreContext = createContext<StoreContextProps>({
  favoriteShortLets: [],
  isLoadingFavoriteShortLets: false,
});

const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const { data, isLoading: isLoadingFavoriteShortLets } =
    useGetCustomerFavoriteShortLets(
      {
        pageNumber: 1,
        pageSize: 500,
        search: "",
      },
      {
        enabled: isAuthenticated,
      }
    );

  return (
    <StoreContext.Provider
      value={{
        favoriteShortLets: data ?? [],
        isLoadingFavoriteShortLets,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
