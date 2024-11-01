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
      className="relative bg-home-mobile lg:bg-home-desktop bg-cover bg-center bg-no-repeat"
      aria-labelledby="home-title"
    >
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 max-lg:h-screen">
        <div className="max-w-xl text-center lg:text-right mx-auto lg:ml-auto lg:mr-0">
          <h1 id="home-title" className="text-3xl font-bold sm:text-5xl">
            Neil Nevitt
            <strong className="block font-bold text-rose-700">
              DPodM, MRCPod
            </strong>
          </h1>

          <p
            className="mt-3 sm:text-xl/relaxed"
            aria-label="HCPC (State) Registered"
          >
            <strong>HCPC (State) Registered</strong>
          </p>

          <p
            className="mt-3 sm:text-xl/relaxed"
            aria-label="Experienced podiatrist with a comprehensive background in foot health"
          >
            Experienced podiatrist with a comprehensive <br />
            background in foot health
          </p>

          <p
            className="mt-2 font-bold sm:text-m/relaxed text-rose-700"
            aria-label="Contact numbers: 0151 722 3840 / 07946 582000"
          >
            0151 722 3840 / 07946 582000
          </p>

          <div className="mt-4 flex flex-col items-center lg:items-end">
            <Link
              to="/contact"
              className="block w-full rounded bg-rose-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              aria-label="Get in touch with Neil Nevitt"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
