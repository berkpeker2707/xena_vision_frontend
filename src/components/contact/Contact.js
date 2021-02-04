import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contanctComponent">
      <form className="contactForm">
        <label for="name">Your Full Name</label>
        <input
          className="contactInputName"
          type="text"
          id="name"
          name="name"
          placeholder="Your Full Name"
        />

        <label for="email">Email</label>
        <input
          className="contactInputEmail"
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message.."
          style={{ height: "200px" }}
        ></textarea>

        <input
          className="contactInputSubmit"
          type="submit"
          value="Submit"
          style={{ border: "1px solid", transition: "0.7s" }}
        />
      </form>
    </div>
  );
}
