import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/done_2.json";
import contactAnimation from "../../../public/animations/contact.json";
import "./Contact.css";
export default function Contact() {
  const [state, handleSubmit] = useForm("xdknaqnv");
  return (
    <section className="contact-me">
      <h1 className="title">
        <span className="icon-envelope1"></span>
        Contact me
      </h1>
      <p className="subtitle">
        Contact me for further details about my work and get notified about new
        projects.
      </p>

      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <h1 className="flex" style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              <Lottie loop={false} style={{height: "37px"}} animationData={doneAnimation}></Lottie>
              Your message has been sent successfully.
            </h1>
          )}
        </form>
        <div className="animation">
        <Lottie className="contact-animation" loop={true} style={{height: "400px", marginBottom: "8rem"}} animationData={contactAnimation}></Lottie>  
        </div>
      </div>
    </section>
  );
}
