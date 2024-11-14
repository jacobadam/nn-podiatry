import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
  useEffect(() => {
    const preloadImages = [
      "/homepage-image.webp",
      "/homepage-image-mobile.webp",
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      className="relative bg-[url('../public/homepage-image-mobile.webp')] lg:bg-[url('../public/homepage-image.webp')] bg-cover bg-center bg-no-repeat min-h-screen"
      aria-labelledby="home-title"
    >
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Container */}
      <div className="flex flex-col lg:flex-row relative mx-auto max-w-screen-l pr-4 xl:pr-12 2xl:pr-24 pl-6 2xl:pl-16 min-h-screen lg:justify-between">
        {/* Slogan */}
        <blockquote className="lg:flex-grow lg:flex lg:items-end lg:mb-20 2xl:mb-36">
          <p className="font-semibold text-xl lg:text:2xl xl:text-4xl leading-relaxed text-gray-600 text-center font-sans bg-blue-600 bg-opacity-5 p-4 2xl:p-12 shadow-lg">
            Compassionate Foot Care <br /> From an Experienced, <br />
            Trusted Professional
          </p>
        </blockquote>

        {/* Info Section */}
        <div className="flex flex-col text-center items-center mt-8 lg:mt-16 mb-16 xl:mt-20 2xl:mt-32">
          <h1 id="home-title" className="font-bold text-4xl lg:text-5xl">
            Neil Nevitt
            <strong className="block text-center font-semibold text-xl lg:text-2xl text-blue-600">
              DPodM, MRCPod
            </strong>
          </h1>

          <p
            className="mt-0 lg:mt-3 sm:text-l/relaxed text-center"
            aria-label="HCPC (State) Registered"
          >
            <strong>HCPC (State) Registered</strong>
          </p>

          {/* Get In Touch Button */}
          <div className="mt-4 flex flex-col items-center lg:items-end">
            <Link
              to="/contact"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-bold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring sm:w-auto"
              aria-label="Get in touch with Neil Nevitt"
            >
              Get In Touch
            </Link>
          </div>

          {/* Info Box */}
          <div className="bg-white text-left shadow-lg rounded-lg p-4 xl:p-6 mt-8 max-w-md bg-opacity-35">
            <div className="flex items-center mt-2 text-gray-700 font-semibold">
              <img
                src="feet3.svg"
                alt="Bullet Point"
                className="w-9 h-9 mr-2"
              />
              <p>Treatment for diabetic or ageing feet</p>
            </div>
            <div className="flex items-center mt-2 text-gray-700 font-semibold">
              <img
                src="feet3.svg"
                alt="Bullet Point"
                className="w-9 h-9 mr-2"
              />
              <p>Nail surgery for problematic toenails</p>
            </div>
            <div className="flex items-center mt-2 text-gray-700 font-semibold">
              <img
                src="feet3.svg"
                alt="Bullet Point"
                className="w-9 h-9 mr-2"
              />
              <p>Musculoskeletal assessment and treatment</p>
            </div>
            <div className="flex items-center mt-2 text-gray-700 font-semibold">
              <img
                src="feet3.svg"
                alt="Bullet Point"
                className="w-9 h-9 mr-2"
              />
              <p>Treatment for verrucae, corns, and calluses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
