import { Link } from "react-router-dom";
import { contactInfo } from "../data/nav";

export default function Footer() {
  return (
    <footer className="bg-dark text-light" style={{ backgroundImage: "url(assets/img/shape/brush-down.png)" }}>
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <div className="footer-item about">
                <img className="logo" src="assets/img/bionagro-logo-light.svg" alt="Bionagro Export" />
                <p>
                  Sustainable agricultural solutions tailored to each crop, delivered through partnerships with
                  growers and distributors worldwide.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your Email" className="form-control" name="email" />
                  <button type="submit"> Go</button>
                </form>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 item">
              <div className="footer-item link">
                <h4 className="widget-title">Explore</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">Products</Link>
                  </li>
                  <li>
                    <Link to="/track-request">Track Your Request</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 item">
              <div className="footer-item recent-post">
                <h4 className="widget-title">Our Product Lines</h4>
                <ul>
                  <li>
                    <div className="info">
                      <h5>
                        <Link to="/services">Fertilizers &amp; Soluble Nutrition</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <h5>
                        <Link to="/services">Biostimulants &amp; Bio-Control</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <h5>
                        <Link to="/services">Soil Conditioners &amp; Root Developers</Link>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 item">
              <div className="footer-item contact">
                <h4 className="widget-title">Contact Info</h4>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-home" />
                    </div>
                    <div className="content">
                      <strong>Address:</strong> {contactInfo.address}
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="content">
                      <strong>Phone:</strong> {contactInfo.phone}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-6">
              <p>
                &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by <Link to="/">Bionagro Export</Link>
              </p>
            </div>
            <div className="col-lg-6 text-end">
              <ul>
                <li>
                  <Link to="/about-us">Terms</Link>
                </li>
                <li>
                  <Link to="/about-us">Privacy</Link>
                </li>
                <li>
                  <Link to="/contact-us">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-right-bottom">
        <img src="assets/img/shape/10.png" alt="" />
      </div>
      <div className="shape-left-bottom">
        <img src="assets/img/shape/11.png" alt="" />
      </div>
    </footer>
  );
}
