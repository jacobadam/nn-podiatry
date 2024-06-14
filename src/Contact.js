import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
      <div className="w-full h-32">
        <img
          src="pebble-footprint.webp"
          alt="Banner"
          className="w-full object-cover"
        />
      </div>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Evening Appointments Available.
          </p>
          {messageSent && (
            <p className="text-center text-white text-xl font-bold">
              Message sent!
            </p>
          )}
          <form className="space-y-8" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                name="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Number
              </label>
              <input
                type="tel"
                name="user_number"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="block w-full rounded bg-rose-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

// <div>
//   <div classNameName="contactBox">
//     <h1>Contact Me</h1>
//     <p>Tel No: 0151-722 3840</p>
//     <p>Mobile No: 07946 582000</p>
//     <p>Email: neilnev@hotmail.com</p>

//     <h1>Appointment Times</h1>
//     <p>Please contact me.</p>
//     <p>Evenings available</p>

//     <p>
//       Receipts given for Medicash, Simply Health or other health providers
//     </p>

//     <h1>Address</h1>
//     <p>183 Queens Drive</p>
//     <p>Wavertree</p>
//     <p>Liverpool, L15 6xU</p>
//   </div>

//   <form ref={form} onSubmit={sendEmail}>
//     <label>Name: </label>
//     <input type="text" name="user_name" required />
//     <label>Email: </label>
//     <input type="email" name="user_email" required />
//     <label>Phone: </label>
//     <input type="tel" name="user_number" required />
//     <label>Message: </label>
//     <textarea name="message" />
//     <input type="submit" value="Send" />
//   </form>
// </div>
