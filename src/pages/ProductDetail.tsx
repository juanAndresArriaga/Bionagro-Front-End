import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useI18n, type Key } from "../i18n";
import { getProduct } from "../data/products";
import { asset } from "../data/nav";
import Icon, { type IconName } from "../components/ui/Icon";
import Jug from "../components/ui/Jug";

const tabs = ["overview", "analysis", "applications", "compat", "trials"] as const;
type Tab = (typeof tabs)[number];

const resources: { icon: IconName; label: Key }[] = [
  { icon: "doc", label: "prod.res.sheet" },
  { icon: "shield", label: "prod.res.sds" },
  { icon: "leaf", label: "prod.res.trial" },
  { icon: "doc", label: "prod.res.guide" },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const { t, tr } = useI18n();
  const [tab, setTab] = useState<Tab>("overview");
  const p = getProduct(slug);

  if (!p) {
    return (
      <section className="section center">
        <div className="wrap">
          <h1>{t("prod.notfound")}</h1>
          <Link to="/products" className="btn">{t("prod.back")}</Link>
        </div>
      </section>
    );
  }

  const ask = `/contact?product=${encodeURIComponent(p.name)}`;

  return (
    <>
      <section className="pdetail-hero">
        <div className="wrap">
          <Jug name={p.name.replace("Bi-on ", "")} sub={p.kind === "soil" ? t("prod.soil") : t("prod.foliar")} />
          <div>
            <h1>{p.name}</h1>
            <p className="lead muted" style={{ fontSize: "1.2rem" }}>{tr(p.summary)}</p>
            <ul className="checks">
              {p.bullets.map((b) => (
                <li key={b.en}>
                  <span className="dot"><Icon name="check" /></span>
                  {tr(b)}
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <Link to={`${ask}&intent=sample`} className="btn">
                <Icon name="leaf" /> {t("prod.sample")}
              </Link>
              <Link to={`${ask}&intent=quote`} className="btn outline">
                <Icon name="doc" /> {t("prod.quote")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="tabs" role="tablist">
            {tabs.map((id) => (
              <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}>
                {t(`prod.tab.${id}` as Key)}
              </button>
            ))}
          </div>

          <div className="two">
            <div role="tabpanel">
              {(tab === "overview" || tab === "analysis") && (
                <>
                  <h2>{tab === "overview" ? t("prod.tab.overview") : t("prod.analysis")}</h2>
                  {tab === "overview" && <p>{tr(p.summary)}</p>}
                  <table className="data">
                    <thead>
                      <tr><th>{t("prod.nutrient")}</th><th>{t("prod.content")}</th></tr>
                    </thead>
                    <tbody>
                      {p.analysis.map(([k, v]) => (
                        <tr key={k}><td>{k}</td><td>{v}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              {tab === "applications" && (
                <>
                  <h2>{t("prod.tab.applications")}</h2>
                  <p>{t("prod.appsText")}</p>
                  <Link to={ask} className="btn outline">{t("prod.band.cta")}</Link>
                </>
              )}
              {tab === "compat" && (
                <>
                  <h2>{t("prod.tab.compat")}</h2>
                  <p>{p.bionTech ? t("prod.compatText") : t("prod.compatNone")}</p>
                  {p.bionTech && <Link to="/technology" className="link">{t("home.tech.cta")} <Icon name="arrow" /></Link>}
                </>
              )}
              {tab === "trials" && (
                <>
                  <h2>{t("prod.tab.trials")}</h2>
                  <p>{t("prod.trialsText")}</p>
                  <Link to="/research" className="link">{t("prod.trialsLink")} <Icon name="arrow" /></Link>
                </>
              )}
            </div>

            <aside className="panel">
              <h3><Icon name="doc" /> {t("prod.res.h")}</h3>
              <p className="muted">{t("prod.res.d")}</p>
              <ul className="res">
                {resources.map((r) => (
                  <li key={r.label} className="open">
                    <Link to={ask}><Icon name={r.icon} /> {t(r.label)} <Icon name="arrow" /></Link>
                  </li>
                ))}
              </ul>
              <div className="note"><Icon name="info" /> {t("prod.res.note")}</div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap band">
          <div className="img" style={{ backgroundImage: `url(${asset("hero-precision-ag.jpg")})` }} role="img" aria-label="" />
          <div>
            <h2>{t("prod.band.h")}</h2>
            <p className="muted">{t("prod.band.d")}</p>
            <Link to="/contact" className="btn">{t("prod.band.cta")} <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
