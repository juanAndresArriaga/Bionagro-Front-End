import { Link } from "react-router-dom";
import { productLines } from "../data/content";

export default function Services() {
  return (
    <>
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/hero-crop-field.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Our Products</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">
                      <i className="fas fa-home" /> Home
                    </Link>
                  </li>
                  <li className="active">Products</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="product-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Sustainable Crop Solutions</h5>
                <h2 className="title">The Building Blocks of Your Custom Formula</h2>
                <div className="devider" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <ul className="vt-products text-center columns-4">
              {productLines.map((product) => (
                <li className="product" key={product.name}>
                  <div className="product-contents">
                    <div className="product-image">
                      <div className="icon-tile">
                        <i className={product.icon} />
                      </div>
                    </div>
                    <div className="product-caption">
                      <div className="product-tags">
                        {product.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <h4 className="product-title">{product.name}</h4>
                      <p className="mb-10">{product.description}</p>
                      <Link to="/contact-us" className="btn btn-theme btn-sm radius">
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="default-padding-bottom text-center">
        <div className="container">
          <h3 className="mb-15">Don't see what your operation needs?</h3>
          <p className="mb-20">
            We tailor nutrition programs to your crop, soil conditions, climate, and production goals.
          </p>
          <Link to="/contact-us" className="btn btn-theme btn-md radius">
            Create Your Crop Program
          </Link>
        </div>
      </div>
    </>
  );
}
