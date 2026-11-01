import { useEffect } from "react";

const DEFAULT_TITLE = "REGen Pavilion — Lignin Bio-Additive Research | KARE";
const DEFAULT_DESCRIPTION =
  "REGen Pavilion is a KARE research initiative investigating lignin recovery from Seemai Karuvelam (Prosopis juliflora) and its potential as a bio-additive for diesel fuel and compression-ignition engines.";

/**
 * Keeps the document title and meta description in sync with the active route.
 * Values from index.html are restored when the route unmounts.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const meta = typeof document !== "undefined" ? document.querySelector('meta[name="description"]') : null;
    const previousDescription = meta?.getAttribute("content");

    if (title) document.title = title;
    if (meta && description) meta.setAttribute("content", description);

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute("content", previousDescription ?? DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
