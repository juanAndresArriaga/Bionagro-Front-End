import { Link, useSearchParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { products, type ProductKind } from "../data/products";
import Icon from "../components/ui/Icon";
import Jug from "../components/ui/Jug";

const filters = [
  { id: "all", label: "prod.all" },
  { id: "foliar", label: "prod.foliar" },
  { id: "soil", label: "prod.soil" },
] as const;

export default function Products() {
  const { t, tr } = useI18n();
  const [params, setParams] = useSearchParams();
  const raw = params.get("type");
  const active: "all" | ProductKind = raw === "foliar" || raw === "soil" ? raw : "all";
  const list = products.filter((p) => active === "all" || p.kind === active);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">{t("prod.eyebrow")}</span>
          <h1>{t("prod.title")}</h1>
          <p>{t("prod.lead")}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filters" role="group">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={active === f.id}
                onClick={() => setParams(f.id === "all" ? {} : { type: f.id })}
              >
                {t(f.label)}
              </button>
            ))}
          </div>

          <div className="grid c3">
            {list.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="card pcard">
                <Jug name={p.name.replace("Bi-on ", "")} />
                <div className="top">
                  <span className={`chip${p.kind === "soil" ? " lime" : ""}`}>
                    {p.kind === "soil" ? t("prod.soil") : t("prod.foliar")}
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p>{tr(p.summary)}</p>
                <div className="chips">
                  {p.analysis.map(([k, v]) => (
                    <span className="chip dark" key={k}>
                      {k} {v}
                    </span>
                  ))}
                </div>
                <span className="link" style={{ alignSelf: "flex-start", marginTop: 6 }}>
                  {t("prod.view")} <Icon name="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
