import { useState, type FormEvent } from "react";
import { useI18n, type Key } from "../i18n";
import { sendRequest } from "../lib/sendRequest";
import { products } from "../data/products";
import { businessTypes, needs, volumes } from "../data/distributors";
import Icon from "./ui/Icon";

const empty = { name: "", company: "", email: "", phone: "", where: "", type: "", need: "", volume: "", msg: "" };

/** One request form for the whole site: contact, price/sample requests and distributor applications. */
export default function RequestForm({ initialProducts = [], initialNeed = "", reference = "" }: { initialProducts?: string[]; initialNeed?: string; reference?: string }) {
  const { t, tr, lang } = useI18n();
  const [f, setF] = useState({ ...empty, need: initialNeed });
  const [picked, setPicked] = useState<string[]>(initialProducts);
  const lbl = (k: Key) => t(k).replace(/\s*(\*|\(.*\))$/, "");
  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggle = (name: string) => setPicked((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));

  const subject = `Bionagro request: ${f.company || f.name}`.trim();
  const body = [
    reference && `Re: ${reference}`,
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

  // Delivered through sendRequest: a form endpoint when configured, otherwise the visitor's email app.
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const r = await sendRequest("full-form", { ...f, products: picked.join(", "), reference }, subject, body);
      if (r === "sent") {
        setSent(true);
        setF({ ...empty });
        setPicked([]);
      }
    } catch {
      /* falls back to the mail app inside sendRequest */
    }
  };

  return (
          <form className="panel hero-form" onSubmit={onSubmit} lang={lang}>
            <h2>{t("dist.form.h")}</h2>
            <p className="muted tiny">{t("dist.form.d")}</p>
            {sent && <p className="note" role="status"><Icon name="check" /> {t("quick.ok")}</p>}
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
            </div>
            <p className="muted tiny" style={{ marginTop: 12 }}>{t("dist.note")}</p>
          </form>
  );
}
