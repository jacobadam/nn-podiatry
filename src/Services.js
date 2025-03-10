import React from "react";
import { Helmet } from "react-helmet-async";

export default function Conditions() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Helmet>
        <title>Neil Nevitt - Services</title>
        <link rel="canonical" href="https://www.neilnevitt.com/services" />
        <meta
          name="description"
          content="Explore the range of podiatry services offered by Neil Nevitt, including diabetic foot care, nail surgery, and more."
        />
      </Helmet>
      <div className="w-full h-40">
        <img
          src={`${process.env.PUBLIC_URL}/pebble-footprint.webp`}
          alt="Banner"
          className="w-full h-full object-cover"
          aria-label="Banner Image"
        />
      </div>
      <div className="bg-slate-100 mx-auto py-2 px-4 dark:bg-gray-800">
        <div className="text-center text-2xl py-2 font-medium tracking-wider dark:text-white">
          <h2 className="mb-8 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
        </div>
        <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          {/* card item */}
          <div
            className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96"
            aria-labelledby="diabetic-feet-title"
            aria-describedby="diabetic-feet-description"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={`${process.env.PUBLIC_URL}/diabetic-feet.webp`}
                alt="Diabetic Feet"
                aria-label="Diabetic Feet Image"
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2 id="diabetic-feet-title">Diabetic Feet</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p id="diabetic-feet-description">
                Diabetes causes high blood glucose, damaging nerves and blood
                vessels, affecting circulation to legs, feet, and tissues.
              </p>
            </div>
            <div className="p-2 text-center">
              <a
                href="https://rcpod.org.uk/patient-information/diabetes"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
                aria-label="Learn more about Diabetic Feet"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div
            className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96"
            aria-labelledby="ageing-feet-title"
            aria-describedby="ageing-feet-description"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={`${process.env.PUBLIC_URL}/ageing-feet.webp`}
                alt="Ageing Feet"
                aria-label="Ageing Feet Image"
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2 id="ageing-feet-title">Ageing Feet</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p id="ageing-feet-description">
                Ageing causes foot issues due to joint wear, thinner skin, and
                dryness; routine care prevents serious problems and aids
                mobility.
              </p>
            </div>
            <div className="p-2 text-center">
              <a
                href="https://rcpod.org.uk/common-foot-problems/ageing-feet"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
                aria-label="Learn more about Ageing Feet"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div
            className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96"
            aria-labelledby="ingrowing-toenail-title"
            aria-describedby="ingrowing-toenail-description"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={`${process.env.PUBLIC_URL}/ingrowing-toenail.webp`}
                alt="Ingrowing Toenail"
                aria-label="Ingrowing Toenail Image"
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2 id="ingrowing-toenail-title">Ingrowing Toenail </h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p id="ingrowing-toenail-description">
                An ingrown toenail pierces flesh, causing pain, inflammation, or
                infection. It often affects the big toe but can affect others.
              </p>
            </div>
            <div className="p-2 text-center">
              <a
                href="https://rcpod.org.uk/common-foot-problems/ingrowing-toenail"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
                aria-label="Learn more about Ingrowing Toenail"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div
            className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96"
            aria-labelledby="nail-surgery-title"
            aria-describedby="nail-surgery-description"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={`${process.env.PUBLIC_URL}/nail-surgery.webp`}
                alt="Nail Surgery"
                aria-label="Nail Surgery Image"
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2 id="nail-surgery-title">Nail Surgery</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p id="nail-surgery-description">
                Nail surgery performed by qualified professionals removes
                problematic toenails and may use chemicals to prevent regrowth.
              </p>
            </div>
            <div className="p-2 text-center">
              <a
                href="https://rcpod.org.uk/patient-information/arthritis/arthritis-leaflets/toenail-surgery-for-people-with-a-rheumatic-condition"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
                aria-label="Learn more about Nail Surgery"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div
            className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96"
            aria-labelledby="corn-callus-title"
            aria-describedby="corn-callus-description"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={`${process.env.PUBLIC_URL}/corn-callus.webp`}
                alt="Corn Callus"
                aria-label="Corn Callus Image"
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2 id="corn-callus-title">Corns and Calluses</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p id="corn-callus-description">
                Walking and standing pressure can cause corns and calluses.
                Calluses are areas of hard skin on the sole; corns form over
                bony areas.
              </p>
            </div>
            <div className="p-2 text-center">
              <a
                href="https://rcpod.org.uk/common-foot-problems/corns-callus"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
                aria-label="Learn more about Corns and Calluses"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div
            className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96"
            aria-labelledby="verrucae-title"
            aria-describedby="verrucae-description"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={`${process.env.PUBLIC_URL}/verrucae.webp`}
                alt="Verrucae"
                aria-label="Verrucae Image"
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2 id="verrucae-title">Verrucae</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p id="verrucae-description">
                Verrucae are plantar warts caused by the contagious Human
                Papilloma Virus. They can occur on the soles of the feet or
                around the toe area.
              </p>
            </div>
            <div className="p-2 text-center">
              <a
                href="https://rcpod.org.uk/common-foot-problems/verrucae"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
                aria-label="Learn more about Verrucae"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div
            className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96"
            aria-labelledby="musculoskeletal-title"
            aria-describedby="musculoskeletal-description"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={`${process.env.PUBLIC_URL}/msk-podiatry.webp`}
                alt="Musculoskeletal"
                aria-label="Musculoskeletal Image"
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2 id="musculoskeletal-title">Musculoskeletal</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p id="musculoskeletal-description">
                MSK (Musculoskeletal) is a specialist area of podiatry which
                concentrates on functional and structural issues of the foot and
                ankle.
              </p>
            </div>
            <div className="p-2 text-center">
              <a
                href="https://rcpod.org.uk/common-foot-problems/flat-foot-management"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
                aria-label="Learn more about Musculoskeletal Podiatry"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
        </div>
      </div>
    </div>
  );
}
