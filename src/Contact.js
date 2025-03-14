import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "6WTU0L3Ur4LEzEGob",
      })
      .then(
        () => {
          console.log("Success!");
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Helmet>
        <title>Neil Nevitt - Contact</title>
        <link rel="canonical" href="https://www.neilnevitt.com/contact" />
        <meta
          name="description"
          content="Contact Neil Nevitt for appointments and inquiries. Morning, afternoon, and evening appointments available."
        />
      </Helmet>
      <section aria-labelledby="contact-title">
        <div className="max-w-screen-md mx-auto p-4 sm:px-6 lg:px-8">
          <h2
            className="mb-4 text-3xl tracking-tight font-bold text-center text-gray-900 dark:text-white"
            id="contact-title"
          >
            Contact Me
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Morning, Afternoon, and Evening Appointments Available
          </p>
          {messageSent && (
            <p
              className="text-center text-red-600 text-xl font-bold"
              aria-live="polite"
            >
              Message sent!
            </p>
          )}
          <form
            className="space-y-8"
            ref={form}
            onSubmit={sendEmail}
            aria-labelledby="contact-form"
          >
            <div>
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
                aria-required="true"
                aria-describedby="user_name-description"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
                aria-required="true"
                aria-describedby="user_email-description"
              />
            </div>
            <div>
              <label
                htmlFor="user_number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                id="user_number"
                type="tel"
                name="user_number"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
                aria-required="true"
                aria-describedby="user_number-description"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                aria-required="true"
                aria-describedby="message-description"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              aria-label="Send message"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
