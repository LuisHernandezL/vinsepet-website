import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  secondary: "bg-sand text-navy hover:brightness-95",
  ghost: "border border-white/30 text-white hover:bg-white/10",
  outline: "border border-navy/20 text-navy hover:bg-navy/5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand";

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  const external = /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonAsButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
