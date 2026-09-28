import { type FormEvent, useState } from "react";
import { contactInfo, socialLinks } from "../data/nav";

export default function TrackRequest() {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <>
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/hero-precision-ag.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Track Your Request</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <a href="/">
                      <i className="fas fa-home" /> Home
                    </a>
                  </li>
                  <li className="active">Track Your Request</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area default-padding" style={{ backgroundImage: "url(assets/img/shape/28.png)" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-8 offset-lg-2">
              <div className="contact-form-style-one text-center mb-50">
                <h5 className="sub-title">Already a Bionagro Export client?</h5>
                <h2 className="heading">Track Your Request</h2>
                <p className="mt-15">
                  Enter your request or invoice number and the email used on your order to check its status.
                </p>
              </div>

              <div className="contact-form-style-one">
                <form className="contact-form contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="request-id"
                          name="request-id"
                          placeholder="Request or Invoice Number"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email used on the request"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit" id="submit">
                        <i className="fas fa-search" /> Check Status
                      </button>
                    </div>
                  </div>
                  {checked && (
                    <div className="col-lg-12 alert-notification mt-20">
                      <div className="alert-msg">
                        <i className="fas fa-info-circle" /> Online request tracking is coming soon. For an
                        update on your request right now, please contact us at{" "}
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> or via{" "}
                        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                          WhatsApp
                        </a>
                        , with your request or invoice number handy.
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
