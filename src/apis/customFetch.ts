export interface ApiErrorData {
  message: string;
  code?: string;
  details?: Record<string, string[]>;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: ApiErrorData
  ) {
    super(message);
  }
}

export async function customFetch<TData, TransformedTData = TData>(
  url: string,
  options: RequestInit = {},
  transformData?: (data: TData) => TransformedTData
): Promise<TransformedTData> {
  try {
    const response = await fetch(`${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      if (errorData) {
        const error = new Error(errorData?.value?.message);
        error.stack = JSON.stringify({
          code: errorData?.value?.statusCode,
          message: errorData?.value?.message,
        });

        throw error;
      }

      throw new ApiError(response.status, response.statusText);
    }

    const data = await response.json();
    if (transformData) {
      return transformData(data);
    }
    return data as TransformedTData;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new ApiError(0, "Network Error", {
        message:
          "Unable to connect to the server. Please check your internet connection.",
      });
    }

    throw error;
  }
}
