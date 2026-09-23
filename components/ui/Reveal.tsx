"use client";

import { motion, type Variants } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay index, multiplied internally. */
  index?: number;
  y?: number;
  as?: "div" | "li";
}

const baseVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

/**
 * Fade + slide-up scroll reveal. Animates once when it enters the viewport.
 * Use `index` to stagger items inside a grid/list.
 */
export function Reveal({ children, className, index = 0, y = 24, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={baseVariants(y)}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
