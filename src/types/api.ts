export type GetRequestParamsType = {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
};

export type PaginatedResponseType<T> = {
  statusCode: number;
  value: {
    value: {
      pageNumber: number;
      pageSize: number;
      totalPages: number;
      totalRecords: number;
      data: T[];
    };
  };
};

export type SingleResponseType<T> = {
  statusCode: number;
  formatters: Array<unknown>;
  contentTypes: Array<unknown>;
  declaredType: unknown;
  value: {
    value: T;
    message: string;
    statusCode: number;
  };
};
