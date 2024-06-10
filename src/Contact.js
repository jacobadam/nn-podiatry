import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "6WTU0L3Ur4LEzEGob",
      })
      .then(
        () => {
          console.log("Success!");
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <div className="contactBox">
        <h1>Contact Me</h1>
        <p>Tel No: 0151-722 3840</p>
        <p>Mobile No: 07946 582000</p>
        <p>Email: neilnev@hotmail.com</p>

        <h1>Appointment Times</h1>
        <p>Please contact me.</p>
        <p>Evenings available</p>

        <p>
          Receipts given for Medicash, Simply Health or other health providers
        </p>

        <h1>Address</h1>
        <p>183 Queens Drive</p>
        <p>Wavertree</p>
        <p>Liverpool, L15 6xU</p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name: </label>
        <input type="text" name="user_name" required />
        <label>Email: </label>
        <input type="email" name="user_email" required />
        <label>Phone: </label>
        <input type="tel" name="user_number" required />
        <label>Message: </label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
