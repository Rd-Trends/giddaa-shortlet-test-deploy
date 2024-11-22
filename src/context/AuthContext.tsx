"use client";

import http from "@/apis/http";
import { StorageKeys } from "@/constants/storage-keys";
import { User } from "@/types/user";
import { isServer } from "@tanstack/react-query";
import {
  createContext,
  useMemo,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (user: { user: User; token: string }) => void;
  removeAuth: () => void;
  token: string | null;
}

const AuthenticationContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  setAuth: () => {},
  removeAuth: () => {},
  token: null,
});

export const getUser = () => {
  if (isServer) {
    return null;
  }

  const user = sessionStorage.getItem(StorageKeys.USER);
  const parsedUser = user ? JSON.parse(user) : null;
  if (parsedUser) http.setAuth(parsedUser.token);
  return parsedUser;
};

export const AuthenticationProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value?: { token?: string | null };
}) => {
  const [user, setUser] = useState<User | null>(() => getUser()?.user || null);
  const [token, setToken] = useState<string | null>(value?.token || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!value?.token);

  const setAuthUserHandler = useCallback(
    (value: { user: User; token: string }) => {
      localStorage.setItem(StorageKeys.USER, JSON.stringify(value.user));
      http.setAuth(value.token);
      setUser(value.user);
      setToken(value.token);
      setIsAuthenticated(true);
    },
    []
  );

  const removeAuthUserHandler = useCallback(() => {
    sessionStorage.removeItem(StorageKeys.USER);
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
  }, []);

  const values = useMemo(
    () => ({
      user,
      isAuthenticated,
      setAuth: setAuthUserHandler,
      removeAuth: removeAuthUserHandler,
      token,
    }),
    [
      JSON.stringify(user),
      setAuthUserHandler,
      removeAuthUserHandler,
      token,
      isAuthenticated,
    ]
  );

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
