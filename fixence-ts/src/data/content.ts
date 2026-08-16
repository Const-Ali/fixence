// src/data/content.ts
import type { SiteContent } from "../types";

export const content: Record<"fa" | "en", SiteContent> = {
  fa: {
    dir: "rtl",
    logoAlt: "لوگوی فیکسنس",
    phone: { display: "021-12345678", tel: "02112345678" },
    socials: {
      instagram: "https://instagram.com/YOUR_INSTAGRAM_ID",
      telegram: "https://t.me/YOUR_TELEGRAM_ID",
      whatsapp: "https://wa.me/989121234567",
      youtube: "https://youtube.com/@YOUR_CHANNEL",
      linkedin: "https://linkedin.com/company/YOUR_COMPANY",
    },
    nav: {
      links: [
        { id: "services", label: "خدمات" },
        { id: "stats", label: "آمار" },
        { id: "testimonials", label: "نظرات" },
        { id: "faq", label: "سوالات" },
        { id: "contact", label: "تماس" },
      ],
      cta: "درخواست تعمیر",
    },
    hero: {
      badge: "مصطفی قابل و علی محمدی تعمیرکار خبره ",
      titleStart: "تعمیر تخصصی",
      titleHighlight: "یخچال و لباسشویی",
      titleEnd: "در محل شما",
      description:
        "فیکسنس با تکنسین‌های مجرب و قطعات اورجینال، لوازم خانگی شما را در کوتاه‌ترین زمان و با ضمانت‌نامه معتبر تعمیر می‌کند.",
      primaryCta: "تماس فوری",
      secondaryCta: "مشاوره رایگان",
      trustPoints: ["اعزام سریع", "ضمانت‌نامه کتبی", "قطعات اورجینال"],
    },
    services: {
      eyebrow: "خدمات ما",
      title: "چه خدماتی ارائه می‌دهیم؟",
      subtitle: "تعمیر تخصصی انواع لوازم خانگی با به‌روزترین تجهیزات عیب‌یابی",
      items: [
        {
          icon: "snowflake",
          title: "تعمیر یخچال و فریزر",
          description: "رفع کامل عیب سیستم برودتی، کمپرسور و برد الکترونیکی",
          features: [
            "عیب‌یابی دقیق",
            "تعمیر کمپرسور و برد",
            "سرویس گاز و شارژ مبرد",
          ],
        },
        {
          icon: "washing",
          title: "تعمیر ماشین لباسشویی",
          description:
            "تعمیر تخصصی موتور، برد و سیستم آبگیری انواع ماشین لباسشویی",
          features: [
            "تعمیر موتور و بلبرینگ",
            "رفع مشکل برد و برنامه‌ریزی",
            "عیب‌یابی آبگیری و تخلیه",
          ],
        },
        {
          icon: "shield",
          title: "قطعات اورجینال و ضمانت",
          description:
            "تامین قطعات اصلی با ضمانت‌نامه کتبی برای اطمینان خاطر شما",
          features: [
            "قطعات ۱۰۰٪ اورجینال",
            "ضمانت‌نامه معتبر",
            "خدمات پس از تعمیر",
          ],
        },
      ],
    },
    stats: {
      items: [
        { value: 5000, suffix: "+", label: "تعمیر موفق" },
        { value: 12, suffix: "+", label: "سال تجربه" },
        { value: 98, suffix: "٪", label: "رضایت مشتری" },
      ],
    },
    brands: {
      title: "تعمیر تخصصی تمام برندها",
      items: [
        "SAMSUNG",
        "LG",
        "BOSCH",
        "SNOWA",
        "DAEWOO",
        "AQUA",
        "BEKO",
        "HITACHI",
        "WHIRLPOOL",
        "PANASONIC",
        "SIEMENS",
        "MIELE",
        "ELECTROLUX",
        "SHARP",
        "TOSHIBA",
        "HAIER",
        "CANDY",
        "ARÇELIK",
      ],
    },
    testimonials: {
      eyebrow: "نظرات مشتریان",
      title: "مشتریان درباره ما چه می‌گویند؟",
      subtitle: "اعتماد شما، بزرگترین سرمایه ماست",
      items: [
        {
          name: "علی رضایی",
          role: "مشتری",
          text: "تکنسین خیلی سریع اعزام شد و یخچال‌مون رو همون روز تعمیر کرد. واقعاً حرفه‌ای و باانصاف بودن.",
        },
        {
          name: "الهام کریمی",
          role: "مشتری",
          text: "قطعات اورجینال استفاده کردن و ضمانت‌نامه هم دادن. بعد از تعمیر، خیالم کاملاً راحت شد.",
        },
        {
          name: "مهدی امینی",
          role: "مشتری",
          text: "ماشین لباسشویی‌مون مشکل برد داشت. دقیق عیب‌یابی کردن و درجا تعمیر شد. قیمت هم منصفانه بود.",
        },
      ],
    },
    faq: {
      eyebrow: "سوالات متداول",
      title: "پاسخ سوالات شما",
      subtitle: "هر آنچه باید پیش از درخواست تعمیر بدانید",
      items: [
        {
          question: "آیا تعمیر در محل انجام می‌شود؟",
          answer:
            "بله، تکنسین‌های فیکسنس با تجهیزات کامل به محل شما اعزام می‌شوند و تعمیر در همان محل انجام می‌شود؛ مگر اینکه دستگاه نیاز به انتقال به کارگاه داشته باشد.",
        },
        {
          question: "قطعات استفاده‌شده اورجینال هستند؟",
          answer:
            "بله، تمام قطعات استفاده‌شده اورجینال بوده و همراه با ضمانت‌نامه کتبی ارائه می‌شوند تا از اصالت و کیفیت آن‌ها اطمینان کامل داشته باشید.",
        },
        {
          question: "زمان اعزام تکنسین چقدر طول می‌کشد؟",
          answer:
            "درخواست‌ها معمولاً در سریع‌ترین زمان ممکن و غالباً ظرف ۲ تا ۳ ساعت کاری پاسخ‌داده می‌شوند. زمان دقیق پس از ثبت درخواست هماهنگ خواهد شد.",
        },
      ],
    },
    contact: {
      eyebrow: "تماس با ما",
      title: "همین حالا درخواست خود را ثبت کنید",
      subtitle: "کارشناسان ما در کوتاه‌ترین زمان با شما تماس می‌گیرند",
      ctaTitle: "دستگاه شما خراب شده؟",
      ctaDescription: "همین حالا تماس بگیرید و تعمیر را به متخصصان بسپارید.",
      callNow: "تماس فوری",
      whatsapp: "واتساپ",
      form: {
        title: "فرم درخواست تعمیر",
        name: "نام و نام خانوادگی",
        namePlaceholder: "مثلاً: علی محمدی",
        phone: "شماره تماس",
        phonePlaceholder: "۰۹۱۲ ۱۲۳ ۴۵۶۷",
        submit: "ارسال درخواست",
        note: "با ثبت درخواست، مستقیماً به واتساپ ما متصل می‌شوید.",
      },
      info: {
        phoneLabel: "شماره تماس",
        hoursLabel: "ساعات کاری",
        hoursValue: "شنبه تا پنجشنبه، ۹ صبح تا ۹ شب",
        locationLabel: "موقعیت",
        locationValue: "تهران، سراسر شهر",
      },
    },
    footer: {
      description:
        "فیکسنس؛ مرجع تخصصی تعمیر لوازم خانگی با تکنسین‌های مجرب و قطعات اورجینال.",
      quickLinks: "دسترسی سریع",
      contactInfo: "اطلاعات تماس",
      followUs: "ما را دنبال کنید",
      copyright: "© 2026 فیکسنس",
      rights: "تمام حقوق محفوظ است.",
    },
  },

  en: {
    dir: "ltr",
    logoAlt: "Fixence logo",
    phone: { display: "021-12345678", tel: "02112345678" },
    socials: {
      instagram: "https://instagram.com/YOUR_INSTAGRAM_ID",
      telegram: "https://t.me/YOUR_TELEGRAM_ID",
      whatsapp: "https://wa.me/989121234567",
      youtube: "https://youtube.com/@YOUR_CHANNEL",
      linkedin: "https://linkedin.com/company/YOUR_COMPANY",
    },
    nav: {
      links: [
        { id: "services", label: "Services" },
        { id: "stats", label: "Stats" },
        { id: "testimonials", label: "Reviews" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Book a Repair",
    },
    hero: {
      badge: "Certified on-site appliance repair",
      titleStart: "Expert repair for",
      titleHighlight: "Refrigerators & Washers",
      titleEnd: "at your doorstep",
      description:
        "Fixence repairs your home appliances quickly with expert technicians and genuine parts, all backed by a valid warranty.",
      primaryCta: "Call Now",
      secondaryCta: "Free Consultation",
      trustPoints: ["Fast dispatch", "Written warranty", "Genuine parts"],
    },
    services: {
      eyebrow: "Our Services",
      title: "What do we offer?",
      subtitle:
        "Specialized appliance repair with the latest diagnostic equipment",
      items: [
        {
          icon: "snowflake",
          title: "Refrigerator & Freezer Repair",
          description:
            "Complete repair of cooling systems, compressors and electronic boards",
          features: [
            "Precise diagnostics",
            "Compressor & board repair",
            "Gas service & refrigerant charge",
          ],
        },
        {
          icon: "washing",
          title: "Washing Machine Repair",
          description:
            "Specialized repair of motors, boards and water systems for all washers",
          features: [
            "Motor & bearing repair",
            "Board & program fixes",
            "Water inlet & drain diagnostics",
          ],
        },
        {
          icon: "shield",
          title: "Genuine Parts & Warranty",
          description:
            "Original parts supplied with a written warranty for your peace of mind",
          features: [
            "100% original parts",
            "Valid written warranty",
            "After-repair support",
          ],
        },
      ],
    },
    stats: {
      items: [
        { value: 5000, suffix: "+", label: "Successful Repairs" },
        { value: 12, suffix: "+", label: "Years Experience" },
        { value: 98, suffix: "%", label: "Customer Satisfaction" },
      ],
    },
    brands: {
      title: "Expert repair for all brands",
      items: [
        "SAMSUNG",
        "LG",
        "BOSCH",
        "SNOWA",
        "DAEWOO",
        "AQUA",
        "BEKO",
        "HITACHI",
        "WHIRLPOOL",
        "PANASONIC",
        "SIEMENS",
        "MIELE",
        "ELECTROLUX",
        "SHARP",
        "TOSHIBA",
        "HAIER",
        "CANDY",
        "ARÇELIK",
      ],
    },

    testimonials: {
      eyebrow: "Testimonials",
      title: "What our customers say",
      subtitle: "Your trust is our greatest asset",
      items: [
        {
          name: "Ali Rezaei",
          role: "Customer",
          text: "The technician arrived quickly and repaired our fridge the same day. Truly professional and fair.",
        },
        {
          name: "Elham Karimi",
          role: "Customer",
          text: "They used genuine parts and even provided a warranty. I felt completely at ease after the repair.",
        },
        {
          name: "Mehdi Amini",
          role: "Customer",
          text: "Our washer had a board issue. They diagnosed it precisely and fixed it on the spot. Fair pricing too.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Answers to your questions",
      subtitle: "Everything you need to know before requesting a repair",
      items: [
        {
          question: "Do you repair on-site?",
          answer:
            "Yes, Fixence technicians are dispatched to your location with full equipment, and the repair is done on-site unless the device needs to be moved to the workshop.",
        },
        {
          question: "Are the parts original?",
          answer:
            "Yes, all parts used are original and come with a written warranty so you can be fully confident in their authenticity and quality.",
        },
        {
          question: "How long does technician dispatch take?",
          answer:
            "Requests are usually answered as quickly as possible, often within 2–3 working hours. The exact time will be coordinated after your request.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Submit your request now",
      subtitle: "Our experts will call you back as soon as possible",
      ctaTitle: "Is your appliance broken?",
      ctaDescription: "Call us now and leave the repair to the professionals.",
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      form: {
        title: "Repair Request Form",
        name: "Full Name",
        namePlaceholder: "e.g. Ali Mohammadi",
        phone: "Phone Number",
        phonePlaceholder: "0912 123 4567",
        submit: "Send Request",
        note: "Submitting connects you directly to our WhatsApp.",
      },
      info: {
        phoneLabel: "Phone",
        hoursLabel: "Working Hours",
        hoursValue: "Sat–Thu, 9 AM to 9 PM",
        locationLabel: "Location",
        locationValue: "Tehran, citywide",
      },
    },
    footer: {
      description:
        "Fixence; your specialized appliance repair center with expert technicians and genuine parts.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Follow Us",
      copyright: "© 2026 Fixence",
      rights: "All rights reserved.",
    },
  },
};
