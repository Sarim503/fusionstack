import { ContactIcons } from "./ContactIcons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />

        <p className="text-center text-xs text-muted">
          &copy; 2024 fusionstack. All rights reserved.
        </p>

        <ContactIcons variant="muted" />
      </div>
    </footer>
  );
}
