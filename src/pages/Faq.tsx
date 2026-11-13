import { Link } from "react-router-dom";
import { useI18n, type Key } from "../i18n";

const items = [1, 2, 3, 4, 5] as const;

export default function Faq() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">{t("nav.faq")}</span>
          <h1>{t("faq.title")}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="faq">
            {items.map((n) => (
              <details key={n} open={n === 1}>
                <summary>{t(`faq.q${n}` as Key)}</summary>
                <p>{t(`faq.a${n}` as Key)}</p>
              </details>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <p className="muted">{t("faq.still")}</p>
            <Link to="/contact" className="btn">{t("nav.contact")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
