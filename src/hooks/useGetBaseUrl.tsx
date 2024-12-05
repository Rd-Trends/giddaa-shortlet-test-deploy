import { useEffect, useState } from "react";

export const useGetBaseUrl = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return url;
};
