import { SingleResponseType } from "@/types/api";
import { GET_BOOKING_BY_ID, VERIFY_BOOKING } from "../constants/endpoints";
import { ShortLetBooking } from "@/types/short-let";
import { transformSingleResponse } from "../helpers/transformers";
import http from "../http";

export const getBookingById = async (id: string) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const res = await fetch(`${baseURL}/${GET_BOOKING_BY_ID(id)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    const resp = await res.json();
    console.log(resp);
    return null;
  }

  const data = (await res.json()) as SingleResponseType<ShortLetBooking>;
  return transformSingleResponse(data);
};

export const verifyBookingPayment = async (id: string) => {
  return http.get(VERIFY_BOOKING(id));
};
