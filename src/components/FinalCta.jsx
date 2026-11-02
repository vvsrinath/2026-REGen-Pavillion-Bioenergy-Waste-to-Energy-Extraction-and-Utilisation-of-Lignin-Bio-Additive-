import Icon from "./Icon";
import Reveal from "./Reveal";
import { research } from "../data/content";

export default function FinalCta() {
  const requestBrief = () => {
    window.dispatchEvent(new CustomEvent("regen:prefill", { detail: "Research brief request" }));
    document.getElementById("collaborate")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="contact" className="section-pad border-t border-forest-900/10 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-forest-800 px-5 py-8 text-white shadow-lift sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(167,209,41,0.18),transparent_40%),linear-gradient(135deg,rgba(8,47,36,0.2),rgba(8,47,36,0.7))]" />
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-lime-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  10 · Contact
                </div>
                <h2 className="display-2 mt-4 text-white">
                  Interested in Supporting or Collaborating on This Research?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-forest-100/75 sm:text-base">
                  We welcome conversations with universities, analytical laboratories, fuel and engine testing
                  facilities, industrial R&D teams and research funders.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="#collaborate" className="btn-lime w-full sm:w-auto">
                    Discuss Research Collaboration
                    <Icon name="ArrowUpRight" className="h-4 w-4" />
                  </a>
                  <button type="button" onClick={requestBrief} className="btn-ghost-light w-full sm:w-auto">
                    Request Research Brief
                    <Icon name="FileDown" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-forest-200/70">
                  Research office
                </h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Icon name="Landmark" className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                    <span className="text-forest-100/85">
                      {research.affiliation}
                      <br />
                      {research.location}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Mail" className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                    <span className="text-forest-100/85">
                      <a
                        href={`mailto:${research.contactEmail}`}
                        className="break-all text-lime-300 underline decoration-lime-400/40 underline-offset-2 hover:decoration-lime-300"
                      >
                        {research.contactEmail}
                      </a>
                      <br />
                      <a href="#collaborate" className="text-lime-300 underline-offset-2 hover:underline">
                        Or use the collaboration form
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="ShieldCheck" className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                    <span className="text-forest-100/85">
                      The form opens a pre-formatted email draft so your enquiry reaches the research team
                      directly.
                    </span>
                  </li>
                </ul>
                <div className="mt-5 border-t border-white/10 pt-4 text-[0.6875rem] leading-relaxed text-forest-100/60">
                  Research in progress. No experiments, funding, partnerships or commercial outcomes are
                  claimed on this website.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
