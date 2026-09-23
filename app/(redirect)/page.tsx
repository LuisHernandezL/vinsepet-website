import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n/config";
import { RootRedirect } from "@/components/layout/RootRedirect";

const target = `/${defaultLocale}/`;

// This route intentionally has no server-side redirect: `redirects()` in
// next.config.ts is unsupported with `output: "export"`. Instead we render
// a static stub that redirects through a <meta refresh> (works without JS,
// on any static host) plus an immediate client-side replace, with a visible
// link as the final fallback.
export const metadata: Metadata = {
  title: "Redirecting",
  robots: { index: false, follow: true },
};

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <RootRedirect href={target} />
      <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-navy px-6 text-center text-white">
        <p className="text-sm uppercase tracking-widest text-mint">
          Redirigiendo… / Redirecting…
        </p>
        <h1 className="font-heading text-2xl font-semibold">
          Un momento, por favor
        </h1>
        <noscript>
          <p className="text-white/80">
            Si no eres redirigido automáticamente, continúa manualmente.
          </p>
        </noscript>
        <a
          href={target}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-teal-dark"
        >
          Continuar / Continue
        </a>
      </main>
    </>
  );
}
