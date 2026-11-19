import { useEffect, useRef, useState, type FocusEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../i18n";
import { asset } from "../data/nav";
import Icon from "./ui/Icon";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const ddToggle = useRef<HTMLButtonElement>(null);
  const { pathname, search } = useLocation();

  const cls = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined);

  // Close both menus whenever the route changes (reset during render instead of in an effect).
  const route = pathname + search;
  const [lastRoute, setLastRoute] = useState(route);
  if (route !== lastRoute) {
    setLastRoute(route);
    setOpen(false);
    setDdOpen(false);
  }

  // Escape closes whichever menu is open.
  useEffect(() => {
    if (!open && !ddOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (ddOpen) {
        setDdOpen(false);
        ddToggle.current?.focus();
      } else setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, ddOpen]);

  // Stop the page behind the mobile menu from scrolling.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close the products menu when focus moves outside it.
  const onDdBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDdOpen(false);
  };

  return (
    <header className="header">
      <div className="wrap bar">
        <Link to="/" className="logo" aria-label="Bionagro">
          <img src={asset("bionagro-logo.svg")} alt="Bionagro" width="160" height="42" />
        </Link>

        <nav id="main-nav" className={`nav${open ? " open" : ""}`} aria-label="Main" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
          <NavLink to="/" end className={cls}>{t("nav.home")}</NavLink>
          <NavLink to="/about" className={cls}>{t("nav.about")}</NavLink>
          <div className={`dd${ddOpen ? " open" : ""}`} onBlur={onDdBlur}>
            <NavLink to="/products" className={cls}>{t("nav.products")}</NavLink>
            <button
              ref={ddToggle}
              type="button"
              className="dd-toggle"
              aria-expanded={ddOpen}
              aria-controls="products-menu"
              aria-label={t("nav.productsMenu")}
              onClick={() => setDdOpen((v) => !v)}
            >
              <Icon name="chev" />
            </button>
            <div className="dd-menu" id="products-menu">
              <Link to="/technology">{t("nav.tech")}</Link>
              <Link to="/products">{t("nav.allProducts")}</Link>
              <Link to="/products?type=foliar">{t("nav.foliar")}</Link>
              <Link to="/products?type=soil">{t("nav.soil")}</Link>
            </div>
          </div>
          <NavLink to="/research" className={cls}>{t("nav.research")}</NavLink>
          <NavLink to="/faq" className={cls}>{t("nav.faq")}</NavLink>
          <NavLink to="/contact" className={cls}>{t("nav.contact")}</NavLink>
          <Link to="/distributors" className="btn mobile-cta">
            {t("nav.distributor")} <Icon name="arrow" />
          </Link>
        </nav>

        <div className="head-actions">
          <div className="lang" role="group" aria-label="Language">
            {(["en", "es"] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/distributors" className="btn sm cta">
            {t("nav.distributor")} <Icon name="arrow" />
          </Link>
          <button
            type="button"
            className="burger"
            aria-label={t("nav.menu")}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
