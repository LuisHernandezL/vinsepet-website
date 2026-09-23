"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { services } from "@/content/services";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

interface ContactFormDict {
  title: string;
  subtitle: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  serviceDefault: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  requiredHint: string;
}

const inputClasses =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

/**
 * No backend is available on a static export, so submission builds a
 * `mailto:` link (subject + body from the fields) and opens the visitor's
 * email client instead of POSTing anywhere.
 */
export function ContactForm({ locale, dict }: { locale: Locale; dict: ContactFormDict }) {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `${dict.title} — ${values.name || siteConfig.name}`;
    const bodyLines = [
      `${dict.name}: ${values.name}`,
      `${dict.company}: ${values.company}`,
      `${dict.email}: ${values.email}`,
      `${dict.phone}: ${values.phone}`,
      `${dict.service}: ${values.service}`,
      "",
      values.message,
    ];

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
      <div>
        <h2 className="font-heading text-xl font-semibold text-navy">{dict.title}</h2>
        <p className="mt-1 text-sm text-navy/70">{dict.subtitle}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-navy">
            {dict.name} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className={inputClasses}
            autoComplete="name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-navy">
            {dict.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            className={inputClasses}
            autoComplete="organization"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-navy">
            {dict.email} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className={inputClasses}
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            {dict.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className={inputClasses}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-navy">
          {dict.service}
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">{dict.serviceDefault}</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title[locale]}>
              {service.title[locale]}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-navy">
          {dict.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder={dict.messagePlaceholder}
          className={inputClasses}
        />
      </div>

      <p className="text-xs text-navy/50">{dict.requiredHint}</p>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
      >
        {dict.submit}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
