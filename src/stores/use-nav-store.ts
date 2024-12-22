// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type NavState = {
  search: string;
};

export const defaultInitState: NavState = {
  search: "",
};

export type NavStore = NavState & {
  setSearch: (search: string) => void;
};

export const createNavStore = (initState: NavState = defaultInitState) => {
  return createStore<NavStore>()((set) => ({
    ...initState,
    setSearch: (search) => set((state) => ({ ...state, search })),
  }));
};
