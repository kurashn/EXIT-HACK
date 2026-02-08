import { NextResponse } from "next/server";

// Temporary diagnostic endpoint - DELETE after debugging
export async function GET() {
    return NextResponse.json({
        NODE_ENV: process.env.NODE_ENV,
        hasClientId: !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
        clientIdLength: process.env.KEYSTATIC_GITHUB_CLIENT_ID?.length ?? 0,
        clientIdPrefix: process.env.KEYSTATIC_GITHUB_CLIENT_ID?.substring(0, 6),
        hasClientSecret: !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
        clientSecretLength: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET?.length ?? 0,
        hasSecret: !!process.env.KEYSTATIC_SECRET,
        secretLength: process.env.KEYSTATIC_SECRET?.length ?? 0,
    });
}
