import { overview, research } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ResponsiveImage from "./ResponsiveImage";
import { SectionHeading } from "./SectionHeading";

export default function ResearchOverview() {
  return (
    <section id="research" className="section-pad border-t border-forest-900/10 bg-white">
      <div className="container-x">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="01 · Research overview"
              title="A focused question in biomass-to-fuel research"
              intro="Lignin is abundant, aromatic and structurally complex. This programme asks whether lignin recovered from a locally available biomass source can be converted into a product worth evaluating as a diesel bio-additive — and what evidence is needed before any claim can be made."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-3xl border border-forest-900/10 bg-forest-800 p-6 text-white shadow-lift sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-lime-400/20" />
              <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-lime-400/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-lime-300">
                  <Icon name="Target" className="h-4 w-4" />
                  Research objective
                </div>
                <p className="mt-4 font-display text-lg font-semibold leading-relaxed text-white sm:text-xl">
                  Recover lignin from Seemai Karuvelam, investigate controlled conversion into bio-additive
                  products, and evaluate their physicochemical properties and suitability in diesel blends at
                  planned dosage levels.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-forest-100/70">
                  Suitability is treated as an open question. Fuel properties, blend stability and engine
                  behaviour will be assessed before any benefit is inferred.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-[0.6875rem] font-medium text-forest-100/80">
                  <span className="rounded-full border border-white/15 px-2.5 py-1">Feedstock: Prosopis juliflora</span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1">Conversion: pyrolysis</span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1">Evaluation: CI engine</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {overview.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <article className="card h-full p-5 transition-shadow hover:shadow-lift sm:p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-50 text-forest-700 ring-1 ring-forest-900/5">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={250} className="sm:col-span-2 lg:col-span-1">
            <figure className="relative h-full min-h-[15rem] overflow-hidden rounded-2xl border border-forest-900/10 bg-forest-900">
              <ResponsiveImage
                src="/assets/biomass-feedstock-1000.webp"
                srcSet="/assets/biomass-feedstock-600.webp 600w, /assets/biomass-feedstock-1000.webp 1000w, /assets/biomass-feedstock-1600.webp 1600w"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                alt="Illustrative biomass feedstock"
                width="1600"
                height="569"
                className="h-full [&>div]:h-full [&_img]:min-h-[15rem]"
                imgClassName="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/90 to-transparent p-4 pt-10 text-xs leading-relaxed text-white/85">
                <span className="font-semibold text-white">Feedstock focus.</span> Illustrative image; a field
                photograph of the selected Prosopis juliflora stand will replace this when available.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-sky-600/15 bg-sky-50/70 p-4 text-sm leading-relaxed text-sky-950">
          <Icon name="Info" className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
          <p>
            Research is in progress. No experimental values, performance improvements or emission reductions
            are claimed. Quantitative findings will be added only when measurements and analysis are available.
          </p>
        </div>

        <p className="mt-6 text-xs text-muted">
          Institutional affiliation: {research.affiliation}, {research.location}.
        </p>
      </div>
    </section>
  );
}
