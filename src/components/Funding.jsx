import { fundingPortals, fundingRoutes } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export default function Funding() {
  return (
    <section id="funding" className="section-pad border-t border-forest-900/10 bg-white">
      <div className="container-x">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="07 · Funding"
              title="Building a Collaborative Research Programme."
              intro="The project is at an early stage. We are mapping credible funding routes and partners rather than claiming secured support."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-3xl border border-amber-500/25 bg-amber-50/70 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
                  <Icon name="CircleAlert" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-amber-950">No funding has been secured</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-amber-900/80">
                    This page lists potential routes and official portals for future proposals. It does not
                    assert an award, a current call, eligibility or an institutional commitment.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-[0.6875rem] font-medium">
                <div className="rounded-xl border border-amber-500/20 bg-white/70 px-3 py-2 text-amber-900">
                  Status
                  <div className="mt-0.5 font-display text-base font-bold">Seeking partners</div>
                </div>
                <div className="rounded-xl border border-amber-500/20 bg-white/70 px-3 py-2 text-amber-900">
                  Verified calls
                  <div className="mt-0.5 font-display text-base font-bold">None listed</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fundingRoutes.map((route, index) => (
            <Reveal key={route.title} delay={index * 40}>
              <article className="card flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-50 text-forest-700 ring-1 ring-forest-900/5">
                    <Icon name={route.icon} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-forest-50 px-2.5 py-1 text-[0.625rem] font-semibold text-forest-700">
                    {route.programme}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[0.95rem] font-semibold text-ink">{route.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{route.text}</p>
                {route.href ? (
                  <a
                    href={route.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-forest-700 hover:text-forest-900"
                  >
                    Official portal
                    <Icon name="ExternalLink" className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-muted">
                    Via direct engagement
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60} className="mt-6">
          <div className="card overflow-hidden">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-forest-900/10 px-5 py-4 sm:px-6">
              <div>
                <h3 className="font-display text-base font-semibold text-ink">Official funding portals</h3>
                <p className="mt-1 text-sm text-muted">Check each portal directly for current calls and eligibility.</p>
              </div>
              <span className="text-[0.6875rem] font-medium text-muted">Last reviewed: November 2026</span>
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                <caption className="sr-only">Official funding portals and verified status</caption>
                <thead>
                  <tr className="border-b border-forest-900/10 text-[0.625rem] uppercase tracking-[0.1em] text-muted">
                    <th scope="col" className="px-5 py-3 font-semibold sm:px-6">Programme</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Focus</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Current call status</th>
                    <th scope="col" className="px-5 py-3 font-semibold sm:px-6">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-900/[0.07]">
                  {fundingPortals.map((portal) => (
                    <tr key={portal.name}>
                      <th scope="row" className="px-5 py-3.5 font-medium text-ink sm:px-6">{portal.name}</th>
                      <td className="px-4 py-3.5 text-muted">{portal.focus}</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-50 px-2.5 py-1 text-[0.625rem] font-semibold text-amber-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          {portal.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 sm:px-6">
                        <a
                          href={portal.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-forest-700 hover:text-forest-900"
                        >
                          Visit
                          <Icon name="ExternalLink" className="h-3.5 w-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="divide-y divide-forest-900/[0.07] md:hidden">
              {fundingPortals.map((portal) => (
                <li key={portal.name} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">{portal.name}</p>
                      <p className="mt-0.5 text-xs text-muted">{portal.focus}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-amber-500/25 bg-amber-50 px-2 py-0.5 text-[0.5625rem] font-semibold text-amber-800">
                      Verify call
                    </span>
                  </div>
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700"
                  >
                    Visit official portal
                    <Icon name="ExternalLink" className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          External links are provided for orientation only. Their inclusion does not imply affiliation,
          endorsement or a live funding opportunity. Confirm all details on the official portal.
        </p>
      </div>
    </section>
  );
}
