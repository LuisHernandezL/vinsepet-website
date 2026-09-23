import { CheckCircle2, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Methodology({
  eyebrow,
  title,
  quote,
  quoteAttribution,
  capabilitiesTitle,
  capabilities,
}: {
  eyebrow: string;
  title: string;
  quote: string;
  quoteAttribution: string;
  capabilitiesTitle: string;
  capabilities: string[];
}) {
  return (
    <section className="bg-navy py-24 text-white">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow={eyebrow} title={title} tone="dark" />
          <Reveal className="relative rounded-2xl border border-white/10 bg-white/5 p-8">
            <Quote className="h-8 w-8 text-sand" aria-hidden="true" />
            <blockquote className="mt-4 text-xl font-medium leading-relaxed text-white/90">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-mint">
              {quoteAttribution}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-heading text-lg font-semibold text-sand">{capabilitiesTitle}</h3>
          <ul className="flex flex-col gap-4">
            {capabilities.map((capability, index) => (
              <Reveal as="li" key={capability} index={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden="true" />
                <span className="text-white/85">{capability}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
