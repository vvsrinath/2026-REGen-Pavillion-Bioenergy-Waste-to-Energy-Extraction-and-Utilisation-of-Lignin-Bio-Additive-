import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { collaborationAudiences, interestOptions } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const initialValues = {
  name: "",
  institution: "",
  email: "",
  interest: "",
  message: "",
  consent: false,
  botField: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (values.institution.trim().length < 2) errors.institution = "Please enter your institution or organisation.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid professional email address.";
  if (!values.interest) errors.interest = "Please choose an area of interest.";
  if (values.message.trim().length < 20) errors.message = "Please add at least 20 characters about your enquiry.";
  if (!values.consent) errors.consent = "Please confirm that you consent to being contacted about this enquiry.";
  return errors;
}

export default function Collaboration() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      const interest = event.detail;
      setValues((current) => ({ ...current, interest }));
      setErrors((current) => ({ ...current, interest: undefined }));
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => document.getElementById("interest")?.focus(), 450);
    };
    window.addEventListener("regen:prefill", handler);
    return () => window.removeEventListener("regen:prefill", handler);
  }, []);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  const update = (field) => (event) => {
    const value = field === "consent" ? event.target.checked : event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setSubmitError("");
    }
  };

  const focusFirstError = (nextErrors) => {
    const order = ["name", "institution", "email", "interest", "message", "consent"];
    const first = order.find((key) => nextErrors[key]);
    if (first) document.getElementById(first)?.focus();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.botField) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const body = new URLSearchParams({
        "form-name": "collaboration",
        name: values.name.trim(),
        institution: values.institution.trim(),
        email: values.email.trim(),
        interest: values.interest,
        message: values.message.trim(),
        consent: values.consent ? "yes" : "no",
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);

      setStatus("success");
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setSubmitError(
        import.meta.env.DEV
          ? "Form delivery is available on the deployed Netlify site. Locally, the form cannot be submitted — validation and layout can still be reviewed."
          : "Your enquiry could not be sent. Please check your connection and try again in a moment.",
      );
    }
  };

  return (
    <section id="collaborate" className="relative isolate overflow-hidden border-t border-forest-900/10 bg-forest-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(167,209,41,0.12),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(46,125,50,0.22),transparent_45%)]" />
      <div className="container-x section-pad">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="06 · Collaborate"
                title="Let's Build the Next Stage of Research Together."
                intro="We are seeking academic, analytical and industrial partners who can strengthen the science — from feedstock characterisation to independent fuel and engine testing."
                light
              />
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {collaborationAudiences.map((item, index) => (
                <Reveal key={item.title} delay={index * 40}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-lime-300">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-forest-100/65">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs leading-relaxed text-forest-100/65">
              <Icon name="Info" className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
              Submitting an enquiry does not create a partnership, funding commitment or confidentiality
              agreement. Any formal collaboration will be documented separately.
            </div>
          </div>

          <Reveal delay={80}>
            <div className="rounded-3xl border border-white/15 bg-white p-5 shadow-2xl sm:p-7">
              {status === "success" ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20">
                    <Icon name="CheckCircle2" className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">Enquiry received</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    Thank you. Your enquiry has been submitted through the site. The research team will
                    respond using the professional email address you provided.
                  </p>
                  <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-6">
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">Collaboration enquiry</h3>
                      <p className="mt-1 text-sm text-muted">
                        Tell us how you would like to engage with the research.
                      </p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700">
                      <Icon name="Handshake" className="h-5 w-5" />
                    </span>
                  </div>

                  <form
                    ref={formRef}
                    id="collaboration-form"
                    name="collaboration"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-6"
                  >
                    <input type="hidden" name="form-name" value="collaboration" />
                    <p className="hidden" aria-hidden="true">
                      <label>
                        Do not fill this out if you are human:{" "}
                        <input
                          name="bot-field"
                          value={values.botField}
                          onChange={update("botField")}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="field-label">
                          Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={update("name")}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`field-control ${errors.name ? "!border-red-500" : ""}`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p id="name-error" className="field-error">
                            <Icon name="CircleAlert" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="institution" className="field-label">
                          Institution <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="institution"
                          name="institution"
                          type="text"
                          autoComplete="organization"
                          value={values.institution}
                          onChange={update("institution")}
                          aria-invalid={Boolean(errors.institution)}
                          aria-describedby={errors.institution ? "institution-error" : undefined}
                          className={`field-control ${errors.institution ? "!border-red-500" : ""}`}
                          placeholder="University, laboratory or company"
                        />
                        {errors.institution && (
                          <p id="institution-error" className="field-error">
                            <Icon name="CircleAlert" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {errors.institution}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="field-label">
                          Professional email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          value={values.email}
                          onChange={update("email")}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`field-control ${errors.email ? "!border-red-500" : ""}`}
                          placeholder="name@institution.edu"
                        />
                        {errors.email && (
                          <p id="email-error" className="field-error">
                            <Icon name="CircleAlert" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="interest" className="field-label">
                          Area of interest <span className="text-red-600">*</span>
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={values.interest}
                          onChange={update("interest")}
                          aria-invalid={Boolean(errors.interest)}
                          aria-describedby={errors.interest ? "interest-error" : undefined}
                          className={`field-control ${errors.interest ? "!border-red-500" : ""} ${
                            values.interest ? "" : "text-muted/70"
                          }`}
                        >
                          <option value="">Select an area</option>
                          {interestOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.interest && (
                          <p id="interest-error" className="field-error">
                            <Icon name="CircleAlert" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {errors.interest}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="field-label">
                          Message <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={values.message}
                          onChange={update("message")}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "message-error" : "message-hint"}
                          className={`field-control resize-y ${errors.message ? "!border-red-500" : ""}`}
                          placeholder="Describe your interest, relevant expertise or the support you can offer."
                        />
                        <p id="message-hint" className="mt-1 text-[0.6875rem] text-muted">
                          Please avoid sharing confidential or unpublished data in this form.
                        </p>
                        {errors.message && (
                          <p id="message-error" className="field-error">
                            <Icon name="CircleAlert" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="consent" className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-muted">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={values.consent}
                          onChange={update("consent")}
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? "consent-error" : undefined}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-forest-900/25 text-forest-700 focus:ring-forest-600"
                        />
                        <span>
                          I consent to the research team using the details above to respond to this enquiry.{" "}
                          <Link to="/privacy" className="prose-link">
                            Privacy policy
                          </Link>
                        </span>
                      </label>
                      {errors.consent && (
                        <p id="consent-error" className="field-error">
                          <Icon name="CircleAlert" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {status === "error" && submitError && (
                      <div role="alert" className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-500/20 bg-red-50 px-3.5 py-3 text-xs leading-relaxed text-red-800">
                        <Icon name="CircleAlert" className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[0.6875rem] leading-relaxed text-muted">
                        Processed by Netlify Forms. No analytics or advertising cookies are used.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary w-full shrink-0 sm:w-auto"
                      >
                        {status === "submitting" ? (
                          <>
                            <Icon name="Loader2" className="h-4 w-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Icon name="Send" className="h-4 w-4" />
                            Send enquiry
                          </>
                        )}
                      </button>
                    </div>

                    <div aria-live="polite" className="sr-only">
                      {status === "submitting" ? "Sending your enquiry." : ""}
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
