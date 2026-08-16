// src/types.ts
export type Language = "fa" | "en";
export type Theme = "light" | "dark";
export type ServiceIcon = "snowflake" | "washing" | "shield";

export interface NavLink {
  id: string;
  label: string;
}

export interface ServiceItem {
  icon: ServiceIcon;
  title: string;
  description: string;
  features: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  dir: "rtl" | "ltr";
  nav: {
    links: NavLink[];
    cta: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustPoints: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  stats: {
    items: StatItem[];
  };
  brands: {
    title: string;
    items: string[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaDescription: string;
    callNow: string;
    whatsapp: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      submit: string;
      note: string;
    };
    info: {
      phoneLabel: string;
      hoursLabel: string;
      hoursValue: string;
      locationLabel: string;
      locationValue: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    followUs: string;
    copyright: string;
    rights: string;
  };
  socials: {
    instagram: string;
    telegram: string;
    whatsapp: string;
    youtube: string;
    linkedin: string;
  };
  phone: {
    display: string;
    tel: string;
  };
  logoAlt: string;
}
