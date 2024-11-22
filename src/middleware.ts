import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "./lib/session";
import { AppRoutes } from "./constants/routes";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard"];
const authRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAuthRoute = authRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = await cookies();
  const session = await getIronSession<SessionData>(cookie, sessionOptions);

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.token) {
    return NextResponse.redirect(new URL(AppRoutes.LOGIN, req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (isAuthRoute && session?.token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
