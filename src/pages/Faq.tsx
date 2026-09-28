import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What products does Bionagro Export supply?",
    answer:
      "We supply fertilizers, biostimulants, soil conditioners, bio-control products, root developers and custom precision agriculture programs for growers and distributors.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the Contact Us page or the \"Request a Quote\" button in the navigation. Tell us the products, quantities and destination and our team will follow up within one business day.",
  },
  {
    question: "Can I track the status of my order or invoice?",
    answer:
      "Yes. Use the Track Your Request page and enter your request or invoice number along with the email used on the order. Online tracking is still rolling out, so for an immediate update you can also reach us directly by email or WhatsApp.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "Bionagro Export currently supplies farms and distribution partners across more than 15 countries, with programs tailored to local crops and soil conditions.",
  },
  {
    question: "Do you offer custom nutrition programs?",
    answer:
      "Yes, our precision agriculture design service builds a program around your specific crop, soil test results and climate rather than a one-size-fits-all formula.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/hero-crop-field.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Frequently Asked Questions</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">
                      <i className="fas fa-home" /> Home
                    </Link>
                  </li>
                  <li className="active">FAQ</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="accordion accordion-regular" id="faqAccordion">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div className="accordion-item" key={faq.question}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button${isOpen ? "" : " collapsed"}`}
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div className={`accordion-collapse collapse${isOpen ? " show" : ""}`}>
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-50">
                <p className="mb-15">Still have a question?</p>
                <Link to="/contact-us" className="btn btn-theme btn-md radius">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
