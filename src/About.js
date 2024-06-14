import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full h-32">
        <img
          src="pebble-footprint.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <section className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl rounded-lg shadow-lg lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left lg:pt-8">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Neil Nevitt
            </h2>
            <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eleifend purus sed libero ultrices, eget accumsan metus congue.
                Ut gravida sapien sit amet nunc lacinia commodo. Vivamus id
                imperdiet turpis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eleifend purus sed libero ultrices, eget accumsan metus congue.
                Ut gravida sapien sit amet nunc lacinia commodo. Vivamus id
                imperdiet turpis.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <img
              className="w-48 sm:w-64 md:w-60 lg:w-72 xl:w-80 rounded-lg"
              src="/neilnevitt.webp"
              alt="Neil Nevitt"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
