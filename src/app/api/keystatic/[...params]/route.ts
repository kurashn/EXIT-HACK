import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "@keystatic-config";

console.log("Keystatic Env Check:", {
    hasClientId: !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    hasClientSecret: !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    hasSecret: !!process.env.KEYSTATIC_SECRET,
    clientIdPrefix: process.env.KEYSTATIC_GITHUB_CLIENT_ID?.substring(0, 4),
    mode: process.env.NODE_ENV,
});

export const { POST, GET } = makeRouteHandler({
    config,
    clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    secret: process.env.KEYSTATIC_SECRET,
});
