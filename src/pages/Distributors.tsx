import { useState, type FormEvent } from "react";
import { useI18n, type Key } from "../i18n";
import { contactInfo, socialLinks } from "../data/nav";
import { products } from "../data/products";
import { businessTypes, hero, needs, perks, plant, privateLabel, steps, volumes } from "../data/distributors";
import Icon from "../components/ui/Icon";
import Reveal from "../components/ui/Reveal";

const empty = { name: "", company: "", email: "", phone: "", where: "", type: "", need: "", volume: "", msg: "" };

export default function Distributors() {
  const { t, tr, lang } = useI18n();
  const [f, setF] = useState(empty);
  const [picked, setPicked] = useState<string[]>([]);
  const lbl = (k: Key) => t(k).replace(/\s*(\*|\(.*\))$/, "");
  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggle = (name: string) => setPicked((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));

  const subject = `Distributor inquiry: ${f.company || f.name}`.trim();
  const body = [
    `${lbl("dist.name")}: ${f.name}`,
    `${lbl("dist.company")}: ${f.company}`,
    `${lbl("dist.email")}: ${f.email}`,
    f.phone && `${lbl("dist.phone")}: ${f.phone}`,
    `${lbl("dist.where")}: ${f.where}`,
    `${lbl("dist.type")}: ${f.type}`,
    `${lbl("dist.need")}: ${f.need}`,
    f.volume && `${lbl("dist.volume")}: ${f.volume}`,
    picked.length > 0 && `${lbl("dist.products")}: ${picked.join(", ")}`,
    f.msg && `\n${f.msg}`,
  ].filter(Boolean).join("\n");

  // No backend yet: hand the request to the visitor's mail client.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const wa = `${socialLinks.text}?body=${encodeURIComponent(body)}`;

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">{t("dist.eyebrow")}</span>
          <h1>{tr(hero.h)}</h1>
          <p>{tr(hero.d)}</p>
          <div className="btn-row" style={{ marginTop: 24 }}>
            <a href="#request" className="btn light">{t("dist.start")} <Icon name="arrow" /></a>
            <a href="#private-label" className="btn ghost">{t("dist.pl")}</a>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap three">
          {perks.map((p) => (
            <div className="item" key={p.t.en}>
              <Icon name={p.icon} className="big" />
              <h3>{tr(p.t)}</h3>
              <p>{tr(p.d)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">{t("dist.how.k")}</span>
            <h2>{t("dist.how.h")}</h2>
          </div>
          <ol className="how-g">
            {steps.map((s, i) => (
              <li key={s.t.en}>
                <Reveal>
                  <div className="card how">
                    <span className="how-n">{i + 1}</span>
                    <h3>{tr(s.t)}</h3>
                    <p>{tr(s.d)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two">
          <div>
            <span className="eyebrow">{t("dist.plant.k")}</span>
            <h2>{t("dist.plant.h")}</h2>
            <p>{tr(plant.d)}</p>
            <ul className="checks">
              {plant.points.map((x) => (
                <li key={x.en}><span className="dot"><Icon name="check" /></span>{tr(x)}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <div className="sizes">
              {plant.sizes.map((s) => (
                <div key={s.n}><b>{s.n}</b><span>{s.v}</span></div>
              ))}
            </div>
            <p className="muted" style={{ margin: "14px 0 0" }}>{t("dist.sizes")}</p>
          </div>
        </div>
      </section>

      <section className="section" id="private-label">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">{t("dist.pl.k")}</span>
            <h2>{t("dist.pl.h")}</h2>
          </div>
          <div className="grid c2">
            <div className="panel"><h3>{tr(privateLabel.t1)}</h3><p className="muted">{tr(privateLabel.d1)}</p></div>
            <div className="panel"><h3>{tr(privateLabel.t2)}</h3><p className="muted">{tr(privateLabel.d2)}</p></div>
          </div>
          <p style={{ marginTop: 20 }}>{tr(privateLabel.foot)} <a href="#request" className="link">{t("dist.pl.cta")} <Icon name="arrow" /></a></p>
        </div>
      </section>

      <section className="section alt" id="request">
        <div className="wrap two">
          <div>
            <span className="eyebrow">{t("dist.form.k")}</span>
            <h2>{t("dist.form.h")}</h2>
            <p className="muted">{t("dist.form.d")}</p>
            <ul className="contact-list">
              <li><Icon name="mail" /><div><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div></li>
              <li><Icon name="phone" /><div><a href={socialLinks.text}>{t("contact.phone")} {contactInfo.phone}</a></div></li>
              <li><Icon name="pin" /><div>{t("contact.locv")}</div></li>
            </ul>
          </div>

          <form className="panel" onSubmit={onSubmit} lang={lang}>
            <label className="field"><input value={f.name} onChange={set("name")} placeholder={t("dist.name")} aria-label={t("dist.name")} required /></label>
            <label className="field"><input value={f.company} onChange={set("company")} placeholder={t("dist.company")} aria-label={t("dist.company")} required /></label>
            <label className="field"><Icon name="mail" /><input type="email" value={f.email} onChange={set("email")} placeholder={t("dist.email")} aria-label={t("dist.email")} required /></label>
            <label className="field"><input type="tel" value={f.phone} onChange={set("phone")} placeholder={t("dist.phone")} aria-label={t("dist.phone")} /></label>
            <label className="field"><input value={f.where} onChange={set("where")} placeholder={t("dist.where")} aria-label={t("dist.where")} required /></label>
            <label className="field select">
              <select value={f.type} onChange={set("type")} aria-label={t("dist.type")} required>
                <option value="">{t("dist.type")}</option>
                {businessTypes.map((x) => <option key={x.en} value={x.en}>{tr(x)}</option>)}
              </select>
            </label>
            <label className="field select">
              <select value={f.need} onChange={set("need")} aria-label={t("dist.need")} required>
                <option value="">{t("dist.need")}</option>
                {needs.map((x) => <option key={x.en} value={x.en}>{tr(x)}</option>)}
              </select>
            </label>
            <label className="field select">
              <select value={f.volume} onChange={set("volume")} aria-label={t("dist.volume")}>
                <option value="">{t("dist.volume")}</option>
                {volumes.map((x) => <option key={x.en} value={x.en}>{tr(x)}</option>)}
              </select>
            </label>

            <fieldset className="pick">
              <legend>{t("dist.products")}</legend>
              {products.map((p) => (
                <button key={p.slug} type="button" aria-pressed={picked.includes(p.name)} onClick={() => toggle(p.name)}>{p.name}</button>
              ))}
            </fieldset>

            <label className="field"><textarea rows={4} value={f.msg} onChange={set("msg")} placeholder={t("dist.msg")} aria-label={t("dist.msg")} /></label>

            <div className="btn-row">
              <button type="submit" className="btn">{t("dist.send")} <Icon name="arrow" /></button>
              <a className="btn lime" href={wa}><Icon name="chat" /> {t("dist.wa")}</a>
            </div>
            <p className="muted tiny" style={{ marginTop: 12 }}>{t("dist.note")}</p>
          </form>
        </div>
      </section>
    </>
  );
}
