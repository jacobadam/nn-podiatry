import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Helmet } from "react-helmet-async";

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
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      aria-labelledby="home-title"
    >
      <Helmet>
        <title>Neil Nevitt - Experienced Podiatrist</title>
        <link rel="canonical" href="https://www.neilnevitt.com/" />
        <meta
          name="description"
          content="Neil Nevitt - Experienced Liverpool based podiatrist with a comprehensive background in foot health. HCPC (State) Registered. DPodM, MRCoP."
        />
      </Helmet>
      {/* Hero Image */}
      <img
        srcSet="/homepage-image-mobile.webp 640w, /homepage-image.webp 1024w"
        sizes="(max-width: 1024px) 100vw, 1024px"
        src="/homepage-image-mobile.webp"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover hero-img"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Container */}
      <div className="flex flex-col lg:flex-row relative mx-auto max-w-screen-l pr-4 xl:pr-12 2xl:pr-24 pl-6 2xl:pl-16 min-h-screen lg:justify-between">
        {/* Slogan */}
        <blockquote className="lg:flex-grow lg:flex lg:items-end lg:mb-24 2xl:mb-32">
          <p className="font-semibold text-sm md:text-xl xl:text-4xl leading-relaxed text-gray-600 text-center font-sans bg-blue-600 bg-opacity-5 p-4 2xl:p-12 shadow-lg">
            First Class Foot Care <br /> From an Experienced, <br />
            Trusted Professional
          </p>
        </blockquote>

        {/* Info Section */}
        <div className="flex flex-col text-center items-center mt-4 lg:mt-28 xl:mt-20 2xl:mt-32 mb-16">
          <h1 id="home-title" className="font-bold text-4xl lg:text-5xl">
            Neil Nevitt
            <strong className="block text-center font-semibold text-xl lg:text-2xl text-blue-600">
              DPodM, MRCoP
            </strong>
          </h1>

          <p
            className="mt-0 lg:mt-2 sm:text-l/relaxed text-center"
            aria-label="HCPC (State) Registered"
          >
            <strong>HCPC (State) Registered</strong>
          </p>

          {/* Get In Touch Button */}
          <div className="mt-2 flex flex-col items-center lg:items-end">
            <Link
              to="/contact"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-bold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring sm:w-auto"
              aria-label="Get in touch with Neil Nevitt"
            >
              Get In Touch
            </Link>
          </div>

          {/* Info Box */}
          <div className="bg-white text-left shadow-lg rounded-lg p-4 xl:p-6 mt-8 lg:mt-4 max-w-md bg-opacity-80 lg:bg-opacity-55 xl:bg-opacity-35">
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
