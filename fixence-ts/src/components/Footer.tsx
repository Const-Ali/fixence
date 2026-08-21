import { useCallback, useMemo, useState } from "react";
import BriefcaseBusiness from "lucide-react/dist/esm/icons/briefcase-business.mjs";
import Play from "lucide-react/dist/esm/icons/play.mjs";
import Settings from "lucide-react/dist/esm/icons/settings.mjs";
import { useApp } from "../context/AppContext";
import { SocialIcon, type SocialBrand } from "./ui/SocialIcon";

const LOGO_URL = "/favicon.svg";

interface SocialLink {
  href: string;
  label: string;
  brand?: SocialBrand;
  icon?: typeof Play;
}

export function Footer() {
  const { t } = useApp();
  const [logoError, setLogoError] = useState(false);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const socials = useMemo(
    (): SocialLink[] => [
      {
        href: t.socials.instagram,
        brand: "instagram",
        label: "Instagram",
      },
      { href: t.socials.telegram, brand: "telegram", label: "Telegram" },
      { href: t.socials.whatsapp, brand: "whatsapp", label: "WhatsApp" },
      { href: t.socials.youtube, icon: Play, label: "YouTube" },
      { href: t.socials.linkedin, icon: BriefcaseBusiness, label: "LinkedIn" },
    ],
    [t.socials],
  );

  return (
    <footer className="border-t border-slate-200 bg-white/50 py-14 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              {logoError ? (
                <Settings
                  aria-hidden="true"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                />
              ) : (
                <img
                  src={LOGO_URL}
                  alt={t.logoAlt}
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-9 object-contain"
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

          <div>
            <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {t.nav.links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="rounded text-sm text-slate-500 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a
                  href={`tel:${t.phone.tel}`}
                  className="rounded hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-blue-400"
                >
                  {t.phone.display}
                </a>
              </li>
              <li>{t.contact.info.hoursValue}</li>
              <li>{t.contact.info.locationValue}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-3">
              {socials.map(({ href, brand, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 ${
                    brand === "instagram"
                      ? "text-pink-500 hover:border-pink-400 hover:text-pink-600"
                      : brand === "telegram"
                        ? "text-sky-500 hover:border-sky-400 hover:text-sky-600"
                        : brand === "whatsapp"
                          ? "text-emerald-500 hover:border-emerald-400 hover:text-emerald-600"
                          : "text-slate-500 hover:border-blue-400 hover:text-blue-600 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {brand ? (
                    <SocialIcon brand={brand} className="h-5 w-5" />
                  ) : Icon ? (
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  ) : null}
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
