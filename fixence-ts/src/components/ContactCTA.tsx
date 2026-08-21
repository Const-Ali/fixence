import { useCallback, useState } from "react";
import type { FormEvent } from "react";
import Clock3 from "lucide-react/dist/esm/icons/clock-3.mjs";
import MapPin from "lucide-react/dist/esm/icons/map-pin.mjs";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle.mjs";
import PhoneCall from "lucide-react/dist/esm/icons/phone-call.mjs";
import Send from "lucide-react/dist/esm/icons/send.mjs";
import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";
import { SectionTitle } from "./ui/SectionTitle";

type FormStatus = "idle" | "success" | "error";

function normalizeDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

export function ContactCTA() {
  const { t, lang } = useApp();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const { ref: formRef, isVisible: isFormVisible } = useReveal<HTMLDivElement>({
    rootMargin: "-40px",
  });
  const { ref: infoRef, isVisible: isInfoVisible } = useReveal<HTMLDivElement>({
    rootMargin: "-40px",
  });

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const normalizedName = name.trim();
      const normalizedPhone = normalizeDigits(phone).trim();

      if (
        normalizedName.length < 2 ||
        !/^[+()\d\s-]{7,}$/.test(normalizedPhone)
      ) {
        setStatus("error");
        return;
      }

      const message = `${t.contact.form.name}: ${normalizedName}\n${t.contact.form.phone}: ${normalizedPhone}`;
      const url = `https://wa.me/989121234567?text=${encodeURIComponent(message)}`;
      const popup = window.open(url, "_blank", "noopener,noreferrer");

      setStatus(popup ? "success" : "error");
    },
    [name, phone, t],
  );

  const statusMessage =
    status === "success"
      ? lang === "fa"
        ? "درخواست شما آماده ارسال در واتساپ است."
        : "Your request is ready to send in WhatsApp."
      : status === "error"
        ? lang === "fa"
          ? "لطفاً نام و شماره تماس معتبر وارد کنید."
          : "Please enter a valid name and phone number."
        : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          titleId="contact-title"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div
            ref={formRef}
            className={`reveal rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5 ${
              isFormVisible ? "reveal-visible" : ""
            }`}
          >
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
              {t.contact.form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  minLength={2}
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t.contact.form.phone}
                </label>
                <input
                  id="contact-phone"
                  name="tel"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                <Send aria-hidden="true" className="h-5 w-5" />
                {t.contact.form.submit}
              </button>

              <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                {t.contact.form.note}
              </p>
              <p
                aria-live="polite"
                className={`text-center text-sm ${
                  status === "error"
                    ? "text-red-600 dark:text-red-400"
                    : "text-emerald-600 dark:text-emerald-400"
                }`}
              >
                {statusMessage}
              </p>
            </form>
          </div>

          <div
            ref={infoRef}
            className={`reveal flex flex-col gap-6 ${
              isInfoVisible ? "reveal-visible" : ""
            }`}
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
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <PhoneCall aria-hidden="true" className="h-4 w-4" />
                  {t.phone.display}
                </a>
                <a
                  href={t.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>

            <ul className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <li className="flex items-center gap-3">
                <PhoneCall
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400"
                />
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
                <Clock3
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400"
                />
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
                <MapPin
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400"
                />
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
          </div>
        </div>
      </div>
    </section>
  );
}
