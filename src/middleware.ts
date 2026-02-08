import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // In production, Keystatic uses GitHub OAuth for authentication.
    // The /api/keystatic routes must remain accessible for the OAuth flow.
    // No additional middleware protection is needed since GitHub auth handles it.
    return NextResponse.next();
}

export const config = {
    matcher: ["/keystatic/:path*"],
};
