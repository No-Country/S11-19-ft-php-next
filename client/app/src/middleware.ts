import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {

	try {
		const cookieStore = req.cookies.get('garden-wise-auth')
		const authToken = cookieStore?.value
		//console.log("cookieStore: ", cookieStore)
		if (req.nextUrl.pathname.startsWith("/plants") && !authToken) {
			const response = NextResponse.redirect(new URL("/login", req.url));
			//console.log("req.nextUrl.pathname: ", req.nextUrl.pathname)
			return response;
		}
		if (req.nextUrl.pathname.startsWith("/calendar") && !authToken) {
			const response = NextResponse.redirect(new URL("/login", req.url));
			//console.log("req.nextUrl.pathname: ", req.nextUrl.pathname)
			return response;
		}
		if (req.nextUrl.pathname.startsWith("/profile") && !authToken) {
			const response = NextResponse.redirect(new URL("/login", req.url));
			//console.log("req.nextUrl.pathname: ", req.nextUrl.pathname)
			return response;
		}
		if (req.nextUrl.pathname.startsWith("/reminders") && !authToken) {
			const response = NextResponse.redirect(new URL("/login", req.url));
			//console.log("req.nextUrl.pathname: ", req.nextUrl.pathname)
			return response;
		}

		if (authToken && req.nextUrl.pathname.startsWith("/login")) {
			const response = NextResponse.redirect(new URL("/plants", req.url));
			//console.log("(2)req.nextUrl.pathname: ", response)
			return response;
		}
		if (authToken && req.nextUrl.pathname.startsWith("/register")) {
			const response = NextResponse.redirect(new URL("/plants", req.url));
			return response;
		}

	}catch(err){console.log("ERROR: ", err)}
}

export const config = {
	matcher: ['/:path*'],
}
