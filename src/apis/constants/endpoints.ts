// account
export const SIGNUP = `/public/customer/register`;
export const LOGIN = `/account/login`;
export const LOGIN_GOOGLE = `/account/google-login`;
export const FORGOT_PASSWORD = `/account/generate-reset-password-link`;
export const RESET_PASSWORD = `/account/reset-password`;
export const VERIFY_EMAIL = `/account/verify-link`;

// short-lets
export const GET_ALL_SHORT_LETS = `/public/short-let/get-all`;
export const GET_SHORT_LET_BY_ID = (shortletId: string) =>
  `public/short-let/${shortletId}`;
export const GET_SHORT_LETS_IN_A_CITY = (cityId: string) =>
  `/public/short-let/city/${cityId}/get-all`;
export const RESERVE_SHORT_LET = (shortletId: string) =>
  `/public/short-let/${shortletId}/reserve`;
export const GET_CONTACT_AGENTS_FOR_SHORTLET = (shortletId: string) =>
  `/public/short-let/${shortletId}/contact-agents/get-all`;
export const GET_FAVORITE_SHORT_LETS = `/public/short-let/favorite/get-all`;
export const MARK_SHORT_LET_AS_FAVORITE = (shortletId: string) =>
  `/public/short-let/${shortletId}/favorite-shortlet`;
export const REMOVE_SHORT_LET_FROM_FAVORITE = (shortletId: string) =>
  `/public/short-let/${shortletId}/unfavorite-shortlet`;

// customer
export const GET_CUSTOMER_FAVORITE_SHORT_LETS = `/customer/get-favorite-short-lets`;
export const GET_CUSTOMER_BOOKINGS = `/customer/get-bookings`;

// booking
export const GET_BOOKING_BY_ID = (bookingId: string) =>
  `/public/booking/${bookingId}`;
export const VERIFY_BOOKING = (bookingId: string) =>
  `/public/booking/${bookingId}/verify-payment`;

// news letter
export const JOIN_NEWSLETTER = `/public/join-newsletter`;

// locations
export const GET_STATES = `/public/state/get-all`;
export const GET_ALL_STATES_IN_A_COUNTRY = (countryId: string) =>
  `/public/state/${countryId}/get-all`;
export const GET_CITIES_IN_A_STATE = (stateId: string) =>
  `/public/city/${stateId}/get-all`;

// exchange rate
export const GET_EXCHANGE_RATE = `/get-exchange-rates`;
