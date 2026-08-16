// src/components/ContactCTA.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { Clock3, MapPin, PhoneCall, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { SectionTitle } from "./ui/SectionTitle";
import { fadeUp } from "../lib/motion";

export function ContactCTA() {
  const { t } = useApp();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `${t.contact.form.name}: ${name}\n${t.contact.form.phone}: ${phone}`;
    const url = `https://wa.me/989121234567?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
              {t.contact.form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
                {t.contact.form.submit}
              </button>

              <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                {t.contact.form.note}
              </p>
            </form>
          </motion.div>

          {/* CTA + Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <h3 className="mb-2 text-2xl font-black">{t.contact.ctaTitle}</h3>
              <p className="mb-6 text-sm text-blue-100">
                {t.contact.ctaDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${t.phone.tel}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  <PhoneCall className="h-4 w-4" />
                  {t.phone.display}
                </a>
                <a
                  href={t.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>

            <ul className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.contact.info.phoneLabel}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {t.phone.display}
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.contact.info.hoursLabel}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {t.contact.info.hoursValue}
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.contact.info.locationLabel}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {t.contact.info.locationValue}
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
