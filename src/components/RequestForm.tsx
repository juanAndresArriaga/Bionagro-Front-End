import { useState, type FormEvent } from "react";
import { useI18n, type Key } from "../i18n";
import { fallbackHref, sendRequest } from "../lib/sendRequest";
import { products } from "../data/products";
import { businessTypes, needs, volumes } from "../data/distributors";
import Icon from "./ui/Icon";
import Field from "./ui/Field";

const empty = { name: "", company: "", email: "", phone: "", where: "", type: "", need: "", volume: "", msg: "" };
const hasEndpoint = Boolean(import.meta.env.VITE_FORM_ENDPOINT);

/** One request form for the whole site: contact, price/sample requests and distributor applications. */
export default function RequestForm({ initialProducts = [], initialNeed = "", reference = "" }: { initialProducts?: string[]; initialNeed?: string; reference?: string }) {
  const { t, tr, lang } = useI18n();
  const [f, setF] = useState({ ...empty, need: initialNeed });
  const [picked, setPicked] = useState<string[]>(initialProducts);
  const [status, setStatus] = useState<"idle" | "busy" | "sent" | "error">("idle");
  // Field names for the email body, without the "*" / "(optional)" hints shown on screen.
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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "busy") return;
    setStatus("busy");
    const r = await sendRequest("full-form", { ...f, products: picked.join(", "), reference }, subject, body);
    if (r === "sent") {
      setF({ ...empty });
      setPicked([]);
    }
    setStatus(r === "sent" ? "sent" : r === "error" ? "error" : "idle");
  };

  return (
    <form className="panel hero-form" onSubmit={onSubmit} lang={lang}>
      <h2>{t("dist.form.h")}</h2>
      <p className="muted tiny">{t("dist.form.d")}</p>
      {status === "sent" && <p className="note" role="status"><Icon name="check" /> {t("quick.ok")}</p>}

      <Field label={t("dist.name")}><input value={f.name} onChange={set("name")} autoComplete="name" required /></Field>
      <Field label={t("dist.company")}><input value={f.company} onChange={set("company")} autoComplete="organization" required /></Field>
      <Field label={t("dist.email")} icon="mail"><input type="email" value={f.email} onChange={set("email")} autoComplete="email" required /></Field>
      <Field label={t("dist.phone")}><input type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" /></Field>
      <Field label={t("dist.where")}><input value={f.where} onChange={set("where")} autoComplete="country-name" required /></Field>
      <Field label={t("dist.type")} select>
        <select value={f.type} onChange={set("type")} required>
          <option value="">—</option>
          {businessTypes.map((x) => <option key={x.en} value={x.en}>{tr(x)}</option>)}
        </select>
      </Field>
      <Field label={t("dist.need")} select>
        <select value={f.need} onChange={set("need")} required>
          <option value="">—</option>
          {needs.map((x) => <option key={x.en} value={x.en}>{tr(x)}</option>)}
        </select>
      </Field>
      <Field label={t("dist.volume")} select>
        <select value={f.volume} onChange={set("volume")}>
          <option value="">—</option>
          {volumes.map((x) => <option key={x.en} value={x.en}>{tr(x)}</option>)}
        </select>
      </Field>

      <fieldset className="pick">
        <legend>{t("dist.products")}</legend>
        {products.map((p) => (
          <button key={p.slug} type="button" aria-pressed={picked.includes(p.name)} onClick={() => toggle(p.name)}>{p.name}</button>
        ))}
      </fieldset>

      <Field label={t("dist.msg")}><textarea rows={4} value={f.msg} onChange={set("msg")} /></Field>

      {status === "error" && (
        <p className="note err" role="alert">
          <Icon name="info" />
          <span>{t("form.error")} <a className="link" href={fallbackHref("mail", subject, body)}>{t("form.mail")}</a></span>
        </p>
      )}

      <div className="btn-row">
        <button type="submit" className="btn" disabled={status === "busy"}>
          {status === "busy" ? t("form.sending") : <>{t("dist.send")} <Icon name="arrow" /></>}
        </button>
      </div>
      {!hasEndpoint && <p className="muted tiny mt-12">{t("dist.note")}</p>}
    </form>
  );
}
