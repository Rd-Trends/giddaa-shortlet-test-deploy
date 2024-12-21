// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type FilterState = {
  types: string[];
  services: string[];
  uses: string[];
  houseTypes: string[];
  features: string[];
  city: string;
  bedrooms: number;
  bathrooms: number;
  minimumPrice: number;
  maximumPrice: number;
  price: Array<number>;
  cautionFee: string;
};

export const defaultInitState: FilterState = {
  types: ["all"],
  services: ["all"],
  uses: ["all"],
  houseTypes: ["all"],
  features: [],
  city: "",
  bedrooms: 0,
  bathrooms: 0,
  minimumPrice: 0,
  maximumPrice: 0,
  price: [0, 0],
  cautionFee: "",
};

export type FilterStore = FilterState & {
  setFilter: (filter: Partial<FilterState>) => void;
  clearFilter: () => void;
};

export const createFilterStore = (
  initState: FilterState = defaultInitState
) => {
  return createStore<FilterStore>()((set) => ({
    ...initState,
    setFilter: (filter) => set((state) => ({ ...state, ...filter })),
    clearFilter: () => set(defaultInitState),
  }));
};
