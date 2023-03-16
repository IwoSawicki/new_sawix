import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: new Headers(req.headers),
    },
  });

  response.headers.forEach((header) => console.log("header", header));

  response.headers.set("x-custom-auth-header", "isAuthed");

  //   response.cookies.set("authed?", "true");
  //   console.log("res", response.cookies);

  console.log("response header", response.headers);

  return response;
}

export const config = {
  matcher: "/",
};
