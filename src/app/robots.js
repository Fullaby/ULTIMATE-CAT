export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ultimate-cat.vercel.app/sitemap.xml",
  };
}