import { Link } from "react-router-dom";

export default function Brand({ light = false, compact = false }) {
  return (
    <Link
      to="/"
      className="group inline-flex min-h-[2.75rem] items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2"
    >
      <span className="leading-tight">
        <span className={`block font-display text-[1.05rem] font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
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
