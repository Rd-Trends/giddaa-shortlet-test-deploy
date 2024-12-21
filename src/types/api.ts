export type GetRequestParamsType = {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  advancedSearch?: string | null;
};

export type Filter = {
  connector: "OR" | "AND";
  field: string;
  action: "equals" | "greatThan" | "lessThan" | "contains";
  value: string | number | boolean | string[];
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
