import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { navLinks } from "../data/content";
import Brand from "./Brand";
import Icon from "./Icon";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const menuButtonRef = useRef(null);

  const sectionHref = (href) => (pathname === "/" ? href : `/${href}`);

  const closeMenu = (restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      window.setTimeout(() => menuButtonRef.current?.focus(), 0);
    }
  };

  useEffect(() => {
    if (pathname !== "/") return undefined;
    const ids = navLinks.map((link) => link.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("menu-open");
    const timer = window.setTimeout(() => closeRef.current?.focus(), 40);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-white/90 backdrop-blur-md">
      <div className="container-x">
        <div className="flex min-h-[4.25rem] items-center justify-between gap-4 py-2.5">
          <Brand />

          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = pathname === "/" && active === id;
              return (
                <a
                  key={link.href}
                  href={sectionHref(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-2.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                    isActive
                      ? "bg-forest-50 text-forest-800"
                      : "text-muted hover:bg-forest-50/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={sectionHref("#collaborate")}
              className="hidden min-h-[2.5rem] items-center gap-1.5 rounded-xl bg-forest-800 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-900 sm:inline-flex"
            >
              Partner With Us
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-forest-900/10 text-forest-900 hover:bg-forest-50 xl:hidden"
            >
              <Icon name="Menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden" role="presentation">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => closeMenu()}
            className="absolute inset-0 h-full w-full cursor-default bg-forest-950/45 backdrop-blur-[2px]"
            tabIndex={-1}
          />
          <div
            id="mobile-navigation"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-[min(23rem,92vw)] flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-forest-900/10 px-5 py-4">
              <Brand compact />
              <button
                ref={closeRef}
                type="button"
                onClick={() => closeMenu()}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-forest-900/10 text-forest-900 hover:bg-forest-50"
              >
                <Icon name="X" className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={sectionHref(link.href)}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-[0.95rem] font-medium text-ink hover:bg-forest-50"
                    >
                      {link.label}
                      <Icon name="ChevronRight" className="h-4 w-4 text-muted" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-forest-900/10 p-4">
              <a
                href={sectionHref("#collaborate")}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Partner With Us
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                Kalasalingam Academy of Research and Education
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
