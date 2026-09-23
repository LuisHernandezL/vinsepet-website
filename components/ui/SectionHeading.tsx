import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  const eyebrowTone = tone === "dark" ? "text-sand" : "text-teal";
  const titleTone = tone === "dark" ? "text-white" : "text-navy";
  const subtitleTone = tone === "dark" ? "text-white/75" : "text-navy/70";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowTone}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`font-heading text-3xl font-semibold tracking-tight sm:text-4xl ${titleTone}`}>
        {title}
      </h2>
      {subtitle ? <p className={`text-base sm:text-lg ${subtitleTone}`}>{subtitle}</p> : null}
    </Reveal>
  );
}
