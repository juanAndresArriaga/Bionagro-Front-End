import { useEffect } from "react";

const SITE = "Bionagro";
const HOME = "Bionagro - Your Manufacturing Partner in Plant Nutrition";

/** Sets the browser tab title for the current page; the home page passes nothing and keeps the full site title. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : HOME;
  }, [title]);
}
