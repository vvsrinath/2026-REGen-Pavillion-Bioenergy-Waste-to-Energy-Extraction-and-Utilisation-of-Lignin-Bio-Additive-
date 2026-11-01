import { impact } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const nonClaims = [
  "No emissions reduction is claimed.",
  "No engine-performance improvement is claimed.",
  "No commercial, market or policy benefit is claimed.",
];

export default function Impact() {
  return (
    <section id="impact" className="section-pad border-t border-forest-900/10 bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="05 · Research impact"
            title="Waste-to-value, to be evaluated"
            intro="Biomass valorisation could support a more circular use of plant residues. This project treats impact as a hypothesis to test, not a headline to assert."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {impact.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article
                className={`card group relative h-full overflow-hidden p-5 transition-shadow hover:shadow-lift sm:p-7 ${
                  index === 1 ? "border-forest-800/20" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ${
                      index === 1
                        ? "bg-forest-800 text-lime-400 ring-forest-900/10"
                        : index === 2
                          ? "bg-amber-50 text-amber-700 ring-amber-500/15"
                          : "bg-forest-50 text-forest-700 ring-forest-900/5"
                    }`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    Pathway {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{item.text}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[0.6875rem] font-medium text-forest-700">
                  <Icon name="CircleDot" className="h-3.5 w-3.5" />
                  Conditional / to be evaluated
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-6">
          <div className="rounded-3xl border border-forest-900/10 bg-forest-950 p-6 text-white sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-lime-300">
                  <Icon name="ShieldCheck" className="h-4 w-4" />
                  Evidence boundary
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                  What this project does not claim
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                  Keeping claims narrow is part of the research method. Each statement below would require
                  measured evidence and appropriate peer review.
                </p>
              </div>
              <ul className="grid gap-2.5">
                {nonClaims.map((claim) => (
                  <li
                    key={claim}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-forest-100/85"
                  >
                    <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                    {claim}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
