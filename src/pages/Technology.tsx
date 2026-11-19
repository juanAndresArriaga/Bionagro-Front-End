import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { usePageTitle } from "../lib/usePageTitle";
import { asset } from "../data/nav";
import { hardness, howCards, nutrients, refs } from "../data/technology";
import Icon from "../components/ui/Icon";
import Reveal from "../components/ui/Reveal";

type Mode = "salt" | "bion";

function Lab() {
  const { t, tr } = useI18n();
  const [id, setId] = useState(nutrients[0].id);
  const [mode, setMode] = useState<Mode>("salt");
  const [step, setStep] = useState(0);
  const [hard, setHard] = useState(2);

  const n = nutrients.find((x) => x.id === id) ?? nutrients[0];
  const steps = mode === "salt" ? n.salt : n.bion;
  const cur = Math.min(step, steps.length - 1);
  const last = cur === steps.length - 1;

  // Illustrative only: relative sediment (0-1) grows with hardness and with each step; Bi-on keeps it near zero.
  const sediment = mode === "salt" ? Math.min(1, n.pf * (0.3 + 0.7 * (hard / (hardness.length - 1)))) * ((cur + 1) / steps.length) : 0;
  const leaf = mode === "salt" ? 1 - sediment : last ? 1 : 0.9;

  const pick = (next: string) => { setId(next); setStep(0); };
  const view = (m: Mode) => { setMode(m); setStep(0); };

  return (
    <section className="section alt" id="lab">
      <div className="wrap">
        <div className="head center">
          <div className="head-in">
            <span className="eyebrow">{t("tech.lab.k")}</span>
            <h2>{t("tech.lab.h")}</h2>
          </div>
        </div>

        <div className="lab-pick" role="group" aria-label="Nutrient">
          {nutrients.map((x) => (
            <button key={x.id} type="button" aria-pressed={x.id === id} onClick={() => pick(x.id)} style={{ ["--c" as string]: x.color }}>
              <img src={asset("bi-on.svg")} alt="" aria-hidden="true" />
              <span>{x.sym}</span>
            </button>
          ))}
        </div>

        <div className="pills" role="tablist">
          <button type="button" role="tab" aria-selected={mode === "salt"} onClick={() => view("salt")}>{t("tech.lab.without")}</button>
          <button type="button" role="tab" aria-selected={mode === "bion"} onClick={() => view("bion")}>{t("tech.lab.with")}</button>
        </div>

        <div className="lab-grid">
          <div className="tank-wrap">
            <div className="tank" aria-hidden="true">
              <div className="liquid" style={{ background: `${n.color}33`, borderColor: n.color }}>
                <span className="nutrient-label" style={{ color: n.color }}>{n.label}</span>
                <div className="sediment" style={{ height: `${Math.round(sediment * 70)}%`, background: n.color }} />
              </div>
            </div>
            <dl className="meters">
              <dt>{t("tech.lab.tank")}</dt>
              <dd><i style={{ width: `${Math.round((1 - sediment) * 100)}%`, background: n.color }} /></dd>
              <dt>{t("tech.lab.leaf")}</dt>
              <dd><i style={{ width: `${Math.round(leaf * 100)}%`, background: "var(--botanical)" }} /></dd>
            </dl>
            <p className="info"><b>{tr(n.infoName)}</b> {n.label} — {tr(n.info)}</p>
          </div>

          <div>
            <ol className="lab-steps">
              {steps.map((s, i) => (
                <li key={s.l.en}>
                  <button type="button" aria-current={i === cur ? "step" : undefined} onClick={() => setStep(i)}>
                    <span className="num">{i + 1}</span>
                    <span>
                      <b>{tr(s.l)}</b>
                      <span>{tr(s.t)}</span>
                      <code>{tr(s.e)}</code>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="lab-water">
              <label htmlFor="hard">{t("tech.lab.hard")} <span className="u">mg/L CaCO₃</span></label>
              <input id="hard" type="range" min={0} max={hardness.length - 1} step={1} value={hard} onChange={(e) => setHard(Number(e.target.value))} />
              <div className="ticks-row" aria-hidden="true">
                {hardness.map((h) => (
                  <span key={h.v}>{tr(h.n)}<small>{h.v}</small></span>
                ))}
              </div>
              <p className="muted tiny">{t("tech.lab.assume")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Technology() {
  const { t, tr } = useI18n();
  usePageTitle(t("nav.tech"));
  return (
    <>
      <section className="tx-open">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Bionagro</Link>
            <span>›</span>
            <span>{t("nav.tech")}</span>
          </nav>
          <h1 className="tx-mark">
            <span className="sr">{t("nav.tech")}</span>
            <img src={asset("bi-on.svg")} alt="Bi-on" />
          </h1>
          <p className="tx-etym">
            <span><b>Bi</b> {t("tech.etym1")}</span>
            <span><b>ion</b> {t("tech.etym2")}</span>
          </p>
          <p className="lead muted">{t("tech.lead")}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">{t("tech.how.k")}</span>
            <h2>{t("tech.how.h")}</h2>
          </div>
          <ol className="how-g">
            {howCards.map((c) => (
              <li key={c.n}>
                <Reveal>
                  <div className="card how">
                    <span className="how-n">{c.n}</span>
                    <p className="how-k">{tr(c.k)}</p>
                    <h3>{tr(c.h)}</h3>
                    <p>{tr(c.p)}</p>
                    <code>{tr(c.eq)}</code>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Lab />

      <section className="section">
        <div className="wrap refs">
          <h2>{t("tech.refs")}</h2>
          <ol>
            {refs.map((r) => (
              <li key={r.href}><a href={r.href} target="_blank" rel="noreferrer">{r.text}</a></li>
            ))}
          </ol>
          <p className="note-text">{t("tech.note")}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>{t("prod.band.h")}</h2>
              <p>{t("prod.band.d")}</p>
            </div>
            <div className="btn-row">
              <Link to="/contact" className="btn light">{t("tech.lab.cta")} <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
