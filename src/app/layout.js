import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Steven Leonardo — Ultimate Cat Experience | Creative Web Developer",
  description:
    "Steven Leonardo presents the Ultimate Cat Experience — a creative, interactive web experiment combining animation, music, and modern web technology. Built with Next.js, Framer Motion, and pure chaos.",

  keywords: [
    "Steven Leonardo",
    "Steven Leonardo developer",
    "Steven Leonardo portfolio",
    "Steven Leonardo web developer",
    "creative web developer",
    "Next.js experiment",
    "interactive web experience",
    "framer motion animation",
    "modern JavaScript projects",
  ],

  authors: [{ name: "Steven Leonardo" }],
  creator: "Steven Leonardo",
  publisher: "Steven Leonardo",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Steven Leonardo — Ultimate Cat Experience",
    description:
      "A unique interactive web experience by Steven Leonardo. Featuring animated transitions, sound design, and experimental UI built with Next.js.",
    url: "https://ultimate-cat.vercel.app",
    siteName: "Steven Leonardo",
    images: [
      {
        url: "https://ultimate-cat.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steven Leonardo Ultimate Cat Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Steven Leonardo — Ultimate Cat Experience",
    description:
      "Creative interactive web experiment by Steven Leonardo using Next.js and animation.",
    images: ["https://ultimate-cat.vercel.app/og-image.png"],
    creator: "@stevenleonardo", // optional
  },

  alternates: {
    canonical: "https://ultimate-cat.vercel.app",
  },

  category: "Technology",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
