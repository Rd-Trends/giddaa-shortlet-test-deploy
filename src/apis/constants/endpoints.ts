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

// news letter
export const JOIN_NEWSLETTER = `/public/join-newsletter`;

// locations
export const GET_CITIES_IN_A_STATE = (stateId: string) =>
  `/public/city/${stateId}/get-all`;

// exchange rate
export const GET_EXCHANGE_RATE = `/get-exchange-rates`;
