"use client";

import { useEffect } from "react";

/**
 * Client-side fallback for the `/` -> `/{locale}/` redirect. The primary
 * mechanism is the `<meta http-equiv="refresh">` tag rendered by
 * `app/page.tsx` (works with JS disabled and on static hosting); this
 * component fires an immediate `location.replace` for browsers that render
 * JS before honouring the meta refresh, avoiding the visible delay.
 */
export function RootRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return null;
}
