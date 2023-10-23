import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {


	const authTokens = false

  if (request.nextUrl.pathname.startsWith("/plants") && !authTokens) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }
  if (authTokens && request.nextUrl.pathname.startsWith("/login")) {
    const response = NextResponse.redirect(new URL("/plants", request.url));
    return response;
  }
	if (authTokens && request.nextUrl.pathname.startsWith("/register")) {
    const response = NextResponse.redirect(new URL("/plants", request.url));
    return response;
  }

}

export const config = {
	matcher: ['/:path*'],
}


