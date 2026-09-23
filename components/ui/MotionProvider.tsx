"use client";

import { MotionConfig } from "motion/react";

/**
 * Wraps the app in a single MotionConfig so every `motion.*` element and
 * `whileInView` animation respects the user's OS-level
 * `prefers-reduced-motion` setting automatically.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
