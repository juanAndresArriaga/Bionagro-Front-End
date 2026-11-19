import { Link } from "react-router-dom";
import { useI18n, type Key } from "../i18n";
import { usePageTitle } from "../lib/usePageTitle";
import { asset } from "../data/nav";
import Icon, { type IconName } from "../components/ui/Icon";
import Reveal from "../components/ui/Reveal";

const values: [IconName, Key, Key][] = [
  ["factory", "about.v1.t", "about.v1.d"],
  ["leaf", "about.v2.t", "about.v2.d"],
  ["shield", "about.v3.t", "about.v3.d"],
  ["layers", "about.v4.t", "about.v4.d"],
];

export default function AboutUs() {
  const { t } = useI18n();
  usePageTitle(t("nav.about"));
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">{t("about.eyebrow")}</span>
          <h1>{t("about.title")}</h1>
          <p>{t("about.lead")}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap band">
          <div className="img" style={{ backgroundImage: `url(${asset("about-vineyard-rows.webp")})`, minHeight: 340 }} aria-hidden="true" />
          <Reveal>
            <h2>{t("about.h")}</h2>
            <span className="swoosh" />
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <Link to="/distributors" className="btn">
              {t("about.cta")} <Icon name="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          {values.map(([icon, title, desc]) => (
            <div className="item" key={title}>
              <Icon name={icon} className="big" />
              <h3>{t(title)}</h3>
              <p>{t(desc)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
