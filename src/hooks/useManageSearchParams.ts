import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useManageSearchParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSearchParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);

      return {
        query: params.toString(),
        fullPath: `${pathname}?${params.toString()}`,
      };
    },
    [pathname, searchParams]
  );

  const removeSearchParams = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);

      return {
        query: params.toString(),
        fullPath: `${pathname}?${params.toString()}`,
      };
    },
    [pathname, searchParams]
  );

  return { setSearchParams, removeSearchParams };
};
