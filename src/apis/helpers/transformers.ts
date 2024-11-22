import { PaginatedResponseType, SingleResponseType } from "@/types/api";

export const transformSingleResponse = <T>(response: SingleResponseType<T>) => {
  return response?.value?.value;
};

export const transformPaginatedResponse = <T>(
  response: PaginatedResponseType<T>
) => {
  return {
    value: response?.value?.value?.data || [],
    metadata: {
      pageNumber: response.value.value.pageNumber,
      pageSize: response.value.value.pageSize,
      totalPages: response.value.value.totalPages,
      totalRecords: response.value.value.totalRecords,
    },
  };
};
