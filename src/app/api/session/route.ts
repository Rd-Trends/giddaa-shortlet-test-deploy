import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { defaultSession, SessionData, sessionOptions } from "@/lib/session";
import { revalidatePath } from "next/cache";

// login
export async function POST(request: NextRequest) {
  const cookie = await cookies();
  const session = await getIronSession<SessionData>(cookie, sessionOptions);

  const { token } = (await request.json()) as {
    token: string;
  };

  session.isLoggedIn = true;
  session.token = token;
  await session.save();

  revalidatePath("/");
  return Response.json(session);
}

// read session
export async function GET() {
  const cookie = await cookies();
  const session = await getIronSession<SessionData>(cookie, sessionOptions);

  if (session.isLoggedIn !== true) {
    return Response.json(defaultSession);
  }

  return Response.json(session);
}

// logout
export async function DELETE() {
  const cookie = await cookies();
  const session = await getIronSession<SessionData>(cookie, sessionOptions);

  session.destroy();
  revalidatePath("/");

  return Response.json(defaultSession);
}
