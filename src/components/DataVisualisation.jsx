import { blends, kpis, milestones, properties } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading, StatusBadge } from "./SectionHeading";

function GhostBar() {
  return (
    <div className="relative h-3 overflow-hidden rounded-full border border-dashed border-forest-900/20 bg-[repeating-linear-gradient(135deg,rgba(11,61,46,0.055)_0,rgba(11,61,46,0.055)_6px,transparent_6px,transparent_12px)]">
      <span className="absolute inset-y-0 left-0 w-0 bg-lime-500" />
    </div>
  );
}

function FuelPropertyChart() {
  const chartItems = properties.slice(0, 6);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Fuel-property comparison</h3>
          <p className="mt-1 text-sm text-muted">Chart frame for the planned diesel and lignin-blend comparison.</p>
        </div>
        <span className="rounded-full border border-amber-500/25 bg-amber-50 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-amber-800">
          No values plotted
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.6875rem] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-full bg-forest-800" /> Diesel reference
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-full bg-lime-500" /> Lignin-derived blend
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-full border border-dashed border-forest-900/25" /> Awaiting measurement
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {chartItems.map((item) => (
          <div key={item.property} className="group relative">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <span className="text-sm font-medium text-ink">{item.property}</span>
              <span className="text-[0.6875rem] text-muted">{item.unit}</span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="grid grid-cols-[4.4rem_1fr] items-center gap-2">
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-forest-700">
                  Diesel
                </span>
                <GhostBar />
              </div>
              <div className="grid grid-cols-[4.4rem_1fr] items-center gap-2">
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-lime-700">
                  Blend
                </span>
                <GhostBar />
              </div>
            </div>
            <span className="pointer-events-none absolute right-0 top-0 z-10 hidden -translate-y-1 rounded-lg bg-forest-950 px-2.5 py-1.5 text-[0.625rem] font-medium text-white shadow-lg group-hover:block group-focus-within:block">
              To be measured · {item.method}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-xl bg-forest-50 px-3.5 py-2.5 text-[0.6875rem] leading-relaxed text-forest-800">
        Illustrative chart layout only. No diesel or blend values are plotted. Bars will be populated only
        from documented measurements.
      </p>
    </div>
  );
}

function KpiDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Research status</h3>
          <p className="mt-1 text-sm text-muted">Planning indicators, not performance results.</p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-50 text-forest-700">
          <Icon name="Layers" className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {kpis.map((item, index) => (
          <div
            key={item.label}
            className={`rounded-2xl border p-4 ${
              index === 3 ? "border-amber-500/20 bg-amber-50/70" : "border-forest-900/10 bg-forest-50/60"
            }`}
          >
            <dl className="flex flex-col">
              <dt className="order-2 mt-2 text-xs font-semibold text-ink">{item.label}</dt>
              <dd
                className={`order-1 font-display text-3xl font-bold leading-none ${
                  index === 3 ? "text-amber-700" : "text-forest-800"
                }`}
              >
                {item.value}
              </dd>
            </dl>
            <p className="mt-1 text-[0.625rem] leading-relaxed text-muted">{item.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-start gap-2 rounded-xl border border-forest-900/10 bg-white px-3 py-2.5 text-[0.6875rem] leading-relaxed text-muted">
        <Icon name="ShieldCheck" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-600" />
        Zero experimental results are asserted. The dashboard reports the scope of proposed work.
      </div>
    </div>
  );
}

function MeasurementDashboard() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Experimental measurement dashboard</h3>
          <p className="mt-1 text-sm text-muted">
            Planned fuel-property measurements across the proposed blend set.
          </p>
        </div>
        <span className="text-[0.6875rem] font-medium text-muted">0 of {blends.length} planned blends measured</span>
      </div>

      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <caption className="sr-only">Planned fuel-property measurements</caption>
          <thead>
            <tr className="border-b border-forest-900/10 text-[0.625rem] uppercase tracking-[0.1em] text-muted">
              <th scope="col" className="py-2.5 pr-4 font-semibold">Property</th>
              <th scope="col" className="py-2.5 pr-4 font-semibold">Method / standard</th>
              <th scope="col" className="py-2.5 pr-4 font-semibold">Unit</th>
              <th scope="col" className="py-2.5 pr-4 font-semibold">Planned tests</th>
              <th scope="col" className="py-2.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-forest-900/[0.07]">
            {properties.map((item) => (
              <tr key={item.property} className="align-middle">
                <th scope="row" className="py-3 pr-4 font-medium text-ink">{item.property}</th>
                <td className="py-3 pr-4 text-muted">{item.method}</td>
                <td className="py-3 pr-4 text-muted">{item.unit}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-1" aria-label="0 of 5 planned tests measured">
                    {blends.map((blend) => (
                      <span
                        key={blend.name}
                        title={`${blend.name}: to be measured`}
                        className="h-2.5 w-2.5 rounded-full border border-forest-900/20 bg-white"
                      />
                    ))}
                    <span className="ml-1.5 text-[0.6875rem] text-muted">0 / {blends.length}</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-50 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.06em] text-amber-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    To be measured
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-4 space-y-2 md:hidden">
        {properties.map((item) => (
          <li key={item.property} className="rounded-xl border border-forest-900/10 bg-white p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-ink">{item.property}</p>
                <p className="mt-0.5 text-[0.6875rem] text-muted">{item.method} · {item.unit}</p>
              </div>
              <span className="shrink-0 rounded-full border border-amber-500/25 bg-amber-50 px-2 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-[0.06em] text-amber-800">
                To measure
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1">
              {blends.map((blend) => (
                <span key={blend.name} className="h-2 w-2 rounded-full border border-forest-900/20 bg-white" />
              ))}
              <span className="ml-1.5 text-[0.625rem] text-muted">0 / {blends.length} measured</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlendChart() {
  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Blend composition — planned matrix</h3>
          <p className="mt-1 text-sm text-muted">Volume fractions for the proposed blend set.</p>
        </div>
        <span className="shrink-0 rounded-full border border-sky-600/20 bg-sky-50 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-sky-800">
          Planned
        </span>
      </div>

      <div className="mt-5 space-y-3.5">
        {blends.map((blend) => (
          <div key={blend.name}>
            <div className="flex items-baseline justify-between gap-3 text-xs">
              <span className="font-semibold text-ink">{blend.name}</span>
              <span className="text-muted">
                {blend.diesel}% diesel · {blend.additive}% additive
              </span>
            </div>
            <div
              className="mt-1.5 flex h-5 overflow-hidden rounded-md ring-1 ring-inset ring-forest-900/10"
              role="img"
              aria-label={`${blend.name}: ${blend.diesel} percent diesel and ${blend.additive} percent lignin-derived additive, planned`}
            >
              <span
                className="h-full bg-forest-800"
                style={{ width: `${blend.diesel}%` }}
                title={`Diesel ${blend.diesel}%`}
              />
              <span
                className="h-full bg-lime-500"
                style={{ width: `${blend.additive}%` }}
                title={`Lignin-derived additive ${blend.additive}%`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.6875rem] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-sm bg-forest-800" /> Diesel
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-sm bg-lime-500" /> Lignin-derived additive
        </span>
      </div>
      <p className="mt-3 text-[0.6875rem] leading-relaxed text-muted">
        These are planned compositions only. No blend has been prepared, tested or validated; 20% is a
        planning limit, not a demonstrated optimum.
      </p>
    </div>
  );
}

function Timeline() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Research milestone timeline</h3>
          <p className="mt-1 text-sm text-muted">Submitted work and an indicative forward schedule.</p>
        </div>
        <span className="text-[0.6875rem] font-medium text-muted">Indicative — subject to revision</span>
      </div>

      <ol className="relative mt-6 grid gap-4 lg:grid-cols-6 lg:gap-3">
        <span
          className="absolute left-[0.4375rem] top-1 h-[calc(100%-0.5rem)] w-px bg-forest-200 lg:left-0 lg:top-[0.4375rem] lg:h-px lg:w-full"
          aria-hidden="true"
        />
        {milestones.map((item) => (
          <li key={item.title} className="relative pl-7 lg:pl-0 lg:pt-7">
            <span
              className={`absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 bg-white lg:top-0 ${
                item.status === "Complete" ? "border-emerald-600" : "border-forest-300"
              }`}
              aria-hidden="true"
            >
              {item.status === "Complete" && <span className="absolute inset-[2px] rounded-full bg-emerald-600" />}
            </span>
            <div className="rounded-xl border border-forest-900/10 bg-white p-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-forest-600">
                  {item.period}
                </span>
                <StatusBadge status={item.status} className="!px-1.5 !py-0.5 !text-[0.5rem]" />
              </div>
              <h4 className="mt-1.5 text-[0.8125rem] font-semibold leading-snug text-ink">{item.title}</h4>
              <p className="mt-1 text-[0.6875rem] leading-relaxed text-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[0.6875rem] leading-relaxed text-muted">
        Only the abstract and poster submission is marked complete. All later milestones are planned and may
        change with mentor guidance, equipment access and funding.
      </p>
    </div>
  );
}

export default function DataVisualisation() {
  return (
    <section id="data" className="section-pad border-t border-forest-900/10 bg-soft">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="04 · Data & visualisation"
            title="Transparent by design: no results yet"
            intro="The charts below describe the planned measurement programme, not experimental outcomes. Unmeasured values are labelled explicitly, and every chart will remain empty until documented data is available."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card h-full p-5 sm:p-6">
              <FuelPropertyChart />
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-5">
            <div className="card h-full p-5 sm:p-6">
              <KpiDashboard />
            </div>
          </Reveal>

          <Reveal delay={40} className="lg:col-span-7">
            <div className="card h-full p-5 sm:p-6">
              <BlendChart />
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="card h-full p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold text-ink">What will be measured</h3>
              <p className="mt-1 text-sm text-muted">
                Each property is tied to a recognised method and a planned blend set.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  ["Fuel properties", "Density, viscosity, calorific value, flash point, cold flow, water and ash."],
                  ["Product chemistry", "Functional groups and composition using available analytical facilities."],
                  ["Blend behaviour", "Miscibility, phase separation and sediment over the planned blend set."],
                  ["Engine indicators", "Performance, combustion and emissions only after suitability is established."],
                ].map(([title, text], index) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-forest-50 font-display text-[0.6875rem] font-bold text-forest-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{title}</p>
                      <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-muted">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl border border-forest-900/10 bg-forest-50 px-3.5 py-2.5 text-[0.6875rem] leading-relaxed text-forest-800">
                Measurement methods shown are planned references. Final standards will be confirmed with the
                testing laboratory and mentor.
              </p>
            </div>
          </Reveal>

          <Reveal delay={40} className="lg:col-span-12">
            <div className="card p-5 sm:p-6">
              <MeasurementDashboard />
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-12">
            <div className="card p-5 sm:p-6">
              <Timeline />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
