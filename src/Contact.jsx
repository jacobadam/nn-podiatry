import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("access_key", "c2198003-fca5-4918-ada8-577176be7de1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessageSent(true);
        setErrorMessage("");
        form.current.reset();
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        setErrorMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
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
          <h1
            className="mb-4 text-3xl tracking-tight font-bold text-center text-gray-900"
            id="contact-title"
          >
            Contact Me
          </h1>
          <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
            Morning, Afternoon, and Evening Appointments Available
          </p>
          {messageSent && (
            <p
              className="text-center text-cyan-600 text-xl font-bold"
              aria-live="polite"
            >
              Message sent!
            </p>
          )}
          {errorMessage && (
            <p
              className="text-center text-red-600 text-xl font-bold py-4"
              aria-live="assertive"
              role="alert"
            >
              {errorMessage}
            </p>
          )}
          <form
            className="space-y-8"
            ref={form}
            onSubmit={sendEmail}
            aria-labelledby="contact-form"
          >
            <input type="hidden" name="from_name" value="Neil Nevitt Website" />
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />

            <div>
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                id="user_name"
                type="text"
                name="name"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <input
                id="user_email"
                type="email"
                name="email"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="user_number"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                id="user_number"
                type="tel"
                name="phone"
                required
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={scrollToTop}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
