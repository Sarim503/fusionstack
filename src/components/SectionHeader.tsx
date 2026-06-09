type SectionHeaderProps = {
  label: string;
  title: string;
  action?: React.ReactNode;
};

export function SectionHeader({ label, title, action }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          {label}
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}
