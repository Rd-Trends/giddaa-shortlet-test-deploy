import AxiosBase from "./baseAxios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;

if (!baseURL) throw new Error("missing api url");

export default new AxiosBase(baseURL);