import { mentor, team } from "../data/content";
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
                  <span className="rounded-full border border-forest-900/10 bg-forest-50 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-forest-700">
                    {member.role}
                  </span>
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
                        className="inline-flex items-center gap-1.5 rounded-lg border border-forest-900/10 px-2.5 py-1.5 text-xs font-medium text-forest-700 transition-colors hover:border-forest-700/30 hover:bg-forest-50"
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

        <p className="mt-4 text-xs leading-relaxed text-muted">
          Profile photographs and additional designations will be added only when approved by each team
          member. The initials shown here are placeholders, not portraits.
        </p>
      </div>
    </section>
  );
}
