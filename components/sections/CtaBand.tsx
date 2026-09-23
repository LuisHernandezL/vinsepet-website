import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/graphics";

export function CtaBand({
  title,
  subtitle,
  buttonLabel,
  href,
}: {
  title: string;
  subtitle: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <section className="relative overflow-hidden bg-teal py-20 text-white">
      <WaveDivider className="absolute inset-x-0 top-0 h-16 w-full -translate-y-[calc(100%-1px)] text-teal" />
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="max-w-2xl text-lg text-white/90">{subtitle}</p>
          <Button href={href} variant="secondary" className="mt-2">
            {buttonLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
