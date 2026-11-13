import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { asset } from "../data/nav";
import Icon, { type IconName } from "../components/ui/Icon";
import Reveal from "../components/ui/Reveal";

const features: { icon: IconName; t: "home.f1.t" | "home.f2.t" | "home.f3.t" | "home.f4.t"; d: "home.f1.d" | "home.f2.d" | "home.f3.d" | "home.f4.d" }[] = [
  { icon: "factory", t: "home.f1.t", d: "home.f1.d" },
  { icon: "flask", t: "home.f2.t", d: "home.f2.d" },
  { icon: "leaf", t: "home.f3.t", d: "home.f3.d" },
  { icon: "compass", t: "home.f4.t", d: "home.f4.d" },
];

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${asset("hero-crop-field.jpg")})` }}>
        <div className="wrap">
          <div className="copy">
            <h1>{t("home.title")}</h1>
            <span className="swoosh" />
            <p className="lead">{t("home.lead")}</p>
            <div className="actions">
              <Link to="/distributors" className="btn">
                {t("nav.distributor")} <Icon name="arrow" />
              </Link>
              <Link to="/research" className="btn outline">
                <Icon name="play" /> {t("home.watch")}
              </Link>
            </div>
            <div className="trust">
              {(["home.trust1", "home.trust2", "home.trust3"] as const).map((k) => (
                <span key={k}>
                  <Icon name="check" /> {t(k)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          {features.map((f) => (
            <div className="item" key={f.t}>
              <Icon name={f.icon} className="big" />
              <h3>{t(f.t)}</h3>
              <p>{t(f.d)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap tech-teaser">
          <Reveal>
            <span className="eyebrow">{t("nav.tech")}</span>
            <h2>{t("about.h")}</h2>
            <p className="muted">{t("home.tech.d")}</p>
            <Link to="/technology" className="link">
              {t("home.tech.cta")} <Icon name="arrow" />
            </Link>
          </Reveal>
          <img src={asset("bi-on.svg")} alt="Bi-on" width="360" height="160" />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="center">
            <h2>{t("home.sol.h")}</h2>
            <span className="swoosh" />
            <p className="muted">{t("home.sol.d")}</p>
          </Reveal>
          <Reveal>
            <div className="grid c2" style={{ marginTop: 32 }}>
              <Link to="/products?type=foliar" className="card">
                <div className="media" style={{ backgroundImage: `url(${asset("hero-precision-ag.jpg")})` }} />
                <div className="solution">
                  <Icon name="leaf" className="big" />
                  <div>
                    <h3>{t("home.sol1.t")}</h3>
                    <p>{t("home.sol1.d")}</p>
                  </div>
                  <Icon name="arrow" />
                </div>
              </Link>
              <Link to="/products?type=soil" className="card">
                <div className="media" style={{ backgroundImage: `url(${asset("about-vineyard-rows.jpg")})` }} />
                <div className="solution">
                  <Icon name="layers" className="big" />
                  <div>
                    <h3>{t("home.sol2.t")}</h3>
                    <p>{t("home.sol2.d")}</p>
                  </div>
                  <Icon name="arrow" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="banner" style={{ backgroundImage: `url(${asset("hero-precision-ag.jpg")})` }}>
              <div className="inner">
                <span className="eyebrow">{t("res.eyebrow")}</span>
                <h2>{t("res.title")}</h2>
                <p>{t("home.res.d")}</p>
                <Link to="/research" className="btn light">
                  {t("home.res.cta")} <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
