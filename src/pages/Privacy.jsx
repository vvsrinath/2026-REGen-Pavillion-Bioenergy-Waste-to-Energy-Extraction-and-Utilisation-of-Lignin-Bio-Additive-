import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import usePageMeta from "../hooks/usePageMeta";
import { research } from "../data/content";

const sections = [
  {
    title: "Who we are",
    body: (
      <p>
        REGen Pavilion is a student research initiative at {research.affiliation}, {research.location}. This
        privacy policy explains how this website handles information.
      </p>
    ),
  },
  {
    title: "What this website collects",
    body: (
      <>
        <p>
          This website does not use advertising cookies, third-party analytics or tracking pixels. No account
          is required to browse the site.
        </p>
        <p className="mt-3">
          If you submit the collaboration enquiry form, we receive the information you enter: your name,
          institution, professional email address, area of interest, message and consent confirmation. The
          form is processed by Netlify Forms on our behalf.
        </p>
      </>
    ),
  },
  {
    title: "How enquiry information is used",
    body: (
      <>
        <p>
          Enquiry information is used only to understand and respond to your message, and to follow up on a
          potential research collaboration. It is not sold, rented or used for marketing.
        </p>
        <p className="mt-3">
          Please do not submit confidential, unpublished or sensitive research data through the form. Any
          confidential exchange should be agreed separately before material is shared.
        </p>
      </>
    ),
  },
  {
    title: "Consent and retention",
    body: (
      <p>
        The form asks for your consent before submission. We retain enquiry information only for as long as
        needed to respond and maintain a record of the conversation, or as required by applicable law. You
        may ask us to correct or delete your enquiry information.
      </p>
    ),
  },
  {
    title: "External links",
    body: (
      <p>
        This site links to official funding portals, DOI records, GitHub and LinkedIn. Those services have
        their own privacy policies, and we are not responsible for their content or data practices. Links do
        not imply affiliation or endorsement.
      </p>
    ),
  },
  {
    title: "Your choices",
    body: (
      <p>
        To request access to, correction of, or deletion of information you submitted, use the collaboration
        form and state your request. Please use the same professional email address so that we can locate
        your enquiry.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        This policy may be updated as the research programme develops. The review date below reflects the
        current version.
      </p>
    ),
  },
];

export default function Privacy() {
  usePageMeta(
    "Privacy policy — REGen Pavilion",
    "How REGen Pavilion handles information submitted through its collaboration enquiry form.",
  );

  return (
    <div className="bg-white">
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 hover:text-forest-900"
          >
            <Icon name="ArrowRight" className="h-4 w-4 rotate-180" />
            Back to REGen Pavilion
          </Link>

          <div className="eyebrow mt-8">Privacy</div>
          <h1 className="display-2 mt-4">Privacy policy</h1>
          <p className="lead mt-4">
            How this research website handles enquiry information. Last reviewed: {research.updated}.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="font-display text-lg font-semibold text-ink">
                  <span className="mr-2 text-forest-400">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div className="mt-2 text-sm leading-relaxed text-muted">{section.body}</div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-forest-900/10 bg-forest-50 p-5">
            <h2 className="font-display text-base font-semibold text-ink">Contact about privacy</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Use the collaboration enquiry form and select “Other” as the area of interest, or state your
              privacy request in the message.
            </p>
            <Link to="/#collaborate" className="btn-primary mt-4">
              Open enquiry form
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
