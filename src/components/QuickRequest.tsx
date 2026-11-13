import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";
import { products } from "../data/products";
import { sendRequest } from "../lib/sendRequest";
import Icon from "./ui/Icon";

/** Floating "Contact us" button that opens a three-field pop-up: name, phone, optional product. */
export default function QuickRequest() {
  const { t } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");

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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("busy");
    const body = [`Name: ${name}`, `Phone: ${phone}`, product && `Product: ${product}`].filter(Boolean).join("\n");
    try {
      const r = await sendRequest("quick-popup", { name, phone, product }, `Callback request: ${name}`, body);
      setState(r === "sent" ? "done" : "idle");
      if (r === "sent") {
        setName("");
        setPhone("");
        setProduct("");
      }
    } catch {
      setState("idle");
    }
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
            <label className="field">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("quick.name")} aria-label={t("quick.name")} autoComplete="name" required />
            </label>
            <label className="field">
              <Icon name="phone" />
              <input type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("quick.phone")} aria-label={t("quick.phone")} autoComplete="tel" required />
            </label>
            <label className="field select">
              <select value={product} onChange={(e) => setProduct(e.target.value)} aria-label={t("quick.product")}>
                <option value="">{t("quick.product")}</option>
                {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
              </select>
            </label>
            <button type="submit" className="btn block" disabled={state === "busy"}>
              {t("quick.send")} <Icon name="arrow" />
            </button>
            <p className="tiny muted" style={{ margin: "12px 0 0" }}>
              <Link to="/contact" onClick={close} className="link">{t("quick.full")}</Link>
            </p>
          </form>
        )}
      </dialog>
    </>
  );
}
