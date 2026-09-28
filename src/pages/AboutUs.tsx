import { Link } from "react-router-dom";

const values = [
  {
    icon: "fas fa-seedling",
    title: "Soil Health",
    text: "Soil conditioners and root developers that rebuild structure and water retention over time.",
  },
  {
    icon: "fas fa-tint",
    title: "Water Efficiency",
    text: "Programs designed to help growers get more from every liter applied to the field.",
  },
  {
    icon: "fas fa-leaf",
    title: "Sustainability",
    text: "Environmentally responsible formulations that support long-term land health, not just one harvest.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Quality Yields",
    text: "Fertilizers and biostimulants engineered to improve both crop volume and quality.",
  },
];

export default function AboutUs() {
  return (
    <>
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/hero-crop-field.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>About Bionagro Export</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">
                      <i className="fas fa-home" /> Home
                    </Link>
                  </li>
                  <li className="active">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6 mb-md-50">
              <img
                src="assets/img/about-vineyard-rows.jpg"
                alt="Vineyard rows under a Bionagro Export soil program"
                style={{ width: "100%", borderRadius: 8 }}
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="site-heading">
                <h5 className="sub-title">Our Purpose</h5>
                <h2 className="title mb-25">Sustainable Agriculture Starts with the Right Formula</h2>
              </div>
              <p>
                Bionagro Export partners with growers, agronomists, and distributors to create crop-specific
                nutrition and biocontrol programs. By matching our fertilizers, biostimulants, and soil solutions
                to each crop and growing environment, we help improve productivity while caring for soil, water,
                and the future of the land.
              </p>
              <p>
                From soluble fertilizers to root developers, everything we export is guided by one belief:
                sustainable progress is stronger when it is built together. We are always ready to develop lasting
                partnerships with people and organizations who share that vision.
              </p>
              <Link to="/contact-us" className="btn btn-theme btn-md radius mt-15">
                Explore a Partnership
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">What Guides Us</h5>
                <h2 className="title">Built Around Every Crop and Every Field</h2>
                <div className="devider" />
              </div>
            </div>
          </div>
          <div className="row">
            {values.map((value) => (
              <div className="col-lg-3 col-md-6 mb-30" key={value.title}>
                <div className="text-center" style={{ padding: "20px 10px" }}>
                  <i className={value.icon} style={{ fontSize: 40, color: "var(--color-primary)" }} />
                  <h4 className="mt-15 mb-10">{value.title}</h4>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
