import { Link } from "react-router-dom";
import { mentor, ownership, team } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Avatar({ initials, large = false }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-2xl bg-forest-800 font-display font-bold text-lime-300 ring-1 ring-forest-900/10 ${
        large ? "h-16 w-16 text-xl" : "h-14 w-14 text-lg"
      }`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-pad border-t border-forest-900/10 bg-soft">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="08 · Team"
              title="Research team & faculty mentor"
              intro="An interdisciplinary team at Kalasalingam Academy of Research and Education, combining mechanical engineering, biotechnology and electronics."
            />
          </Reveal>
          <Reveal delay={60}>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-white px-3.5 py-2 text-xs font-medium text-muted">
              <Icon name="MapPin" className="h-3.5 w-3.5 text-forest-600" />
              KARE · Krishnankoil, Tamil Nadu
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <article className="card group flex h-full flex-col p-5 transition-shadow hover:shadow-lift sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <Avatar initials={member.initials} />
                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] ${
                        member.owner
                          ? "border-forest-800/20 bg-forest-800 text-lime-300"
                          : "border-forest-900/10 bg-forest-50 text-forest-700"
                      }`}
                    >
                      {member.role}
                    </span>
                    {member.owner && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/25 bg-amber-50 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.06em] text-amber-800">
                        <Icon name="Copyright" className="h-3 w-3" />
                        Sole IP holder
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-forest-700">{member.department}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{member.focus}</p>
                {member.links ? (
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-forest-900/10 pt-3">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${link.label} (opens in a new tab)`}
                        className="inline-flex min-h-[2.5rem] items-center gap-1.5 rounded-lg border border-forest-900/10 px-2.5 py-1.5 text-xs font-medium text-forest-700 transition-colors hover:border-forest-700/30 hover:bg-forest-50"
                      >
                        <Icon name={link.icon} className="h-3.5 w-3.5" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 border-t border-forest-900/10 pt-3 text-xs text-muted">
                    Contact via the collaboration enquiry form.
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-4">
          <article className="card flex flex-col gap-5 p-5 ring-1 ring-forest-700/15 sm:p-6 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <Avatar initials={mentor.initials} large />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{mentor.name}</h3>
                  <span className="rounded-full bg-forest-800 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-lime-300">
                    {mentor.role}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-forest-700">{mentor.department}</p>
              </div>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted lg:border-l lg:border-forest-900/10 lg:pl-6">
              {mentor.focus}
            </p>
          </article>
        </Reveal>

        <Reveal delay={100} className="mt-4">
          <div className="rounded-2xl border border-forest-800/20 bg-forest-900 p-5 text-forest-50 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime-400/15 text-lime-300">
                <Icon name="Copyright" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-white">
                  Research, IP and copyright ownership
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/80">
                  <strong className="font-semibold text-white">{ownership.ownerName}</strong> is the sole
                  owner and manager of the research, intellectual property and copyright described on this
                  site. Aarya Brat Shankar and R. Bhuvaneshwaran are supporting contributors, and Dr. S. K.
                  Gowthaman is the faculty mentor. They are acknowledged for their support only and hold no
                  ownership, copyright or other rights in the research, unless separately agreed in writing.
                </p>
                <Link
                  to="/ownership"
                  className="mt-3 inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-semibold text-lime-300 hover:text-lime-200"
                >
                  Read the full ownership statement
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          Profile photographs and additional designations will be added only when approved by each team
          member. The initials shown here are placeholders, not portraits.
        </p>
      </div>
    </section>
  );
}
