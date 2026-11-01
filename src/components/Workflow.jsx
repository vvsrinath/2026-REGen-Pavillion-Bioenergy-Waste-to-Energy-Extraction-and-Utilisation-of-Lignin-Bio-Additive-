import { workflow } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Workflow() {
  return (
    <section id="workflow" className="section-pad border-t border-forest-900/10 bg-soft">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="02 · Research workflow"
            title="From biomass to engine evaluation"
            intro="Eight connected stages define the proposed research pathway. The sequence is deliberately gated: engine testing follows fuel-property and blend-suitability checks, not the other way around."
          />
        </Reveal>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step, index) => (
            <Reveal key={step.step} as="li" delay={index * 40} className="relative">
              <div className="flex h-full gap-3 sm:block">
                <div className="flex flex-col items-center sm:hidden" aria-hidden="true">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-800 font-display text-xs font-bold text-white">
                    {step.step}
                  </span>
                  {index < workflow.length - 1 && <span className="mt-1 w-px flex-1 bg-forest-200" />}
                </div>

                <article className="card relative h-full flex-1 p-4 sm:p-5">
                  <div className="hidden items-center justify-between sm:flex">
                    <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest-600">
                      Step {step.step}
                    </span>
                    <Icon name={step.icon} className="h-5 w-5 text-forest-500" />
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-50 text-forest-700 sm:hidden">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-[0.95rem] font-semibold leading-snug text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">{step.text}</p>
                </article>

                {index < workflow.length - 1 && (index + 1) % 4 !== 0 && (
                  <Icon
                    name="ChevronRight"
                    className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-soft text-forest-500 lg:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-amber-500/20 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 sm:flex-row sm:items-start">
          <Icon name="CircleAlert" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <p>
            All eight stages are proposed. No experimental stage has been completed, and the 20% figure is a
            planning limit for blend preparation — not a proven optimum or a validated fuel formulation.
          </p>
        </div>
      </div>
    </section>
  );
}
