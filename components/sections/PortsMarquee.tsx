import { Anchor } from "lucide-react";
import { ports } from "@/content/ports";
import { Container } from "@/components/ui/Container";

/**
 * CSS-only marquee (no client JS needed): duplicate the list once and
 * translate by -50% over `--animate-marquee`, defined in globals.css.
 * `prefers-reduced-motion` disables the animation via the same file.
 */
export function PortsMarquee({ title }: { title: string }) {
  const doubled = [...ports, ...ports];

  return (
    <section className="border-y border-navy/10 bg-mint-50 py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
          {title}
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 pl-12">
          {doubled.map((port, index) => (
            <div
              key={`${port.slug}-${index}`}
              className="flex items-center gap-2 whitespace-nowrap text-lg font-semibold text-navy/70"
            >
              <Anchor className="h-4 w-4 text-teal" aria-hidden="true" />
              {port.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
