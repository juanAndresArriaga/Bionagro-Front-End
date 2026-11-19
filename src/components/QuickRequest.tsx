import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";
import { products } from "../data/products";
import { fallbackHref, sendRequest } from "../lib/sendRequest";
import Icon from "./ui/Icon";
import Field from "./ui/Field";

/** Floating "Contact us" button that opens a three-field pop-up: name, phone, optional product. */
export default function QuickRequest() {
  const { t } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  const navigate = useNavigate();
  const open = () => {
    // Large screens go to the full Contact page; the pop-up is for phones.
    if (window.matchMedia("(min-width: 900px)").matches) return navigate("/contact");
    setState("idle");
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();

  // Close when tapping the dark backdrop.
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onClick = (e: MouseEvent) => e.target === d && d.close();
    d.addEventListener("click", onClick);
    return () => d.removeEventListener("click", onClick);
  }, []);

  // The message goes to the Bionagro team, so it stays in English whatever the site language.
  const intro = `Hi Bionagro, I want to become a partner${product ? ` with ${product}` : ""}.`;
  const body = [intro, `Name: ${name}`, `Phone: ${phone}`].join("\n");
  const subject = `Partner request: ${name}`;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (state === "busy") return;
    setState("busy");
    const r = await sendRequest("quick-popup", { name, phone, product }, subject, body, "sms");
    if (r === "sent") {
      setName("");
      setPhone("");
      setProduct("");
    }
    setState(r === "sent" ? "done" : r === "error" ? "error" : "idle");
  };

  return (
    <>
      <button type="button" className="chat" onClick={open} aria-label={t("chat")}>
        <Icon name="chat" /> <span>{t("chat")}</span>
      </button>

      <dialog ref={ref} className="quick" aria-labelledby="quick-h">
        <button type="button" className="quick-x" onClick={close} aria-label={t("quick.close")}>
          <Icon name="close" />
        </button>
        {state === "done" ? (
          <div className="quick-ok">
            <Icon name="check" className="big" />
            <h2 id="quick-h">{t("quick.ok")}</h2>
            <button type="button" className="btn" onClick={close}>{t("quick.close")}</button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <h2 id="quick-h">{t("quick.title")}</h2>
            <p className="muted">{t("quick.d")}</p>
            <Field label={t("quick.name")}>
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
            </Field>
            <Field label={t("quick.phone")} icon="phone">
              <input type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" required />
            </Field>
            <Field label={t("quick.product")} select>
              <select value={product} onChange={(e) => setProduct(e.target.value)}>
                <option value="">—</option>
                {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
              </select>
            </Field>
            {state === "error" && (
              <p className="note err" role="alert">
                <Icon name="info" />
                <span>{t("form.error")} <a className="link" href={fallbackHref("sms", subject, body)}>{t("form.sms")}</a></span>
              </p>
            )}
            <button type="submit" className="btn block" disabled={state === "busy"}>
              {state === "busy" ? t("form.sending") : <>{t("quick.send")} <Icon name="arrow" /></>}
            </button>
            <p className="tiny muted mt-12">
              <Link to="/contact" onClick={close} className="link">{t("quick.full")}</Link>
            </p>
          </form>
        )}
      </dialog>
    </>
  );
}
