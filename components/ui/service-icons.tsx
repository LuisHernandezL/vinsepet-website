import {
  Ruler,
  AlertTriangle,
  Fuel,
  ClipboardCheck,
  Droplets,
  Truck,
  ListChecks,
  ShieldCheck,
  Container as ContainerIcon,
  Eye,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/content/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  ruler: Ruler,
  alert: AlertTriangle,
  fuel: Fuel,
  clipboard: ClipboardCheck,
  droplets: Droplets,
  loading: Truck,
  list: ListChecks,
  shield: ShieldCheck,
  container: ContainerIcon,
  eye: Eye,
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
