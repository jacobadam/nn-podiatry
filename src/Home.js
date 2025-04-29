import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./index.css";

export default function Home() {
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <Helmet>
        <title>
          Neil Nevitt | HCPC Registered Podiatrist in Liverpool – DPodM, MRCoP
        </title>
        <link rel="canonical" href="https://www.neilnevitt.com/" />
        <meta
          name="description"
          content="Neil Nevitt - Experienced Liverpool based podiatrist with a comprehensive background in foot health. HCPC (State) Registered. DPodM, MRCoP."
        />
      </Helmet>
      <section className="relative flex flex-col justify-center w-full min-h-[60vh] lg:mt-16">
        {/* Background Image */}
        <figure
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/homepage-image.webp')",
          }}
          aria-labelledby="hero-image-description"
        >
          <figcaption id="hero-image-description" className="sr-only">
            A podiatrist providing foot care to a patient.
          </figcaption>
        </figure>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-cyan-600 opacity-60 lg:opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center md:items-end md:text-right px-6 md:px-16 lg:px-24">
          <h2 className="tracking-wide text-white text-sm font-semibold md:text-base mb-4">
            Over 40 Years of Experience in Podiatry
          </h2>

          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Neil Nevitt
          </h1>

          <div className="text-white text-lg md:text-xl lg:text-2xl mb-6 space-y-2">
            <p className="font-semibold">DPodM, MRCoP</p>
            <p className="font-semibold">HCPC (State) Registered</p>
          </div>

          <Link
            to="/contact"
            className="mt-4 bg-white text-cyan-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:ring-2 hover:ring-cyan-600 hover:ring-offset-2 pointer-events-auto"
            aria-label="Get in touch with Neil Nevitt"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="w-full bg-white flex items-center flex-grow">
        <div className="max-w-screen-lg mx-auto w-full grid grid-cols-1 md:grid-cols-3 lg:pt-6 text-center lg:text-left">
          <div className="bg-cyan-500 text-white p-6 md:p-10 flex flex-col lg:min-h-[320px]">
            <h2 className="text-xl font-semibold mb-4 md:mt-8">
              Trusted Expertise
            </h2>
            <p className="text-base leading-relaxed flex-grow">
              First-class foot care and health support from an experienced,
              reliable professional.
            </p>
          </div>

          <div className="bg-cyan-600 text-white p-6 md:p-10 flex flex-col md:min-h-[320px]">
            <h2 className="text-xl font-semibold mb-4 md:mt-8">Treatments</h2>
            <p className="text-base leading-relaxed flex-grow">
              Our podiatric treatments offer personalized solutions to relieve
              discomfort, correct problems, and keep your feet in optimal
              condition.
            </p>
          </div>

          <div className="bg-blue-800 text-white p-6 md:p-10 flex flex-col md:min-h-[320px]">
            <h2 className="text-xl font-semibold mb-4 md:mt-8">Contact</h2>
            <ul className="space-y-4 flex-grow">
              <li className="flex flex-col lg:flex-row lg:justify-between border-b border-white/30 pb-2">
                <span className="font-normal">Phone:</span>
                <p className="lg:text-right font-normal">0151 722 3840</p>
              </li>
              <li className="flex flex-col lg:flex-row lg:justify-between border-b border-white/30 pb-2">
                <span className="font-normal">Mobile:</span>
                <p className="lg:text-right font-normal">07946 582 000</p>
              </li>
              <li className="flex flex-col lg:flex-row lg:justify-between border-b border-white/30 pb-2">
                <span className="font-normal">Email:</span>
                <p className="lg:text-right break-words font-normal">
                  neilnev@hotmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
