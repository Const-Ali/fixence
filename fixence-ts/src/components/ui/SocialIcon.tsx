import type { SVGProps } from "react";

export type SocialBrand = "instagram" | "telegram" | "whatsapp";

interface SocialIconProps extends SVGProps<SVGSVGElement> {
  brand: SocialBrand;
}

export function SocialIcon({ brand, ...props }: SocialIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  if (brand === "instagram") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (brand === "telegram") {
    return (
      <svg {...commonProps}>
        <path d="m21.5 3.5-3.1 16.1c-.2 1.1-.8 1.4-1.7.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-7.9c.4-.3-.1-.5-.6-.2L6.3 13.5l-4.6-1.5c-1-.3-1-1 .2-1.5L19.8 3c.9-.3 1.8.2 1.7.5Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M20.1 3.9A9.9 9.9 0 0 0 4.6 16.1L3.2 21l5-1.3A9.9 9.9 0 1 0 20.1 3.9Z" />
      <path d="M8.3 7.7c.2-.3.4-.3.7-.3h.5c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4-.1.6l-.6.8c-.1.1-.1.3 0 .5.4.7 1.1 1.4 1.8 1.8.2.1.4.1.5 0l.8-.6c.2-.2.4-.2.6-.1l1.9.8c.3.1.4.3.4.5v.5c0 .3 0 .5-.3.7-.4.3-1 .5-1.5.4-1.3-.2-2.6-.9-3.7-1.9-1.1-1-1.8-2.3-2-3.7-.1-.5.1-1.1.4-1.5Z" />
    </svg>
  );
}
