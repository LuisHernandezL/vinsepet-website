import { Figtree, Inter } from "next/font/google";

// Shared by every root layout (the app has several: `app/[lang]`,
// `app/(redirect)` and `app/global-not-found`).
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${figtree.variable} ${inter.variable}`;
