import { GetRequestParamsType, PaginatedResponseType } from "@/types/api";
import http from "../http";
import { transformPaginatedResponse } from "../helpers/transformers";

export const getAllShortLets = async (params: GetRequestParamsType) => {
  return http.get(
    "/short-lets",
    { params },
    (res: PaginatedResponseType<any>) => transformPaginatedResponse(res)
  );
};
