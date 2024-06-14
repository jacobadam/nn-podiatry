import React from "react";

export default function Conditions() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full h-32">
        <img
          src="pebble-footprint.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-slate-100 mx-auto py-2 px-4 dark:bg-gray-800">
        <div className="text-center text-2xl py-2 font-medium tracking-wider dark:text-white">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Conditions Treated
          </h2>
        </div>
        <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          {/* card item */}
          <div className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96">
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src="/diabetic-feet.webp"
                alt=""
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2>Diabetic Feet</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p>
                Diabetes causes high blood glucose, damaging nerves and blood
                vessels, affecting circulation to legs, feet, and tissues.
              </p>
            </div>
            <div className="p-2 text-center ">
              <a
                href="https://rcpod.org.uk/patient-information/diabetes"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96">
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src="/ageing-feet.webp"
                alt=""
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2>Ageing Feet</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p>
                Ageing causes foot issues due to joint wear, thinner skin, and
                dryness; routine care prevents serious problems and aids
                mobility.
              </p>
            </div>
            <div className="p-2 text-center ">
              <a
                href="https://rcpod.org.uk/common-foot-problems/ageing-feet"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96">
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src="/ingrowing-toenail.webp"
                alt=""
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2>Ingrowing Toenail</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p>
                An ingrown toenail pierces flesh, causing pain, inflammation, or
                infection. It often affects the big toe but can affect others.
              </p>
            </div>
            <div className="p-2 text-center ">
              <a
                href="https://rcpod.org.uk/common-foot-problems/ingrowing-toenail"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96">
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src="/nail-surgery.webp"
                alt=""
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2> Nail Surgery</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p>
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
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96">
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src="/corn-callus.webp"
                alt=""
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2>Corns and Calluses</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p>
                Walking and standing pressure can cause corns and calluses.
                Calluses are areas of hard skin on the sole; corns form over
                bony areas.
              </p>
            </div>
            <div className="p-2 text-center ">
              <a
                href="https://rcpod.org.uk/common-foot-problems/corns-callus"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96">
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src="/verrucae.webp"
                alt=""
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2>Verrucae</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p>
                Verrucae are plantar warts caused by the contagious Human
                Papilloma Virus. They can occur on the soles of the feet or
                around the toe area.
              </p>
            </div>
            <div className="p-2 text-center ">
              <a
                href="https://rcpod.org.uk/common-foot-problems/verrucae"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 font-bold mt-4 text-center"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* card item */}
          <div className="w-64 shadow-md rounded bg-white dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl h-96">
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src="/msk-podiatry.webp"
                alt=""
              />
            </div>
            <div className="px-4 py-2 text-2xl font-semibold dark:text-white text-center">
              <h2>Musculoskeletal</h2>
            </div>
            <div className="flex justify-between dark:text-white px-4 py-2 text-l font-medium">
              <p>
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
