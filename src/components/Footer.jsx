import { Link, useLocation } from "react-router-dom";
import { navLinks, ownership, research } from "../data/content";
import Brand from "./Brand";
import Icon from "./Icon";

const resourceLinks = [
  { label: "Research abstract", href: "/assets/regen-pavillion-abstract.pdf", download: true },
  { label: "Research poster", href: "/assets/regen-pavillion-poster.pdf", download: true },
  { label: "Publications & references", href: "#publications" },
  { label: "Research progress", href: "#progress" },
];

export default function Footer() {
  const { pathname } = useLocation();
  const sectionHref = (href) => (pathname === "/" ? href : `/${href}`);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest-900/10 bg-forest-950 text-forest-100">
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Brand light />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-forest-100/70">
              {research.title}
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-forest-100/70">
              <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
              <span>
                {research.affiliation}
                <br />
                {research.location}
              </span>
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-3 py-1.5 text-xs font-medium text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Research in progress · No results claimed
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-200/60">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <a
                    href={sectionHref(link.href)}
                    className="inline-flex min-h-[2rem] items-center py-0.5 text-forest-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-200/60">
              Resources
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {link.download ? (
                    <a
                      href={link.href}
                      download
                      className="inline-flex min-h-[2rem] items-center gap-1.5 py-0.5 text-forest-100/75 transition-colors hover:text-white"
                    >
                      {link.label}
                      <Icon name="Download" className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <a
                      href={sectionHref(link.href)}
                      className="inline-flex min-h-[2rem] items-center py-0.5 text-forest-100/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-200/60">
              Contact
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-forest-100/75">
              Collaboration and research enquiries are handled through the enquiry form.
            </p>
            <a
              href={sectionHref("#collaborate")}
              className="mt-2 inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-semibold text-lime-300 hover:text-lime-200"
            >
              Open enquiry form
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </a>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/vvsrinath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Srinath on GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-forest-100/80 transition-colors hover:border-lime-400/40 hover:text-white"
              >
                <Icon name="Github" className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/srinath-v-a26b372b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Srinath on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-forest-100/80 transition-colors hover:border-lime-400/40 hover:text-white"
              >
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-forest-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {ownership.ownerName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>Research in progress · {research.updated}</span>
            <Link to="/ownership" className="inline-flex min-h-[2rem] items-center py-0.5 hover:text-white">
              Ownership & copyright
            </Link>
            <Link to="/privacy" className="inline-flex min-h-[2rem] items-center py-0.5 hover:text-white">
              Privacy policy
            </Link>
            <a href={sectionHref("#home")} className="inline-flex min-h-[2rem] items-center py-0.5 hover:text-white">
              Back to top
            </a>
          </div>
        </div>
        <p className="mt-4 max-w-4xl text-[0.6875rem] leading-relaxed text-forest-100/70">
          <strong className="font-semibold text-forest-100">Intellectual property and copyright:</strong>{" "}
          the research, documents and website content are owned and managed solely by {ownership.ownerName}.
          Supporting contributors and the faculty mentor are acknowledged for their support and hold no IP or
          copyright ownership.{" "}
          <Link to="/ownership" className="font-semibold text-lime-300 underline underline-offset-2 hover:text-lime-200">
            Full ownership statement
          </Link>
          .
        </p>
        <p className="mt-3 max-w-4xl text-[0.6875rem] leading-relaxed text-forest-100/70">
          This website describes proposed research. It does not claim completed experiments, measured
          performance, funding, partnerships or commercial outcomes. Illustrative figures and the planned
          blend matrix are labelled and are not experimental findings. Institutional affiliation:{" "}
          {research.affiliation}.
        </p>
      </div>
    </footer>
  );
}
