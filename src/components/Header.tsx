import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../i18n";
import { asset } from "../data/nav";
import Icon from "./ui/Icon";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const cls = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined);

  return (
    <header className="header">
      <div className="wrap bar">
        <Link to="/" className="logo" aria-label="Bionagro">
          <img src={asset("bionagro-logo.svg")} alt="Bionagro" width="160" height="42" />
        </Link>

        <nav className={`nav${open ? " open" : ""}`} aria-label="Main" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
          <NavLink to="/" end className={cls}>{t("nav.home")}</NavLink>
          <NavLink to="/about" className={cls}>{t("nav.about")}</NavLink>
          <div className="dd">
            <NavLink to="/products" className={cls}>
              {t("nav.products")} <Icon name="chev" />
            </NavLink>
            <div className="dd-menu">
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
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
