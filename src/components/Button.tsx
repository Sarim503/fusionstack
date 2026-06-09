import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
};

export function Button({
  href = "#contact",
  variant = "solid",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300";

  const variants = {
    solid:
      "gold-gradient text-black shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02]",
    outline:
      "border border-gold/50 bg-transparent text-gold hover:border-gold hover:bg-gold/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
