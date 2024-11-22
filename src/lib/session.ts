import { isProduction } from "@/utils/is-production";
import { SessionOptions } from "iron-session";

export interface SessionData {
  user?: any | null;
  token?: string | null;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  user: null,
  token: null,
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD!,
  cookieName: process.env.SESSION_COOKIE_NAME!,
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: isProduction(),
  },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
