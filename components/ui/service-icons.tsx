import {
  Ruler,
  AlertTriangle,
  Fuel,
  ClipboardCheck,
  Radar,
  Truck,
  ListChecks,
  ShieldCheck,
  Container as ContainerIcon,
  Link2,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/content/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  ruler: Ruler,
  alert: AlertTriangle,
  fuel: Fuel,
  clipboard: ClipboardCheck,
  radar: Radar,
  loading: Truck,
  list: ListChecks,
  shield: ShieldCheck,
  container: ContainerIcon,
  link: Link2,
  search: Search,
};

export function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden="true" />;
}
