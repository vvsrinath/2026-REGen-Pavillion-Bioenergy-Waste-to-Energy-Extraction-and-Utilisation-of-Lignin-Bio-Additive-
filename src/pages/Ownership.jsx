import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import usePageMeta from "../hooks/usePageMeta";
import { ownership, research } from "../data/content";

const points = [
  {
    icon: "Copyright",
    title: "Intellectual property",
    body: `${ownership.ownerName} is the sole owner and manager of the intellectual property associated with the REGen Pavilion research programme, including the research concept, proposed methods, research direction and resulting research outputs.`,
  },
  {
    icon: "FileText",
    title: "Copyright",
    body: `Copyright in the original written content of this website, the research abstract, the research poster and other project documents is held by ${ownership.ownerName}, unless a third-party source is credited.`,
  },
  {
    icon: "Users",
    title: "Supporting contributors",
    body: ownership.contributors,
  },
  {
    icon: "ShieldCheck",
    title: "Permitted use",
    body: ownership.permission,
  },
];

export default function Ownership() {
  usePageMeta(
    "Ownership, IP & copyright — REGen Pavilion",
    "Ownership, intellectual property and copyright statement for the REGen Pavilion lignin bio-additive research programme.",
  );

  return (
    <div className="bg-white">
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-medium text-forest-700 hover:text-forest-900"
          >
            <Icon name="ArrowRight" className="h-4 w-4 rotate-180" />
            Back to REGen Pavilion
          </Link>

          <div className="eyebrow mt-8">Ownership & copyright</div>
          <h1 className="display-2 mt-4">Research ownership and intellectual property</h1>
          <p className="lead mt-4">
            This statement sets out who owns and manages the REGen Pavilion research, its written outputs and
            the content of this website.
          </p>

          <div className="mt-8 rounded-3xl border border-forest-800/20 bg-forest-900 p-5 text-forest-50 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lime-400/15 text-lime-300">
                <Icon name="Scale" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-lime-300">
                  Sole owner and manager
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                  {ownership.ownerName}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/80">{ownership.summary}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {points.map((point, index) => (
              <section key={point.title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700 ring-1 ring-forest-900/10">
                  <Icon name={point.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    <span className="mr-2 text-forest-600">{String(index + 1).padStart(2, "0")}</span>
                    {point.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-500/25 bg-amber-50/70 p-5">
            <div className="flex items-start gap-3">
              <Icon name="Info" className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <div>
                <h2 className="font-display text-base font-semibold text-amber-950">Scope and caveat</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-amber-900/80">{ownership.caveat}</p>
                <p className="mt-3 text-sm leading-relaxed text-amber-900/80">
                  Third-party references remain the property of their respective authors and publishers and are
                  linked to their DOI records. Open-source fonts, icons and software retain their own licences.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-forest-900/10 bg-forest-50 p-5">
            <h2 className="font-display text-base font-semibold text-ink">Permission and ownership enquiries</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Requests to reproduce content, discuss collaboration or clarify ownership should be made through
              the collaboration enquiry form. Please describe the material and intended use.
            </p>
            <Link to="/#collaborate" className="btn-primary mt-4">
              Open enquiry form
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted">
            {research.shortTitle} · {research.affiliation}. This page records the project’s position on
            ownership and does not constitute legal advice.
          </p>
        </div>
      </div>
    </div>
  );
}
