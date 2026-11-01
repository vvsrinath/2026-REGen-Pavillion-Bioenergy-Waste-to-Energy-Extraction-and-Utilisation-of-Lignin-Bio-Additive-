import { research } from "../data/content";
import Icon from "./Icon";

const focusSteps = [
  { icon: "Trees", label: "Feedstock", value: "Seemai Karuvelam (Prosopis juliflora)" },
  { icon: "FlaskConical", label: "Recovery", value: "Lignin extraction and characterisation" },
  { icon: "Flame", label: "Conversion", value: "Controlled pyrolysis to liquid products" },
  { icon: "Gauge", label: "Evaluation", value: "Fuel-property and CI-engine assessment" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-forest-950">
      <picture className="absolute inset-0 -z-20">
        <source
          type="image/webp"
          srcSet="/assets/hero-700.webp 700w, /assets/hero-1000.webp 1000w, /assets/hero-1400.webp 1400w, /assets/hero-1800.webp 1800w, /assets/hero-2400.webp 2400w"
          sizes="100vw"
        />
        <img
          src="/assets/hero-1400.webp"
          alt="Seemai Karuvelam biomass and lignin biofuel research"
          width="1774"
          height="887"
          fetchpriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-950/95 via-forest-950/88 to-forest-900/55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(167,209,41,0.14),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-forest-950/85 to-transparent" />

      <div className="container-x relative flex flex-col justify-center py-14 sm:py-20 lg:min-h-[calc(100svh-4.25rem)] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              {research.label}
            </span>

            <h1 className="display-1 mt-6 text-white">
              Turning Lignin into a{" "}
              <span className="text-lime-400">Potential Bio-Additive</span> for Diesel Fuel
            </h1>

            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-forest-100/85 sm:text-lg">
              {research.heroText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#research" className="btn-lime w-full sm:w-auto">
                Explore the Research
                <Icon name="ArrowRight" className="h-4 w-4" />
              </a>
              <a href="#collaborate" className="btn-ghost-light w-full sm:w-auto">
                Collaborate With Us
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-9 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-forest-200/60">
                  Institution
                </dt>
                <dd className="mt-1 font-medium text-white">KARE, Tamil Nadu</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-forest-200/60">
                  Team
                </dt>
                <dd className="mt-1 font-medium text-white">Interdisciplinary</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-forest-200/60">
                  Stage
                </dt>
                <dd className="mt-1 font-medium text-white">Proposed research</dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:pl-2">
            <div className="rounded-3xl border border-white/15 bg-white/[0.075] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-forest-200/70">
                  Research focus
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/25 bg-lime-400/10 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-lime-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  In progress
                </span>
              </div>

              <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                From local biomass to a measured fuel-property question
              </h2>

              <ol className="mt-5 space-y-3">
                {focusSteps.map((step, index) => (
                  <li key={step.label} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-lime-300">
                      <Icon name={step.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-forest-200/60">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span>{step.label}</span>
                      </div>
                      <p className="mt-0.5 text-sm leading-snug text-white">{step.value}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                <div>
                  <div className="font-display text-xl font-bold text-lime-400">08</div>
                  <div className="text-[0.6875rem] leading-tight text-forest-100/65">workflow stages</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-lime-400">05</div>
                  <div className="text-[0.6875rem] leading-tight text-forest-100/65">planned blends</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-lime-400">00</div>
                  <div className="text-[0.6875rem] leading-tight text-forest-100/65">results claimed</div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-forest-950/40 px-4 py-3 text-xs leading-relaxed text-forest-100/70 backdrop-blur">
              <Icon name="Info" className="h-4 w-4 shrink-0 text-lime-400" />
              Planned work only. No experimental performance or emission result is claimed on this site.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
