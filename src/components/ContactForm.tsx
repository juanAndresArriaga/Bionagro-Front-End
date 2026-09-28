import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend is wired up yet - this just confirms receipt in the UI.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="col-lg-12 alert-notification">
        <div className="alert-msg">
          <i className="fas fa-check-circle" /> Thanks for reaching out — our team will get back to you shortly.
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group comments">
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Tell Us About Your Crop or Partnership *"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <button type="submit" name="submit" id="submit">
            <i className="fa fa-paper-plane" /> Start the Conversation
          </button>
        </div>
      </div>
    </form>
  );
}
