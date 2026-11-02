import Icon from "./Icon";

const standards = [
  {
    icon: "Gauge",
    title: "Measured, then claimed",
    text: "Fuel properties, blend behaviour and engine indicators are published only after documented measurement.",
  },
  {
    icon: "FileText",
    title: "Evidence stays visible",
    text: "Available abstracts, posters and references are linked directly. Nothing is presented as a result before it exists.",
  },
  {
    icon: "ShieldCheck",
    title: "Limits are stated",
    text: "Planning assumptions, illustrative visuals and unmeasured values are labelled so they cannot be mistaken for findings.",
  },
];

export default function ClaimStandard() {
  return (
    <section aria-labelledby="claim-standard" className="border-t border-forest-900/10 bg-forest-950">
      <div className="container-x py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <div className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Evidence standard
            </div>
            <p
              id="claim-standard"
              className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Every number on this site will be measured before it is claimed.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-forest-100/70 sm:text-base">
              The project is at the planning and validation stage. This page is a research record, not a
              results announcement — and it is built to stay that way as evidence arrives.
            </p>
          </div>

          <ul className="grid gap-2.5">
            {standards.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-lime-400/10 text-lime-300">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-forest-100/65">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
