import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Keystatic admin panel protection in production
    if (
        process.env.NODE_ENV === "production" &&
        request.nextUrl.pathname.startsWith("/keystatic")
    ) {
        // Check for admin access key via query parameter or cookie
        const accessKey = request.nextUrl.searchParams.get("key");
        const cookieKey = request.cookies.get("keystatic_access")?.value;
        const validKey = process.env.KEYSTATIC_SECRET;

        // If no secret is set, block all access in production
        if (!validKey) {
            return new NextResponse("Not Found", { status: 404 });
        }

        // If valid key is provided via query param, set cookie and redirect
        if (accessKey === validKey) {
            const url = request.nextUrl.clone();
            url.searchParams.delete("key");
            const response = NextResponse.redirect(url);
            response.cookies.set("keystatic_access", validKey, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24, // 24 hours
            });
            return response;
        }

        // If valid cookie exists, allow access
        if (cookieKey === validKey) {
            return NextResponse.next();
        }

        // Otherwise, block access
        return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/keystatic/:path*"],
};
