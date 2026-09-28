import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { contactInfo } from "../data/nav";

export default function ContactUs() {
  return (
    <>
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/hero-crop-field.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Contact Bionagro Export</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">
                      <i className="fas fa-home" /> Home
                    </Link>
                  </li>
                  <li className="active">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area default-padding" style={{ backgroundImage: "url(assets/img/shape/28.png)" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-7 mb-md-50">
              <div className="contact-form-style-one">
                <h5 className="sub-title">Let's Grow Together</h5>
                <h2 className="heading">Start a Conversation</h2>
                <ContactForm />
              </div>
            </div>

            <div className="col-tact-stye-one col-lg-5 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-style-one-info">
                <h2>
                  Contact <span>Information</span>
                </h2>
                <p>
                  Tell us about your crop, your market, or your partnership goals. Whether you need a tailored
                  nutrition program or want to grow with us as a distribution partner, our team is ready to listen.
                </p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h5 className="title">Hotline</h5>
                      <a href="#hotline">{contactInfo.phone}</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <h5 className="title">Our Location</h5>
                      <p>{contactInfo.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope-open-text" />
                    </div>
                    <div className="info">
                      <h5 className="title">Official Email</h5>
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
