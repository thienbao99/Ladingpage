export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://ladingpage-optimal.vercel.app";

  const robots = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
  `.trim();

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
