import { Camera, Globe, Link2 } from "lucide-react";
import { Logo } from "./Logo";

const socialLinks = [
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "Website" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />

        <p className="text-center text-xs text-muted">
          &copy; 2024 fusionstack. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-gold/40 hover:text-gold"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
