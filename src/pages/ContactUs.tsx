import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { contactInfo, socialLinks } from "../data/nav";
import Icon from "../components/ui/Icon";

export default function ContactUs() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const product = params.get("product");
  const intent = params.get("intent");
  const subject = product ? `${intent === "sample" ? "Sample request" : "Quote request"}: ${product}` : "Bionagro inquiry";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // No backend yet: hand the message to the visitor's mail client.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${msg}\n\n${name}\n${email}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">{t("contact.eyebrow")}</span>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.lead")}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <form className="panel" onSubmit={onSubmit}>
            {product && <p className="chip lime">{subject}</p>}
            <label className="field">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("contact.name")} aria-label={t("contact.name")} required />
            </label>
            <label className="field">
              <Icon name="mail" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("contact.email")} aria-label={t("contact.email")} required />
            </label>
            <label className="field">
              <textarea rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={t("contact.msg")} aria-label={t("contact.msg")} required />
            </label>
            <button type="submit" className="btn">
              {t("contact.send")} <Icon name="arrow" />
            </button>
          </form>

          <div>
            <ul className="contact-list">
              <li>
                <Icon name="phone" />
                <div>
                  <h3 style={{ marginBottom: 2 }}>{t("contact.phone")}</h3>
                  <a href={socialLinks.text}>{contactInfo.phone}</a>
                </div>
              </li>
              <li>
                <Icon name="mail" />
                <div>
                  <h3 style={{ marginBottom: 2 }}>{t("contact.mail")}</h3>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </li>
              <li>
                <Icon name="pin" />
                <div>
                  <h3 style={{ marginBottom: 2 }}>{t("contact.loc")}</h3>
                  <span>{t("contact.locv")}</span>
                </div>
              </li>
            </ul>
            <a className="btn lime" href={socialLinks.text}>
              <Icon name="chat" /> {t("contact.wa")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
