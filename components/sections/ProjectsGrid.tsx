"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { CalendarDays, MapPin, Package } from "lucide-react";
import type { Project } from "@/content/projects";
import type { Service } from "@/content/services";
import { ports } from "@/content/ports";
import type { Locale } from "@/lib/i18n/config";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

interface FiltersDict {
  allCategories: string;
  categoryLabel: string;
  portLabel: string;
  allPorts: string;
  yearLabel: string;
  cargoLabel: string;
  resultsCount: string;
  noResults: string;
}

export function ProjectsGrid({
  locale,
  projects,
  services,
  dict,
}: {
  locale: Locale;
  projects: Project[];
  services: Service[];
  dict: FiltersDict;
}) {
  const [category, setCategory] = useState("all");
  const [port, setPort] = useState("all");

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (category === "all" || project.category === category) &&
          (port === "all" || project.portSlug === port),
      ),
    [projects, category, port],
  );

  const serviceBySlug = useMemo(
    () => new Map(services.map((service) => [service.slug, service])),
    [services],
  );
  const portBySlug = useMemo(() => new Map(ports.map((p) => [p.slug, p])), []);

  const selectClasses =
    "rounded-full border border-navy/15 bg-white px-4 py-2 text-sm text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="category-filter">
          {dict.categoryLabel}
        </label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={selectClasses}
        >
          <option value="all">{dict.allCategories}</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title[locale]}
            </option>
          ))}
        </select>

        <label className="sr-only" htmlFor="port-filter">
          {dict.portLabel}
        </label>
        <select
          id="port-filter"
          value={port}
          onChange={(event) => setPort(event.target.value)}
          className={selectClasses}
        >
          <option value="all">{dict.allPorts}</option>
          {ports.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>

        <span className="ml-auto text-sm text-navy/60" aria-live="polite">
          {dict.resultsCount.replace("{count}", String(filtered.length))}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-navy/20 bg-white px-6 py-12 text-center text-navy/60">
          {dict.noResults}
        </p>
      ) : (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => {
            const service = serviceBySlug.get(project.category);
            const projectPort = portBySlug.get(project.portSlug);
            return (
              <Reveal key={project.slug} index={index % 6}>
                <motion.article
                  layout
                  className="flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {service ? <Chip tone="sand">{service.tag[locale]}</Chip> : null}
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {project.title[locale]}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy/70">
                    {project.description[locale]}
                  </p>
                  <dl className="mt-auto flex flex-col gap-2 border-t border-navy/10 pt-4 text-xs text-navy/60">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                      <dt className="sr-only">{dict.portLabel}</dt>
                      <dd>{projectPort?.name}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                      <dt className="sr-only">{dict.cargoLabel}</dt>
                      <dd>{project.cargo[locale]}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                      <dt className="sr-only">{dict.yearLabel}</dt>
                      <dd>{project.year}</dd>
                    </div>
                  </dl>
                </motion.article>
              </Reveal>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
