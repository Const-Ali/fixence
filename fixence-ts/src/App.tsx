import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Globe,
  Settings,
  Refrigerator,
  WashingMachine,
  ShieldCheck,
  PhoneCall,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";

// --- Types & Interfaces ---
interface ContentType {
  nav: { services: string; about: string; contact: string; button: string };
  hero: {
    title: string;
    subtitle: string;
    desc: string;
    btnPrimary: string;
    btnSecondary: string;
  };
  services: { title: string; items: { title: string; desc: string }[] };
}

type Language = "fa" | "en";
type Theme = "light" | "dark";

const content: Record<Language, ContentType> = {
  fa: {
    nav: {
      services: "خدمات",
      about: "درباره ما",
      contact: "تماس",
      button: "ثبت درخواست",
    },
    hero: {
      title: "تخصص ما، حیات دوباره",
      subtitle: "لوازم خانگی شما",
      desc: "تیم فیکسنس با بهره‌گیری از متخصصین مجرب، تعمیرات تخصصی را در کمترین زمان ممکن انجام می‌دهد.",
      btnPrimary: "ثبت آنلاین درخواست",
      btnSecondary: "مشاوره رایگان",
    },
    services: {
      title: "خدمات حرفه‌ای ما",
      items: [
        {
          title: "تعمیر یخچال",
          desc: "شارژ گاز، تعویض موتور و عیب‌یابی برد تخصصی انواع برندها",
        },
        {
          title: "ماشین لباسشویی",
          desc: "رفع لرزش، تعویض بلبرینگ و تعمیر تخصصی پمپ تخلیه",
        },
        {
          title: "قطعات اورجینال",
          desc: "استفاده از قطعات اصلی با ضمانت‌نامه کتبی ۶ ماهه",
        },
      ],
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      button: "Request Service",
    },
    hero: {
      title: "Expert Care for",
      subtitle: "Your Home Appliances",
      desc: "Fixence team provides professional repair services with certified technicians in the shortest time.",
      btnPrimary: "Online Request",
      btnSecondary: "Free Consultation",
    },
    services: {
      title: "Our Professional Services",
      items: [
        {
          title: "Refrigerator",
          desc: "Gas recharge, motor replacement, and specialized board repair.",
        },
        {
          title: "Washing Machine",
          desc: "Vibration fix, bearing replacement, and pump repair.",
        },
        {
          title: "Original Parts",
          desc: "We only use genuine parts with a 6-month written warranty.",
        },
      ],
    },
  },
};

const LandingPage: React.FC = () => {
  const [lang, setLang] = useState<Language>("fa");
  const [theme, setTheme] = useState<Theme>("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // اعمال تم به body
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const t = content[lang];
  const isRtl = lang === "fa";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* --- Header --- */}
      <nav className="fixed w-full z-50 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                <Settings size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Fixence<span className="text-blue-600">.ir</span>
              </span>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                onClick={() => setLang(lang === "fa" ? "en" : "fa")}
                className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all flex items-center gap-2 text-xs font-bold"
              >
                <Globe size={18} />
                {lang.toUpperCase()}
              </button>
            </div>

            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2" />

            <div className="flex items-center gap-6 font-medium">
              <a
                href="#services"
                className="hover:text-blue-600 transition-colors"
              >
                {t.nav.services}
              </a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95">
                {t.nav.button}
              </button>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Hero --- */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className={isRtl ? "text-right" : "text-left"}>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <CheckCircle2 size={16} />
              {lang === "fa"
                ? "تضمین کیفیت و سرعت"
                : "Quality & Speed Guaranteed"}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              {t.hero.title} <br />
              <span className="text-blue-600">{t.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 dark:bg-white dark:text-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-3">
                <PhoneCall size={20} />
                {t.hero.btnPrimary}
              </button>
              <button className="border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                {t.hero.btnSecondary}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[4rem] p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white dark:bg-slate-900 rounded-[3.8rem] p-12 aspect-square flex flex-col items-center justify-center text-center">
                <Refrigerator
                  size={120}
                  className="text-blue-600 mb-6 animate-pulse"
                />
                <div className="text-sm font-mono opacity-50">
                  FIXENCE_SYSTEM_V2.0
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-3xl -z-10 rotate-12" />
          </div>
        </div>
      </section>

      {/* --- Services --- */}
      <section
        id="services"
        className="py-32 px-6 bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              {t.services.title}
            </h2>
            <div className="w-24 h-2 bg-blue-600 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {idx === 0 ? (
                    <Refrigerator size={32} />
                  ) : idx === 1 ? (
                    <WashingMachine size={32} />
                  ) : (
                    <ShieldCheck size={32} />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-center gap-6 mb-8 text-slate-400">
          <a
            href="#"
            className="hover:text-blue-600 transition-colors tracking-widest font-black uppercase"
          >
            Fixence
          </a>
        </div>
        <p className="text-slate-500 dark:text-slate-500">
          {lang === "fa"
            ? "© ۲۰۲۶ تمام حقوق محفوظ است علی محمدی"
            : "© 2026 All Rights Reserved Ali Mohammadi"}
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
