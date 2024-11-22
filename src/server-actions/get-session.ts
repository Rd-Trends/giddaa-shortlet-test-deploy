"use server";

// server action to get session from cookie
// read more about server actions: https://react.dev/reference/rsc/server-actions
//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

import { defaultSession, SessionData, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function getSession() {
  "use server";

  const cookie = await cookies();
  const session = await getIronSession<SessionData>(cookie, sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.token = defaultSession.token;
  }

  return session;
}
