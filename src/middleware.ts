import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "@/lib/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export async function middleware(req: NextRequest) {
  const cookieName = "i18next";

  if (req.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();
  let lng;

  if (req.cookies.has(cookieName)) {
    const cookie = req.cookies.get(cookieName);
    if (cookie) {
      lng = acceptLanguage.get(cookie.value);
    }
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  if (!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  const lngInReferer = languages.find((l) =>
    req.nextUrl.pathname.startsWith(`/${l}`)
  );
  const response = NextResponse.next();
  if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
  return response;
}
