import { useSearchParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { usePageTitle } from "../lib/usePageTitle";
import { contactInfo, socialLinks } from "../data/nav";
import { products } from "../data/products";
import Icon from "../components/ui/Icon";
import RequestForm from "../components/RequestForm";

export default function ContactUs() {
  const { t } = useI18n();
  usePageTitle(t("nav.contact"));
  const [params] = useSearchParams();
  const product = params.get("product") ?? "";
  const intent = params.get("intent");

  // A product link pre-selects it; anything else (for example a study title) is carried along as a reference.
  const known = products.find((p) => p.name === product);
  const need = intent === "sample" ? "Samples" : intent === "quote" ? "Price list" : "";

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
          </div>

          <RequestForm
            key={product + (intent ?? "")}
            initialProducts={known ? [known.name] : []}
            initialNeed={need}
            reference={known ? "" : product}
          />
        </div>
      </section>
    </>
  );
}
