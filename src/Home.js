import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative bg-[url('../public/homepage-image.webp')] bg-cover bg-center bg-no-repeat bg-transparent">
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 max-lg:h-screen">
        <div className="max-w-xl text-center lg:text-right mx-auto lg:ml-auto lg:mr-0">
          <h1 className="text-3xl font-bold sm:text-5xl">
            Neil Nevitt
            <strong className="block font-bold text-rose-700">
              DPodM, MRCPod
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            <strong>HCPC (State) Registered</strong>
          </p>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Experienced podiatrist with a comprehensive <br />
            background in foot health
          </p>

          <div className="mt-8 flex flex-col items-center lg:items-end">
            <Link
              to="/contact"
              className="block w-full rounded bg-rose-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
