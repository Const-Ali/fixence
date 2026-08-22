import type { SiteContent } from "../types";

export const content: Record<"fa" | "en", SiteContent> = {
  fa: {
    dir: "rtl",
    logoAlt: "لوگوی فیکسنس",
    phone: { display: "۰۲۱-۱۲۳۴۵۶۷۸", tel: "02112345678" },
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
        { id: "experts", label: "متخصصان" },
        { id: "testimonials", label: "نظرات" },
        { id: "faq", label: "سؤالات متداول" },
        { id: "contact", label: "تماس" },
      ],
      cta: "درخواست تعمیر",
    },
    hero: {
      badge: "اعزام تکنسین مجرب تعمیر لوازم خانگی",
      titleStart: "تعمیر تخصصی",
      titleHighlight: "یخچال و لباسشویی",
      titleEnd: "در محل شما",
      description:
        "فیکسنس با تکنسین‌های مجرب و قطعات اصلی، لوازم خانگی شما را در کوتاه‌ترین زمان و با ضمانت‌نامه معتبر تعمیر می‌کند.",
      primaryCta: "تماس فوری",
      secondaryCta: "مشاوره رایگان",
      trustPoints: ["اعزام سریع", "ضمانت‌نامه کتبی", "قطعات اصلی"],
    },
    services: {
      eyebrow: "خدمات ما",
      title: "تعمیرات تخصصی لوازم خانگی",
      subtitle:
        "از عیب‌یابی تا تعمیر نهایی، همه‌چیز با ابزار تخصصی و ضمانت معتبر انجام می‌شود.",
      items: [
        {
          icon: "refrigerator",
          title: "تعمیر یخچال و فریزر",
          description:
            "رفع ایراد سیستم سرمایش، کمپرسور، برد و نشتی گاز انواع یخچال و فریزر",
          features: [
            "عیب‌یابی دقیق در محل",
            "تعمیر کمپرسور و برد",
            "سرویس گاز و شارژ مبرد",
          ],
        },
        {
          icon: "washing",
          title: "تعمیر ماشین لباسشویی",
          description:
            "تعمیر تخصصی موتور، برد، پمپ تخلیه و سیستم آبگیری انواع لباسشویی",
          features: [
            "تعمیر موتور و بلبرینگ",
            "رفع ایراد برد و برنامه",
            "عیب‌یابی آبگیری و تخلیه",
          ],
        },
        {
          icon: "wrench",
          title: "قطعات اصلی و ضمانت تعمیر",
          description:
            "استفاده از قطعات اصلی و ارائه ضمانت‌نامه کتبی برای آرامش خاطر شما",
          features: [
            "قطعات ۱۰۰٪ اصلی",
            "ضمانت‌نامه معتبر",
            "پشتیبانی پس از تعمیر",
          ],
        },
      ],
    },
    stats: {
      items: [
        { value: 5000, suffix: "+", label: "تعمیر موفق" },
        { value: 12, suffix: "+", label: "سال تجربه" },
        { value: 98, suffix: "٪", label: "رضایت مشتریان" },
      ],
    },
    experts: {
      eyebrow: "تیم متخصصان",
      title: "کارشناسانی که دستگاه شما را می‌شناسند",
      subtitle:
        "هر درخواست توسط متخصص همان حوزه بررسی می‌شود تا تعمیر سریع، دقیق و ماندگار باشد.",
      items: [
        {
          name: "علی محمدی",
          role: "سرپرست تعمیرات یخچال",
          specialty: "سیستم سرمایش و کمپرسور",
          experience: "۱۲ سال تجربه",
          features: [
            "تشخیص نشتی و افت سرمایش",
            "تعمیر کمپرسور و برد اصلی",
            "اعزام سریع برای خرابی‌های فوری",
          ],
          icon: "refrigerator",
          image: "ali",
        },
        {
          name: "مصطفی قایل",
          role: "متخصص برد و برق لوازم خانگی",
          specialty: "برد الکترونیکی لباسشویی",
          experience: "۱۰ سال تجربه",
          features: [
            "عیب‌یابی خطاهای پیچیده برد",
            "تعمیر تخصصی مدار و سنسورها",
            "تست کامل دستگاه پس از تعمیر",
          ],
          icon: "wrench",
          image: "mostafa",
        },
        {
          name: "مهیار محمدی",
          role: "متخصص مکانیک لباسشویی",
          specialty: "موتور، بلبرینگ و تخلیه",
          experience: "۸ سال تجربه",
          features: [
            "رفع لرزش و صدای غیرعادی",
            "تعمیر موتور و تعویض بلبرینگ",
            "ضمانت کیفیت قطعه و اجرت",
          ],
          icon: "washing",
          image: "mahyar",
        },
      ],
    },
    brands: {
      title: "تعمیر تخصصی همه برندها",
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
        "ARÇELİK",
      ],
    },
    testimonials: {
      eyebrow: "نظرات مشتریان",
      title: "مشتریان درباره ما چه می‌گویند؟",
      subtitle: "اعتماد شما، بزرگ‌ترین سرمایه ماست",
      items: [
        {
          name: "علی رضایی",
          role: "مشتری",
          text: "تکنسین خیلی سریع اعزام شد و یخچال‌مان را همان روز تعمیر کرد. واقعاً حرفه‌ای و منصف بودند.",
        },
        {
          name: "الهام کریمی",
          role: "مشتری",
          text: "از قطعات اصلی استفاده کردند و ضمانت‌نامه هم دادند. بعد از تعمیر کاملاً خیال‌مان راحت شد.",
        },
        {
          name: "مهدی امینی",
          role: "مشتری",
          text: "ماشین لباسشویی ما مشکل برد داشت. دقیق عیب‌یابی و همان‌جا تعمیر شد؛ قیمت هم منصفانه بود.",
        },
      ],
    },
    faq: {
      eyebrow: "سؤالات متداول",
      title: "پاسخ سؤالات شما",
      subtitle: "هر آنچه باید پیش از درخواست تعمیر بدانید",
      items: [
        {
          question: "آیا تعمیر در محل انجام می‌شود؟",
          answer:
            "بله، تکنسین‌های فیکسنس با تجهیزات کامل به محل شما اعزام می‌شوند و تعمیر در همان‌جا انجام می‌شود؛ مگر اینکه دستگاه نیاز به انتقال به کارگاه داشته باشد.",
        },
        {
          question: "قطعات استفاده‌شده اصلی هستند؟",
          answer:
            "بله، همه قطعات استفاده‌شده اصلی هستند و همراه با ضمانت‌نامه کتبی ارائه می‌شوند تا از اصالت و کیفیت آن‌ها مطمئن باشید.",
        },
        {
          question: "اعزام تکنسین چقدر زمان می‌برد؟",
          answer:
            "درخواست‌ها معمولاً در سریع‌ترین زمان ممکن و اغلب طی ۲ تا ۳ ساعت کاری پاسخ داده می‌شوند. زمان دقیق پس از ثبت درخواست هماهنگ خواهد شد.",
        },
      ],
    },
    contact: {
      eyebrow: "تماس با ما",
      title: "همین حالا درخواست خود را ثبت کنید",
      subtitle: "کارشناسان ما در کوتاه‌ترین زمان با شما تماس می‌گیرند",
      ctaTitle: "دستگاه شما خراب شده است؟",
      ctaDescription:
        "همین حالا تماس بگیرید و تعمیر دستگاه را به متخصصان بسپارید.",
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
        locationLabel: "محدوده فعالیت",
        locationValue: "تهران، سراسر شهر",
      },
    },
    footer: {
      description:
        "فیکسنس؛ مرکز تخصصی تعمیر لوازم خانگی با تکنسین‌های مجرب و قطعات اصلی.",
      quickLinks: "دسترسی سریع",
      contactInfo: "اطلاعات تماس",
      followUs: "ما را دنبال کنید",
      copyright: "© ۲۰۲۶ فیکسنس",
      rights: "تمامی حقوق محفوظ است.",
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
        { id: "experts", label: "Experts" },
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
      title: "Specialized home appliance repair",
      subtitle:
        "From diagnosis to final testing, every repair uses specialist tools and a written warranty.",
      items: [
        {
          icon: "refrigerator",
          title: "Refrigerator & Freezer Repair",
          description:
            "Cooling, compressor, board and refrigerant-leak repair for all major refrigerator brands",
          features: [
            "On-site diagnostics",
            "Compressor & board repair",
            "Gas service & refrigerant charge",
          ],
        },
        {
          icon: "washing",
          title: "Washing Machine Repair",
          description:
            "Specialized repair of motors, boards, pumps and water systems for all washers",
          features: [
            "Motor & bearing repair",
            "Board & program fixes",
            "Water inlet & drain diagnostics",
          ],
        },
        {
          icon: "wrench",
          title: "Genuine Parts & Warranty",
          description:
            "Original parts supplied with a written warranty for dependable repairs",
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
    experts: {
      eyebrow: "Our Specialists",
      title: "Technicians who know your appliance",
      subtitle:
        "Every request is matched with the specialist best suited to diagnose and repair it.",
      items: [
        {
          name: "Ali Mohammadi",
          role: "Refrigerator Repair Lead",
          specialty: "Cooling systems & compressors",
          experience: "12 years of experience",
          features: [
            "Leak and cooling-loss diagnosis",
            "Compressor and main-board repair",
            "Fast dispatch for urgent failures",
          ],
          icon: "refrigerator",
          image: "ali",
        },
        {
          name: "Mostafa Ghaeil",
          role: "Appliance Electrical Specialist",
          specialty: "Washer control boards",
          experience: "10 years of experience",
          features: [
            "Complex board-error diagnosis",
            "Circuit and sensor repair",
            "Full post-repair device testing",
          ],
          icon: "wrench",
          image: "mostafa",
        },
        {
          name: "Mahyar Mohammadi",
          role: "Washing Machine Mechanic",
          specialty: "Motors, bearings & drainage",
          experience: "8 years of experience",
          features: [
            "Vibration and noise correction",
            "Motor and bearing replacement",
            "Part and labor quality warranty",
          ],
          icon: "washing",
          image: "mahyar",
        },
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
        "ARÇELİK",
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
