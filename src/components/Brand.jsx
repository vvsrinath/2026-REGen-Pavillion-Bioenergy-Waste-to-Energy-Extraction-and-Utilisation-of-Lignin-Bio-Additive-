import { Link } from "react-router-dom";

export default function Brand({ light = false, compact = false }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2"
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-forest-800 text-white shadow-sm ring-1 ring-forest-900/10">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path
            d="M16 27c0-7.2 3.2-12.4 9-15.6-1.1 7.5-4.1 12.3-9 15.6Z"
            fill="#A7D129"
          />
          <path
            d="M16 27C11.6 23.9 8.4 19.2 7 12c5.4 2.9 8.4 7.6 9 15Z"
            fill="#C3E35A"
            opacity=".8"
          />
          <path d="M16 27V9" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="16" cy="7" r="2" fill="white" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[0.95rem] font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          REGen Pavilion
        </span>
        {!compact && (
          <span
            className={`block text-[0.625rem] font-semibold uppercase tracking-[0.16em] ${
              light ? "text-forest-200/80" : "text-muted"
            }`}
          >
            Lignin Bio-Additive Research
          </span>
        )}
      </span>
    </Link>
  );
}
