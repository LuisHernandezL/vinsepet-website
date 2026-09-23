import { MapPin } from "lucide-react";
import { ports } from "@/content/ports";
import type { Locale } from "@/lib/i18n/config";
import { Reveal } from "@/components/ui/Reveal";

export function PortsList({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {ports.map((port, index) => (
        <Reveal as="li" key={port.slug} index={index}>
          <div className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3">
            <MapPin className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="font-medium text-navy">{port.name}</p>
              <p className="text-xs text-navy/60">{port.country[locale]}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
