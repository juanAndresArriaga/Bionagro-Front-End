import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { usePageTitle } from "../lib/usePageTitle";

export default function NotFound() {
  const { t } = useI18n();
  usePageTitle(t("nf.title"));
  return (
    <section className="section center">
      <div className="wrap">
        <p className="big-stat">404</p>
        <h2>{t("nf.title")}</h2>
        <p className="muted">{t("nf.d")}</p>
        <Link to="/" className="btn">{t("nf.back")}</Link>
      </div>
    </section>
  );
}
