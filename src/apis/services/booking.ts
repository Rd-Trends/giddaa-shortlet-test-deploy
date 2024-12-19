import { SingleResponseType } from "@/types/api";
import { GET_BOOKING_BY_ID, VERIFY_BOOKING } from "../constants/endpoints";
import { ShortLetBooking } from "@/types/short-let";
import { transformSingleResponse } from "../helpers/transformers";
import http from "../http";

export const getBookingById = async (id: string) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  try {
    const res = await fetch(`${baseURL}${GET_BOOKING_BY_ID(id)}`);

    console.log(`${baseURL}/${GET_BOOKING_BY_ID(id)}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = (await res.json()) as SingleResponseType<ShortLetBooking>;
    return transformSingleResponse(data);
  } catch (error) {
    console.error(error);
  }

  // return http.get(
  //   GET_BOOKING_BY_ID(id),
  //   {},
  //   (res: SingleResponseType<ShortLetBooking>) => transformSingleResponse(res)
  // );
};

export const verifyBookingPayment = async (id: string) => {
  return http.get(VERIFY_BOOKING(id));
};
