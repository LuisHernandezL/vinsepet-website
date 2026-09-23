import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Stats({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { value: number; suffix: string; label: string }[];
}) {
  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.label} index={index} className="flex flex-col items-center gap-2 text-center">
              <span className="font-heading text-4xl font-bold text-teal sm:text-5xl">
                <Counter value={item.value} suffix={item.suffix} />
              </span>
              <span className="text-sm font-medium uppercase tracking-wide text-navy/60">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
