// src/components/Footer.tsx
import { useState } from "react";
import { Settings } from "lucide-react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";

const LOGO_URL = "/photo_2026-08-16_13-11-56.jpg";

export function Footer() {
  const { t } = useApp();
  const [logoError, setLogoError] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white/50 py-14 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              {logoError ? (
                <Settings className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ) : (
                <img
                  src={LOGO_URL}
                  alt={t.logoAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              )}
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                Fixence
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t.footer.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {t.nav.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a
                  href={`tel:${t.phone.tel}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.phone.display}
                </a>
              </li>
              <li>{t.contact.info.hoursValue}</li>
              <li>{t.contact.info.locationValue}</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-3">
              {[
                {
                  href: t.socials.instagram,
                  icon: FaInstagram,
                  label: "Instagram",
                },
                {
                  href: t.socials.telegram,
                  icon: FaTelegramPlane,
                  label: "Telegram",
                },
                {
                  href: t.socials.whatsapp,
                  icon: FaWhatsapp,
                  label: "WhatsApp",
                },
                { href: t.socials.youtube, icon: FaYoutube, label: "YouTube" },
                {
                  href: t.socials.linkedin,
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          {t.footer.copyright} — {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
