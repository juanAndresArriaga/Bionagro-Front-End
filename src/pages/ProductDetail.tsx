import { useRef, useState, type KeyboardEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { useI18n, type Key } from "../i18n";
import { getProduct } from "../data/products";
import { details } from "../data/productDetails";
import { asset } from "../data/nav";
import { usePageTitle } from "../lib/usePageTitle";
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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const p = getProduct(slug);
  const d = slug ? details[slug] : undefined;
  usePageTitle(p ? p.name : t("prod.notfound"));

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

  // Arrow keys / Home / End move between tabs, following the WAI-ARIA tabs pattern.
  const onTabKey = (e: KeyboardEvent, i: number) => {
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const j = (next + tabs.length) % tabs.length;
    setTab(tabs[j]);
    tabRefs.current[j]?.focus();
  };

  const simpleAnalysis = (
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
  );

  return (
    <>
      <section className="pdetail-hero">
        <div className="wrap">
          <Jug name={p.name.replace("Bi-on ", "")} sub={p.kind === "soil" ? t("prod.soil") : t("prod.foliar")} />
          <div>
            <h1>{p.name}</h1>
            <p className="lead muted pd-lead">{tr(p.summary)}</p>
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
          <div className="tabs" role="tablist" aria-label={p.name}>
            {tabs.map((id, i) => (
              <button
                key={id}
                ref={(el) => { tabRefs.current[i] = el; }}
                type="button"
                role="tab"
                id={`tab-${id}`}
                aria-controls="tab-panel"
                aria-selected={tab === id}
                tabIndex={tab === id ? 0 : -1}
                onClick={() => setTab(id)}
                onKeyDown={(e) => onTabKey(e, i)}
              >
                {t(`prod.tab.${id}` as Key)}
              </button>
            ))}
          </div>

          <div className="two">
            <div role="tabpanel" id="tab-panel" aria-labelledby={`tab-${tab}`} tabIndex={0}>
              {tab === "overview" && (
                <>
                  <h2>{t("prod.tab.overview")}</h2>
                  <p>{d ? tr(d.sub) : tr(p.summary)}</p>
                  {d && d.ticks.length > 0 && (
                    <ul className="ticks">
                      {d.ticks.map((x) => (
                        <li key={x.en}><span className="dot"><Icon name="check" /></span>{tr(x)}</li>
                      ))}
                    </ul>
                  )}
                  {!d && simpleAnalysis}
                </>
              )}

              {tab === "analysis" && (
                <>
                  {/* Formula values, not yet a label guarantee (see prod.ga.note), so the heading avoids "Guaranteed". */}
                  <h2>{d ? t("prod.tab.analysis") : t("prod.analysis")}</h2>
                  {d ? (
                    <div className="ga">
                      <div className="ga-h">
                        <b>{t("prod.ga.h")}</b>
                        {d.ga.grade && <span>{t("prod.ga.grade")} <b>{d.ga.grade}</b></span>}
                      </div>
                      <table className="data">
                        <thead>
                          <tr>
                            <th scope="col">{t("prod.nutrient")}</th>
                            <th scope="col" className="n">{t("prod.ga.pct")}</th>
                            <th scope="col" className="n">g/L</th>
                            <th scope="col" className="n">lb/gal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {d.ga.rows.map((r) => (
                            <tr key={r.n.en}>
                              <th scope="row">{tr(r.n)}</th>
                              <td className="n">{r.pct}</td>
                              <td className="n">{r.gl}</td>
                              <td className="n">{r.lb}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="ga-f">
                        {t("prod.ga.density")}: {d.ga.density}
                        {d.ga.ph && <> · {t("prod.ga.ph")}: {d.ga.ph}</>}
                      </div>
                    </div>
                  ) : simpleAnalysis}
                  {d && <p className="note-text pd-notes">{t("prod.ga.note")}</p>}
                </>
              )}

              {tab === "applications" && (
                <>
                  <h2>{t("prod.tab.applications")}</h2>
                  {d ? (
                    <>
                      {d.how && <p><b>{t("prod.howto")}:</b> {tr(d.how)}</p>}
                      {d.crops && <p><b>{t("prod.crops")}</b> {tr(d.crops)}</p>}
                      {d.callouts && (
                        <div className="grid c2 pd-block">
                          {d.callouts.map((c) => (
                            <div className="callout" key={c.v + c.t.en}><b>{c.v}</b><span>{tr(c.t)}</span></div>
                          ))}
                        </div>
                      )}
                      <div className="tablebox pd-block">
                        <table className="data">
                          <caption className="sr">{t("prod.rates")}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{t("prod.col.crop")}</th>
                              <th scope="col">{t("prod.col.method")}</th>
                              <th scope="col" className="n">{t("prod.col.lha")}</th>
                              <th scope="col" className="n">{t("prod.col.acre")}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {d.rates.map((r, i) => (
                              <tr key={i}>
                                <td>{tr(r.crop)}{r.stage && <small>{tr(r.stage)}</small>}</td>
                                <td>{tr(r.method)}</td>
                                <td className="n">{r.lha}</td>
                                <td className="n">{r.acre}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <ul className="ticks info pd-notes">
                        {d.notes.map((n) => (
                          <li key={n.en}><Icon name="info" />{tr(n)}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p>{t("prod.appsText")}</p>
                  )}
                  <p className="pd-block"><Link to={ask} className="btn outline">{t("prod.band.cta")}</Link></p>
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
                  {d?.trial ? (
                    <>
                      <h3>{t("prod.trial.h")}</h3>
                      <p>{tr(d.trial)}</p>
                    </>
                  ) : (
                    <p>{t("prod.trials.none").replace("{name}", p.name)}</p>
                  )}
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
          <div className="img" style={{ backgroundImage: `url(${asset("hero-precision-ag.webp")})` }} aria-hidden="true" />
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
