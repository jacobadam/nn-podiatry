import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center w-full min-h-[60vh] lg:mt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/homepage-image.webp')",
          }}
          aria-label="A podiatrist providing foot care to a patient."
        ></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-cyan-700 opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center md:items-end md:text-right px-6 md:px-16 lg:px-24 ml-auto">
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
            className="mt-4 bg-white text-cyan-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            aria-label="Get in touch with Neil Nevitt"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="w-full bg-white flex-grow md:flex md:items-stretch">
        <div className="max-w-screen-lg mx-auto w-full grid grid-cols-1 md:grid-cols-3 md:p-6 text-center lg:text-left">
          <div className="bg-cyan-500 text-white p-6 md:p-10 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Our Team</h2>
            <p className="text-sm leading-relaxed flex-grow">
              Our team of highly qualified podiatrists is dedicated to caring
              for the health and comfort of your feet. Your well-being is our
              priority.
            </p>
          </div>

          <div className="bg-cyan-600 text-white p-6 md:p-10 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Treatments</h2>
            <p className="text-sm leading-relaxed flex-grow">
              Our podiatric treatments offer personalized solutions to relieve
              discomfort, correct problems, and keep your feet in optimal
              condition.
            </p>
          </div>

          <div className="bg-blue-800 text-white p-6 md:p-10 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul className="space-y-4 flex-grow">
              <li className="flex flex-col lg:flex-row lg:justify-between border-b border-white/30 pb-2">
                <span className="font-normal">Phone:</span>
                <p className="lg:text-right font-normal">0151 722 3840</p>
              </li>
              <li className="flex flex-col lg:flex-row lg:justify-between border-b border-white/30 pb-2">
                <span className="font-normal">Email:</span>
                <p className="lg:text-right break-words font-normal">
                  neilnevitt@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
