import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setMessageSent(false);

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
        form.current.reset();
        scrollToTop();
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        setErrorMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="w-full bg-cyan-600 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="contact-title"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Contact
            </h1>
            <p className="mt-4 text-base leading-7 text-cyan-100 sm:text-lg">
              Morning, afternoon, and evening appointments available.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {messageSent && (
            <div
              className="mb-6 rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-medium text-cyan-800 sm:text-base"
              aria-live="polite"
            >
              Message sent successfully.
            </div>
          )}

          {errorMessage && (
            <div
              className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 sm:text-base"
              aria-live="assertive"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          <form
            className="space-y-6"
            ref={form}
            onSubmit={sendEmail}
            aria-label="Contact form"
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
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Your Name
              </label>
              <input
                id="user_name"
                type="text"
                name="name"
                required
                className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-sm transition focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Your Email
              </label>
              <input
                id="user_email"
                type="email"
                name="email"
                required
                className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-sm transition focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>

            <div>
              <label
                htmlFor="user_number"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Phone Number
              </label>
              <input
                id="user_number"
                type="tel"
                name="phone"
                required
                className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-sm transition focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="block w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-sm transition focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-center text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
