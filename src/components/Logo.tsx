export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-7 w-7 items-center justify-center">
        <div className="absolute h-5 w-5 rotate-45 rounded-sm border border-gold/60 bg-gold/10" />
        <div className="absolute h-3 w-3 rotate-45 rounded-sm bg-gold" />
      </div>
      <span className="text-lg font-semibold tracking-tight text-white">
        fusionstack
      </span>
    </div>
  );
}
