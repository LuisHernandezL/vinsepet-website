import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroBackdrop } from "@/components/ui/graphics";

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  scrollHint,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  scrollHint?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden">
      <HeroBackdrop />
      <Container className="py-32 sm:py-40">
        <Reveal className="flex max-w-3xl flex-col gap-6" y={32}>
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            {eyebrow}
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-white/80 sm:text-xl">{subtitle}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button href={primaryHref} variant="secondary">
              {primaryCta}
            </Button>
            <Button href={secondaryHref} variant="ghost">
              {secondaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>
      {scrollHint ? (
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-widest text-white/60">
          <span>{scrollHint}</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </div>
      ) : null}
    </section>
  );
}
