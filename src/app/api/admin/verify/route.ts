import { NextResponse } from "next/server";
import { verifyToken, isAdminEmail, generateSessionToken, getSessionCookieName } from "@/lib/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/admin?error=missing-token", request.url));
  }

  const { valid, email } = verifyToken(token);

  if (!valid || !email || !isAdminEmail(email)) {
    return NextResponse.redirect(new URL("/admin?error=invalid-token", request.url));
  }

  const sessionToken = generateSessionToken(email);
  const cookieName = getSessionCookieName();

  const response = NextResponse.redirect(new URL("/admin", request.url));
  response.cookies.set(cookieName, sessionToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return response;
}
