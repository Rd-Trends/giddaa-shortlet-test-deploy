"use client";

import { createNavStore, NavStore } from "@/stores/use-nav-store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type NavStoreApi = ReturnType<typeof createNavStore>;

export const NavStoreContext = createContext<NavStoreApi | undefined>(
  undefined
);

export interface NavStoreProviderProps {
  children: ReactNode;
}

export const NavStoreProvider = ({ children }: NavStoreProviderProps) => {
  const storeRef = useRef<NavStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createNavStore();
  }

  return (
    <NavStoreContext.Provider value={storeRef.current}>
      {children}
    </NavStoreContext.Provider>
  );
};

export const useNavStore = <T,>(selector: (store: NavStore) => T): T => {
  const navStoreContext = useContext(NavStoreContext);

  if (!navStoreContext) {
    throw new Error(`useNavStore must be used within NavStoreProvider`);
  }

  return useStore(navStoreContext, selector);
};
