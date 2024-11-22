import axios, { AxiosRequestConfig } from "axios";
import ConnectionError from "./ConnectionError";
import { StorageKeys } from "@/constants/storage-keys";
import { deleteToken } from "../services/account";

export interface Transformer<In, Out> {
  (data: In): Out;
}

export default async function customRequest<T, R = T>(
  path: string,
  options?: AxiosRequestConfig,
  transform?: Transformer<T, R>
): Promise<R> {
  try {
    const res = await axios(path, options);

    if (transform) {
      return transform(await res.data);
    }

    return res.data;
  } catch (err) {
    if (!axios.isAxiosError(err)) throw err;
    if (err?.response?.status == 401) {
      await deleteToken();
      sessionStorage.removeItem(StorageKeys.USER);
      window.location.reload();
    }

    if (err.response) {
      const error = new Error(err.response?.data?.value?.message);
      error.stack = {
        ...err.response?.data?.value,
        status: err.response?.status,
      };

      throw error;
    }

    throw new ConnectionError();
  }
}
