// src/providers/counter-store-provider.tsx
"use client";

import {
  createFilterStore,
  FilterStore,
} from "@/stores/all-shortlet-page-filter";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type FilterStoreApi = ReturnType<typeof createFilterStore>;

export const FilterStoreContext = createContext<FilterStoreApi | undefined>(
  undefined
);

export interface FilterStoreProviderProps {
  children: ReactNode;
}

export const FilterStoreProvider = ({ children }: FilterStoreProviderProps) => {
  const storeRef = useRef<FilterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createFilterStore();
  }

  return (
    <FilterStoreContext.Provider value={storeRef.current}>
      {children}
    </FilterStoreContext.Provider>
  );
};

export const useFilterStore = <T,>(selector: (store: FilterStore) => T): T => {
  const filterStoreContext = useContext(FilterStoreContext);

  if (!filterStoreContext) {
    throw new Error(`useFilterStore must be used within FilterStoreProvider`);
  }

  return useStore(filterStoreContext, selector);
};
