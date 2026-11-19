import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { usePageTitle } from "../lib/usePageTitle";
import { asset } from "../data/nav";
import { close, hero, jar, lemon, refs, sections, statusLabel, statusOne, studies, type Status } from "../data/science";
import Icon from "../components/ui/Icon";
import Reveal from "../components/ui/Reveal";

const order: Status[] = ["done", "prep", "sched", "open"];

function Jar({ name, v, k, us }: { name: ReactNode; v: [number, number]; k: number; us?: boolean }) {
  const { tr } = useI18n();
  return (
    <div className={`jar${us ? " us" : ""}`}>
      <div className="glass">
        <i className="liq" />
        <i className="sed" style={{ height: `${Math.min(70, (v[0] * k) * 0.9)}%` }} />
      </div>
      <span className="jn">{name}</span>
      <span className="jo"><b>{Math.round(v[0] * k)} %</b> {tr(jar.precip)}</span>
      <span className="jo2">{tr(jar.ph)} <b>{v[1].toFixed(1)}</b></span>
    </div>
  );
}

function Jars() {
  const { tr } = useI18n();
  const [w, setW] = useState<"m" | "d">("m");
  const [p, setP] = useState<"0" | "1">("0");
  const [k, setK] = useState(1);
  const raf = useRef(0);
  const d = jar.data[w + p];

  const stop = () => cancelAnimationFrame(raf.current);
  const play = () => {
    stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setK(1);
    let t0 = 0;
    const step = (ms: number) => {
      if (!t0) t0 = ms;
      const x = Math.min(1, (ms - t0) / 5200);
      setK(1 - (1 - x) ** 2);
      if (x < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };
  useEffect(() => stop, []);
  const pick = (fn: () => void) => { fn(); stop(); setK(1); };

  return (
    <div className="jsim">
      <p className="eyebrow">{tr(jar.sim)}</p>
      <div className="jsim-ctl">
        <div className="pills inline" role="group">
          {jar.water.map((o) => (
            <button key={o.id} type="button" aria-pressed={w === o.id} onClick={() => pick(() => setW(o.id))}>{tr(o.t)}</button>
          ))}
        </div>
        <div className="pills inline" role="group">
          {jar.mix.map((o) => (
            <button key={o.id} type="button" aria-pressed={p === o.id} onClick={() => pick(() => setP(o.id))}>{tr(o.t)}</button>
          ))}
        </div>
        <button type="button" className="btn outline sm" onClick={play}><Icon name="play" /> {tr(jar.play)}</button>
      </div>
      <div className="jars">
        <Jar name={tr(jar.generic)} v={d.g} k={k} />
        <div className="clock" aria-hidden="true"><b>{Math.round(24 * k)} h</b></div>
        <Jar name={<span className="pn"><img className="bl-in" src={asset("bi-on.svg")} alt="Bi-on" /> Ca</span>} v={d.b} k={k} us />
      </div>
      <p className="muted tiny">{tr(jar.note)}</p>
    </div>
  );
}

export default function Research() {
  const { t, tr } = useI18n();
  usePageTitle(t("nav.research"));
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [sec, setSec] = useState("lemon");
  const go = (id: string) => {
    setSec(id);
    document.getElementById("sec-nav")?.scrollIntoView({ block: "start" });
  };
  const count = (s: Status) => studies.filter((x) => x.status === s).length;
  const shown = studies.filter((x) => filter === "all" || x.status === filter);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">{t("res.eyebrow")}</span>
          <h1>{tr(hero.h)}</h1>
          <p>{tr(hero.d)}</p>
          <div className="sci-counts">
            {order.map((s) => (
              <div key={s}><b>{count(s)}</b><span>{tr(statusLabel[s])}</span></div>
            ))}
          </div>
        </div>
      </section>

      <nav className="sec-nav" id="sec-nav" aria-label="Sections">
        <div className="wrap">
          {sections.map((s) => (
            <button key={s.id} type="button" aria-pressed={sec === s.id} onClick={() => go(s.id)}>{tr(s.t)}</button>
          ))}
        </div>
      </nav>

      {sec === "lemon" && (
      <section className="section" id="lemon">
        <div className="wrap">
          <Reveal>
            <span className="st-chip done">{tr(lemon.k)}</span>
            <h2 style={{ marginTop: 12 }}>{tr(lemon.h)}</h2>
            <p className="muted">{tr(lemon.d)}</p>
            <p className="eyebrow">{tr(lemon.scored)}</p>
            <div className="grid c2 lemon-stats">
              {lemon.stats.map((s) => (
                <div className="panel" key={s.t.en}>
                  <div className="stat-top"><h3>{tr(s.t)}</h3><b className="big-stat">{s.delta}</b></div>
                  {([[lemon.farm, s.farm, false], [lemon.bio, s.bio, true]] as const).map(([label, v, us]) => (
                    <div className="hbar" key={label.en}>
                      <span>{tr(label)}</span>
                      <div><i className={us ? "b" : ""} style={{ width: `${v}%` }} /></div>
                      <b>{v.toFixed(1)} %</b>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <ul className="chips design">
              {lemon.design.map((x) => <li className="chip" key={x.en}>{tr(x)}</li>)}
            </ul>
            <p className="note-text">{tr(lemon.note)}</p>
          </Reveal>
        </div>
      </section>
      )}

      {sec === "jar" && (
      <section className="section" id="jar">
        <div className="wrap">
          <Reveal>
            <span className="st-chip prep">{tr(jar.k)}</span>
            <h2 style={{ marginTop: 12 }}>{tr(jar.h)}</h2>
            <p className="muted">{tr(jar.d)}</p>
            <Jars />
            <ul className="protocol">
              {jar.protocol.map((x) => (
                <li key={x.t.en}><b>{tr(x.t)}</b><span>{tr(x.d)}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      )}

      {sec === "studies" && (
      <section className="section" id="studies">
        <div className="wrap">
          <span className="eyebrow">{tr({ en: "All studies", es: "Todos los estudios" })}</span>
          <h2>{tr({ en: "What is done and what is next", es: "Qué está hecho y qué viene" })}</h2>
          <div className="filters" role="group">
            <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>{tr({ en: "All", es: "Todos" })} {studies.length}</button>
            {order.map((s) => (
              <button key={s} type="button" aria-pressed={filter === s} onClick={() => setFilter(s)}>{tr(statusLabel[s])} {count(s)}</button>
            ))}
          </div>
          <div className="grid c3">
            {shown.map((s) => (
              <Reveal key={s.t.en}>
                <article className="card hover study">
                  <div className="body">
                    <div className="study-top">
                      <span className="chip">{tr(s.kind)}</span>
                      <span className={`st-chip ${s.status}`}>{tr(statusOne[s.status])}</span>
                    </div>
                    <h3>{tr(s.t)}</h3>
                    <p>{tr(s.d)}</p>
                    {s.cta && (s.cta.request ? (
                      <Link to={`/contact?product=${encodeURIComponent(tr(s.t))}&intent=quote`} className="link">{tr(s.cta.label)} <Icon name="arrow" /></Link>
                    ) : (
                      <button type="button" className="link plain" onClick={() => go(s.cta!.to)}>{tr(s.cta.label)} <Icon name="arrow" /></button>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {sec === "refs" && (
      <section className="section" id="refs">
        <div className="wrap two">
          <div>
            <span className="eyebrow">{tr(refs.k)}</span>
            <h2>{tr(refs.h)}</h2>
            <p className="muted">{tr(refs.d)}</p>
          </div>
          <ol className="refs-list">
            {refs.list.map((r) => <li key={r}>{r}</li>)}
          </ol>
        </div>
      </section>
      )}

      {sec === "propose" && (
      <section className="section" id="propose">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <span className="eyebrow" style={{ color: "var(--lime)" }}>{tr(close.k)}</span>
              <h2>{tr(close.h)}</h2>
              <p>{tr(close.d)}</p>
            </div>
            <div className="btn-row">
              <Link to="/contact?product=Research&intent=sample" className="btn light">{tr(close.cta)} <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
}
