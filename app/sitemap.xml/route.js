export async function GET() {
  // Base URL của website (bạn có thể chỉnh thành domain thật)
  const baseUrl = "https://ladingpage-optimal.vercel.app";

  // Các route tĩnh
  const routes = [
    "",
    "/ui-toi-uu",
    "/seo-ky-thuat",
    "/demo",
    "/blog",
  ];

  // Nếu bạn có danh sách blog động, có thể fetch từ DB / API
  const blogPosts = [
    { slug: "toi-uu-hieu-suat-web" },
    { slug: "seo-ky-thuat-can-ban" },
  ];

  const allRoutes = [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  // Tạo XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `<url>
  <loc>${route.url}</loc>
  <lastmod>${route.lastModified}</lastmod>
</url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
