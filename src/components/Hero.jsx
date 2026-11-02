import { Link } from "react-router-dom";
import Icon from "./Icon";
import { ownership, research } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="border-b border-forest-900/10 bg-white">
      <div className="container-x py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl">
            <div className="eyebrow">Bioenergy · Fuel research · KARE</div>
            <h1 className="display-2 mt-5 max-w-2xl text-ink">
              {research.title}
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted sm:text-lg">
              Extraction and utilisation of lignin from <em>Prosopis juliflora</em> (Seemai Karuvelam) for
              fuel-property assessment and a carefully gated compression-ignition engine study.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border-l-2 border-amber-500 pl-3 text-sm font-medium text-amber-800">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Proposed experimental programme · No results reported
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#research" className="btn-primary w-full sm:w-auto">
                Explore the research
                <Icon name="ArrowRight" className="h-4 w-4" />
              </a>
              <a href="#collaborate" className="btn-outline w-full sm:w-auto">
                Discuss collaboration
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </a>
              <a
                href="/assets/regen-pavillion-poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[2.75rem] items-center justify-center gap-2 px-2 text-sm font-semibold text-forest-800 underline decoration-forest-300 underline-offset-4 hover:decoration-forest-800"
              >
                View project poster
                <Icon name="FileText" className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-forest-900/10 pt-5 sm:grid-cols-3">
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">Feedstock</dt>
                <dd className="mt-1 text-sm font-medium text-ink"><em>Prosopis juliflora</em></dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">Research stage</dt>
                <dd className="mt-1 text-sm font-medium text-ink">Planning & validation</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">Institution</dt>
                <dd className="mt-1 text-sm font-medium text-ink">KARE · Tamil Nadu, India</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-2xl border border-forest-800/15 bg-forest-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-forest-800 text-lime-300">
                  <Icon name="Copyright" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-forest-700">
                    Research ownership
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-forest-900">
                    Owned and managed solely by{" "}
                    <strong className="font-semibold">{ownership.ownerName}</strong>. Supporting contributors
                    and the faculty mentor hold no IP or copyright ownership.
                  </p>
                  <Link
                    to="/ownership"
                    className="mt-1 inline-flex min-h-[2.5rem] items-center gap-1.5 text-xs font-semibold text-forest-700 underline decoration-forest-300 underline-offset-2 hover:decoration-forest-700"
                  >
                    Read the ownership statement
                    <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <figure className="min-w-0">
            <div className="overflow-hidden rounded-md bg-forest-50">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/hero-700.webp 700w, /assets/hero-1000.webp 1000w, /assets/hero-1400.webp 1400w, /assets/hero-1800.webp 1800w, /assets/hero-2400.webp 2400w"
                  sizes="(max-width: 1024px) 92vw, 52vw"
                />
                <img
                  src="/assets/hero-1400.webp"
                  alt="Illustrative research scene showing biomass, laboratory vessels and fuel samples; no project experiment is represented"
                  width="1774"
                  height="887"
                  fetchpriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10]"
                />
              </picture>
            </div>
            <figcaption className="mt-3 flex items-start justify-between gap-4 border-t border-forest-900/10 pt-3 text-xs leading-relaxed text-muted">
              <span>Illustrative research visual. Experimental work has not been completed.</span>
              <span className="shrink-0 font-medium text-forest-800">REGen Pavilion · 2026</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
