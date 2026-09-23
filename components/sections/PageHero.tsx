import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroBackdrop } from "@/components/ui/graphics";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackdrop />
      <Container className="pb-24 pt-36 sm:pb-28 sm:pt-40">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            {eyebrow}
          </span>
          <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-white/80">{subtitle}</p>
        </Reveal>
      </Container>
    </section>
  );
}
