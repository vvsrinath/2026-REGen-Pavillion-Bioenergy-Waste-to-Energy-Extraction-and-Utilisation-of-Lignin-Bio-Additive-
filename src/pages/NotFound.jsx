import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Page not found — REGen Pavilion",
    "The requested page is not part of the REGen Pavilion lignin bio-additive research site.",
  );

  return (
    <div className="bg-soft">
      <div className="container-x flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-forest-800 text-lime-300">
          <Icon name="ScanSearch" className="h-7 w-7" />
        </span>
        <p className="mt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-forest-600">
          404 · Not found
        </p>
        <h1 className="display-2 mt-3">This page is not part of the research site</h1>
        <p className="lead mt-4 max-w-lg">
          The address may have changed, or the resource may not be available yet. Only the abstract and
          poster are currently published.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            Return home
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
          <Link to="/#publications" className="btn-outline">
            View publications
          </Link>
        </div>
      </div>
    </div>
  );
}
