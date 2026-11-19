import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mrpzvwlk");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="contact-section" id="contact" data-reveal>
      <div className="contact-copy" data-reveal>
        <span className="mini-label">Get In Touch</span>
        <h2>Let’s Work Together</h2>

        <p>
          Have a project in mind? Let’s discuss how we can bring your vision to life.
        </p>

        <ul className="contact-info">
          <li>Email: devillalbert@gmail.com</li>
          <li>Phone: +639530725888 </li>
          <li>Location: Makati City, Metro Manila</li>
        </ul>
      </div>

      <form ref={formRef} className="contact-form" data-reveal onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Your Name
            <input type="text" name="name" placeholder="Your Name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </label>

          <label>
            Your Email
            <input type="email" name="email" placeholder="Your Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
        </div>

        <label>
          Subject
          <input type="text" name="subject" placeholder="Subject" required />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        </label>

        <label>
          Project Details
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
          />
          <ValidationError prefix="Project Details" field="message" errors={state.errors} />
        </label>

        <button type="submit" className="primary-button wide-button" disabled={state.submitting}>
          {state.submitting && <span className="contact-form-spinner" aria-hidden="true" />}
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {state.succeeded && <p role="status">Thanks for your message!</p>}
        {state.errors && !state.errors.getFormErrors().length && (
          <p role="alert">There was an error sending your message. Please try again.</p>
        )}
      </form>
    </section>
  );
};
