import { useI18n } from "../i18n";
import { contactInfo, socialLinks } from "../data/nav";
import { hero, perks, plant, privateLabel, steps } from "../data/distributors";
import Icon from "../components/ui/Icon";
import RequestForm from "../components/RequestForm";
import Reveal from "../components/ui/Reveal";

export default function Distributors() {
  const { t, tr } = useI18n();

  return (
    <>
      <section className="page-head dist-hero" id="request">
        <div className="wrap">
          <div>
            <span className="eyebrow">{t("dist.eyebrow")}</span>
            <h1>{tr(hero.h)}</h1>
            <p>{tr(hero.d)}</p>
            <ul className="perk-list">
              {perks.map((p) => (
                <li key={p.t.en}>
                  <Icon name={p.icon} />
                  <div><b>{tr(p.t)}</b><span>{tr(p.d)}</span></div>
                </li>
              ))}
            </ul>
            <ul className="contact-list light">
              <li><Icon name="mail" /><div><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div></li>
              <li><Icon name="phone" /><div><a href={socialLinks.text}>{t("contact.phone")} {contactInfo.phone}</a></div></li>
              <li><Icon name="pin" /><div>{t("contact.locv")}</div></li>
            </ul>
          </div>
          <RequestForm />
        </div>
      </section>


      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">{t("dist.how.k")}</span>
            <h2>{t("dist.how.h")}</h2>
          </div>
          <ol className="how-g">
            {steps.map((s, i) => (
              <li key={s.t.en}>
                <Reveal>
                  <div className="card how">
                    <span className="how-n">{i + 1}</span>
                    <h3>{tr(s.t)}</h3>
                    <p>{tr(s.d)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two">
          <div>
            <span className="eyebrow">{t("dist.plant.k")}</span>
            <h2>{t("dist.plant.h")}</h2>
            <p>{tr(plant.d)}</p>
            <ul className="checks">
              {plant.points.map((x) => (
                <li key={x.en}><span className="dot"><Icon name="check" /></span>{tr(x)}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <div className="sizes">
              {plant.sizes.map((s) => (
                <div key={s.n}><b>{s.n}</b><span>{s.v}</span></div>
              ))}
            </div>
            <p className="muted" style={{ margin: "14px 0 0" }}>{t("dist.sizes")}</p>
          </div>
        </div>
      </section>

      <section className="section" id="private-label">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">{t("dist.pl.k")}</span>
            <h2>{t("dist.pl.h")}</h2>
          </div>
          <div className="grid c2">
            <div className="panel"><h3>{tr(privateLabel.t1)}</h3><p className="muted">{tr(privateLabel.d1)}</p></div>
            <div className="panel"><h3>{tr(privateLabel.t2)}</h3><p className="muted">{tr(privateLabel.d2)}</p></div>
          </div>
          <p style={{ marginTop: 20 }}>{tr(privateLabel.foot)} <a href="#request" className="link">{t("dist.pl.cta")} <Icon name="arrow" /></a></p>
        </div>
      </section>

    </>
  );
}
