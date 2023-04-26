import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req: any) {
    if (
      req.nextUrl.pathname.startsWith("/employer/vacancies") &&
      !req.nextauth.token?.user.company
    )
      return NextResponse.rewrite(new URL("/recommendations", req.url));
    if (
      req.nextUrl.pathname.startsWith("/recommendations") &&
      req.nextauth.token?.user.company
    )
      return NextResponse.rewrite(new URL("/employer/vacancies", req.url));
    if (
      req.nextUrl.pathname.startsWith("/edit-cv") &&
      req.nextauth.token?.user.company
    )
      return NextResponse.rewrite(new URL("/employer/vacancies", req.url));
    if (
      req.nextUrl.pathname.startsWith("/edit-profile") &&
      req.nextauth.token?.user.company
    )
      return NextResponse.rewrite(new URL("/employer/vacancies", req.url));
    if (
      req.nextUrl.pathname.startsWith("/favorites") &&
      req.nextauth.token?.user.company
    )
      return NextResponse.rewrite(new URL("/employer/vacancies", req.url));
    if (
      req.nextUrl.pathname.startsWith("/employer/edit-profile") &&
      !req.nextauth.token?.user.company
    )
      return NextResponse.rewrite(new URL("/recommendations", req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/employer/candidate/:path*",
    "/employer/feedback/:path*",
    "/employer/edit-profile/:path*",
    "/employer/vacancies/:path*",
    "/edit-profile/:path*",
    "/edit-cv/:path*",
    "/favorites/:path*",
    "/recommendations/:path*",
  ],
};
