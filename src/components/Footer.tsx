import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { asset, contactInfo, socialLinks } from "../data/nav";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <img src={asset("bionagro-logo-light.svg")} alt="Bionagro" width="160" height="42" loading="lazy" />
            <p>{t("footer.about")}</p>
          </div>
          <div>
            <h4>{t("footer.explore")}</h4>
            <ul>
              <li><Link to="/products">{t("nav.products")}</Link></li>
              <li><Link to="/technology">{t("nav.tech")}</Link></li>
              <li><Link to="/research">{t("nav.research")}</Link></li>
              <li><Link to="/about">{t("nav.about")}</Link></li>
              <li><Link to="/faq">{t("nav.faq")}</Link></li>
              <li><Link to="/distributors">{t("nav.distributor")}</Link></li>
              <li><Link to="/contact">{t("nav.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t("footer.contact")}</h4>
            <ul>
              <li><a href={socialLinks.text}>{t("contact.phone")} {contactInfo.phone}</a></li>
              <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
              <li>{t("contact.locv")}</li>
            </ul>
          </div>
          <div>
            <h4>{t("footer.follow")}</h4>
            <ul>
              <li><a href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">{t("footer.legal")}</div>
      </div>
    </footer>
  );
}
