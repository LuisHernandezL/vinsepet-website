export function Chip({
  children,
  tone = "mint",
}: {
  children: React.ReactNode;
  tone?: "mint" | "sand" | "outline";
}) {
  const toneClasses = {
    mint: "bg-mint text-navy",
    sand: "bg-sand text-navy",
    outline: "border border-white/30 text-white",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
