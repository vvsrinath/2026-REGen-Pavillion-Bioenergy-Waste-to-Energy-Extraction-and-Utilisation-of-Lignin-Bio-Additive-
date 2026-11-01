export function Eyebrow({ children, light = false }) {
  return (
    <span className={light ? "eyebrow !text-lime-400" : "eyebrow"}>
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left", light = false, className = "" }) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`display-2 mt-4 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro ? (
        <p className={`mt-4 ${light ? "text-forest-100/80" : "lead"} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function StatusBadge({ status = "Proposed", className = "" }) {
  const styles = {
    Complete: "border-emerald-600/20 bg-emerald-50 text-emerald-800",
    Planned: "border-amber-500/25 bg-amber-50 text-amber-800",
    Proposed: "border-amber-500/25 bg-amber-50 text-amber-800",
    Available: "border-emerald-600/20 bg-emerald-50 text-emerald-800",
    "Not available": "border-slate-300 bg-slate-50 text-slate-600",
  };
  const iconName = status === "Complete" || status === "Available" ? "Check" : "CircleDot";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] ${
        styles[status] || styles.Proposed
      } ${className}`}
    >
      {iconName === "Check" ? <CheckIcon /> : <DotIcon />}
      {status}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6.2 4.8 8.5 9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="3" fill="currentColor" />
    </svg>
  );
}
