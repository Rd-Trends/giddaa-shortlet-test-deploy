import { useMutation } from "@tanstack/react-query";
import { VERIFY_BOOKING_PAYMENT_KEY } from "../constants/keys";
import { verifyBookingPayment } from "../services/booking";

export const useVerifyBookingPayment = () => {
  return useMutation({
    mutationKey: [VERIFY_BOOKING_PAYMENT_KEY],
    mutationFn: verifyBookingPayment,
  });
};
