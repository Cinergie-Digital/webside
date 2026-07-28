// @ts-nocheck
import type { Context } from "https://edge.netlify.com";

const CRAWLER_REGEX = /facebookexternalhit|LinkedInBot|Twitterbot|Slackbot|WhatsApp|TelegramBot|Discordbot|Pinterest|redditbot/i;

export default async (request: Request, context: Context) => {
  const userAgent = request.headers.get("user-agent") || "";

  // Not a crawler → let the normal SPA handle it
  if (!CRAWLER_REGEX.test(userAgent)) {
    return context.next();
  }

  const url = new URL(request.url);
  const match = url.pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (!match) {
    return context.next();
  }

  const slug = match[1];

  try {
    const apiRes = await fetch(
      `https://api.cinergiedigital.com/recruitment/admin/blog_share.php?slug=${encodeURIComponent(slug)}`
    );

    if (!apiRes.ok) {
      return context.next(); // fall back to normal SPA on error
    }

    const html = await apiRes.text();

    return new Response(html, {
      status: 200,
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  } catch (err) {
    console.error("Blog meta edge function error:", err);
    return context.next();
  }
};

export const config = { path: "/blog/:slug" };