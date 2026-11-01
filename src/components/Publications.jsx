import { references, resources } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ResponsiveImage from "./ResponsiveImage";
import { SectionHeading } from "./SectionHeading";

function ResourceCard({ item }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="relative border-b border-forest-900/10 bg-forest-50">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-forest-800 shadow-sm">
          PDF · {item.type}
        </span>
        <ResponsiveImage
          src={item.preview.src}
          srcSet={item.preview.srcSet}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          alt={item.preview.alt}
          width="900"
          height="1231"
          className="[&_img]:aspect-[4/3] [&_img]:object-cover [&_img]:object-top sm:[&_img]:aspect-[4/5]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-600/20 bg-emerald-50 px-2 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-[0.06em] text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Available
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={item.file} download className="btn-primary !min-h-[2.5rem] !px-3.5 !py-2 !text-xs">
            <Icon name="Download" className="h-3.5 w-3.5" />
            Download
          </a>
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !min-h-[2.5rem] !px-3.5 !py-2 !text-xs"
          >
            <Icon name="ExternalLink" className="h-3.5 w-3.5" />
            View
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="section-pad border-t border-forest-900/10 bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="09 · Publications & resources"
            title="Documents, references and progress"
            intro="Only documents that are actually available are listed. The abstract and poster were submitted to the Renewable Energy Research Poster Challenge 2026."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <ResourceCard item={item} />
            </Reveal>
          ))}

          <Reveal delay={120}>
            <article className="flex h-full flex-col rounded-2xl border border-dashed border-forest-900/20 bg-soft p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-muted ring-1 ring-forest-900/10">
                  <Icon name="Presentation" className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.06em] text-slate-600">
                  Not available
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">Research presentation</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                A presentation will be added only after it has been delivered and approved for publication.
                No slides are currently available.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <Icon name="Clock" className="h-4 w-4" />
                Planned for a future seminar or conference
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-10" id="progress">
          <div className="rounded-3xl border border-forest-900/10 bg-forest-50/70 p-5 sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <div className="eyebrow">Research progress</div>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">Where the work stands</h3>
              </div>
              <a href="#data" className="text-sm font-semibold text-forest-700 hover:text-forest-900">
                View timeline →
              </a>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-600/20 bg-white p-4">
                <div className="flex items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-emerald-700">
                  <Icon name="CheckCircle2" className="h-3.5 w-3.5" />
                  Complete
                </div>
                <p className="mt-2 text-sm font-semibold text-ink">Abstract & poster submission</p>
                <p className="mt-1 text-xs text-muted">Renewable Energy Research Poster Challenge 2026.</p>
              </div>
              <div className="rounded-2xl border border-amber-500/20 bg-white p-4">
                <div className="flex items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-amber-700">
                  <Icon name="CircleDot" className="h-3.5 w-3.5" />
                  Proposed
                </div>
                <p className="mt-2 text-sm font-semibold text-ink">Experimental programme</p>
                <p className="mt-1 text-xs text-muted">Feedstock, recovery, conversion, fuel testing and engine work.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-600">
                  <Icon name="Clock" className="h-3.5 w-3.5" />
                  Not available
                </div>
                <p className="mt-2 text-sm font-semibold text-ink">Experimental results</p>
                <p className="mt-1 text-xs text-muted">No measurements, performance values or emissions data are published.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60} className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="eyebrow">Relevant publications</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">Selected background literature</h3>
              <p className="mt-1 text-sm text-muted">Peer-reviewed sources informing lignin pyrolysis and bio-oil assessment.</p>
            </div>
            <span className="rounded-full border border-forest-900/10 bg-white px-3 py-1.5 text-xs font-medium text-muted">
              {references.length} references
            </span>
          </div>

          <ol className="mt-5 divide-y divide-forest-900/[0.07] overflow-hidden rounded-2xl border border-forest-900/10 bg-white">
            {references.map((reference, index) => (
              <li key={reference.doi} className="flex gap-4 p-4 sm:p-5">
                <span className="font-display text-xs font-bold text-forest-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-sm leading-relaxed text-ink [overflow-wrap:anywhere]">
                    {reference.authors} ({reference.year}). “{reference.title}”{" "}
                    <em className="text-muted">{reference.journal}</em>, {reference.pages}.
                  </p>
                  <a
                    href={reference.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 hover:text-forest-900"
                  >
                    DOI
                    <Icon name="ExternalLink" className="h-3 w-3" />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted">
          <Icon name="Info" className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />
          Downloadable documents: 2 available (abstract and poster). Additional resources will be published
          only when finalised and approved.
        </p>
      </div>
    </section>
  );
}
