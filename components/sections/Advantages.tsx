import {
  ShieldCheck,
  Globe2,
  Clock,
  Languages,
  FileCheck2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: LucideIcon[] = [ShieldCheck, Globe2, Clock, Languages, FileCheck2, Zap];

export function Advantages({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="bg-mint-50 py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} index={index}>
                <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-sand">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-navy/70">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
