import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useManageSearchParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const getSearchParams = useCallback(
    (key: string) => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const setSearchParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, searchParams, router]
  );

  const removeSearchParams = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, searchParams, router]
  );

  return {
    get: getSearchParams,
    set: setSearchParams,
    remove: removeSearchParams,
  };
};
