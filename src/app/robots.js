export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://YOUR-VERCEL-URL.vercel.app/sitemap.xml",
  };
}