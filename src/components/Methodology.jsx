import { useId, useState } from "react";
import { methodology } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ResponsiveImage from "./ResponsiveImage";
import { SectionHeading } from "./SectionHeading";

export default function Methodology() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section id="methodology" className="section-pad border-t border-forest-900/10 bg-white">
      <div className="container-x">
        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="03 · Methodology"
                title="Proposed stages, with evidence gates"
                intro="Each stage is designed to produce a record that the next stage can rely on. All seven areas are proposed; none has been completed at the time of publication."
              />
            </Reveal>

            <Reveal delay={80} className="mt-7">
              <figure className="overflow-hidden rounded-3xl border border-forest-900/10 bg-forest-50 shadow-soft">
                <ResponsiveImage
                  src="/assets/methodology-portrait-700.webp"
                  srcSet="/assets/methodology-portrait-400.webp 400w, /assets/methodology-portrait-700.webp 700w, /assets/methodology-portrait-1000.webp 1000w"
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  alt="Illustrative laboratory methodology visual"
                  width="1000"
                  height="1333"
                  className="[&_img]:aspect-[4/3] sm:[&_img]:aspect-[4/5]"
                  imgClassName="object-cover object-center"
                />
                <figcaption className="flex items-start gap-3 border-t border-forest-900/10 bg-white p-4 text-xs leading-relaxed text-muted">
                  <Icon name="Info" className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />
                  Illustrative methodology visual. Protocols, instruments and analytical methods will be
                  finalised with the faculty mentor and documented before experimental work begins.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={120} className="mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-amber-500/20 bg-amber-50/70 p-4">
                  <div className="font-display text-2xl font-bold text-amber-700">07</div>
                  <div className="mt-1 text-xs font-medium text-amber-900">Proposed methodology areas</div>
                </div>
                <div className="rounded-2xl border border-emerald-600/20 bg-emerald-50 p-4">
                  <div className="font-display text-2xl font-bold text-emerald-700">00</div>
                  <div className="mt-1 text-xs font-medium text-emerald-900">Completed experimental stages</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <div className="space-y-3">
              {methodology.map((item, index) => {
                const isOpen = openIndex === index;
                const buttonId = `${baseId}-button-${index}`;
                const panelId = `${baseId}-panel-${index}`;
                return (
                  <div key={item.title} className="overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-soft">
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-forest-50/50 sm:p-5"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700 ring-1 ring-forest-900/5">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                            <span className="font-display text-[0.95rem] font-semibold text-ink">
                              {item.title}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-50 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-amber-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                              {item.status}
                            </span>
                          </span>
                          <span className="mt-1.5 block text-sm leading-relaxed text-muted">{item.summary}</span>
                        </span>
                        <Icon
                          name="ChevronDown"
                          className={`mt-1 h-4 w-4 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="border-t border-forest-900/10 px-4 pb-4 pt-3.5 sm:px-5"
                    >
                      <ul className="space-y-2.5">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                            <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 rounded-xl bg-forest-50 px-3 py-2 text-[0.6875rem] leading-relaxed text-forest-800">
                        Status: proposed work. No samples, measurements or results are presented for this stage.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
