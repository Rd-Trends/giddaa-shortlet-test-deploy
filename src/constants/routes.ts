// for route names, this route names must match the folder structure in the app folder

export const AppRoutes = {
  HOME: "/",
  // account
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  // short lets
  SHORT_LETS: "/short-lets",
  BOOK_SHORT_LET: "/[id]/booking",

  // profile
  PROFILE: "/profile",
  PROFILE_RESERVATIONS: "/profile/reservations",
  PROFILE_RESERVATION_DETAILS: "/profile/reservations/[id]",
};
