import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative bg-[url('../public/homepage-image.webp')] bg-cover bg-center bg-no-repeat bg-transparent">
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 max-lg:h-screen">
        <div className="max-w-xl text-center lg:text-right mx-auto lg:ml-auto lg:mr-0">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Neil Nevitt
            <strong className="block font-extrabold text-rose-700">
              DPodM, MRCPod
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
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

    /*
    <section class="bg-gray-600">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-gray-800">
        <div class=" place-self-center lg:col-span-7 ">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
            Neil Nevitt
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            DPodM, MRCPod <br />
            Liverpool Podiatrist/Chiropodist <br />
            (Qualified Salford University 1976) <br />
            HCPC (State) Registered <br />
            Tel: 0151-722 3840 Mobile: 07946 582000 <br />
            (Wavertree/Childwall)
          </p>

          <Link to="/contact">
            <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-200 dark:focus:ring-gray-200">
              Get In Touch
            </button>
          </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-full">
          <img src="/homepage-image.webp" alt="homepage-stock" />
        </div>
      </div>
      <div className="payment-qualification-images">
        <img src="/accepted-cards.webp" alt="accepted-cards" />
        <img src="/hcpc-reg.webp" alt="hcpc-reg" />
      </div>
    </section>
    };
  */
  );
}
