import type { Metadata } from "next";
import Link from "next/link";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false },
};

// Global not-found (the app has multiple root layouts, so it renders its own
// <html>). Next.js exports it as `out/404.html` for static hosting. It has no
// guaranteed locale, so the copy is bilingual on purpose.
export default function GlobalNotFound() {
  return (
    <html lang="es" className={fontVariables}>
      <body className="antialiased">
        <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-navy px-6 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-mint">
            Error 404
          </p>
          <h1 className="font-heading text-3xl font-semibold sm:text-4xl">
            Página no encontrada / Page not found
          </h1>
          <p className="max-w-md text-white/80">
            La página que buscas no existe o fue movida.
            <br />
            The page you are looking for doesn&apos;t exist or was moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/es/"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-teal-dark"
            >
              Ir al inicio (ES)
            </Link>
            <Link
              href="/en/"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Go home (EN)
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
