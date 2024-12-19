import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full h-40">
        <img
          src={`${process.env.PUBLIC_URL}/pebble-footprint.webp`}
          alt="Banner"
          className="w-full h-full object-cover"
          aria-label="Banner Image"
        />
      </div>

      <div className="flex items-center justify-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12">
        <section
          className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-full sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-4xl rounded-lg shadow-lg lg:grid lg:grid-cols-2 lg:gap-8"
          aria-labelledby="about-title"
        >
          <div className="text-center lg:text-left lg:pt-2">
            <h2
              id="about-title"
              className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
            >
              Neil Nevitt
            </h2>
            <div
              className="font-light text-gray-500 dark:text-gray-400 sm:text-lg"
              aria-label="Biography of Neil Nevitt"
            >
              <p className="mb-4">
                I qualified as a chiropodist at the Northern College of
                Chiropody, Salford (now Salford University). Post-qualification,
                I lectured at the college before relocating to Liverpool. Since
                1979, I have operated a private practice in South Liverpool, as
                well as various other roles including being employed as an NHS
                podiatrist for many years, a podiatrist for ICI in Runcorn and
                Widnes (1981-1985), and as the podiatrist for Liverpool Football
                Club (1991-1994). From 2000 to 2017, I managed the Community
                Podiatry Team for the NHS in Liverpool, overseeing the delivery
                of quality podiatric services. Currently, I work part-time for
                St.Helens Primary Care Network (NHS) as well as carrying out
                private work in my Liverpool Practice.
              </p>
              <p className="font-bold">
                MRCoP - Member of the Royal College of Podiatry - membership
                number - 07675
              </p>
              <br />
              <p className="font-bold">
                HCPC - Health Care Professional Council - membership number
                CH06728
              </p>
            </div>
          </div>
          <div
            className="flex justify-center flex-col items-center mt-8 lg:mt-0"
            aria-label="Images of Neil Nevitt and logos"
          >
            <img
              className="w-48 md:w-60 lg:w-68 xl:w-68 rounded-lg"
              src={`${process.env.PUBLIC_URL}/neilnevitt.webp`}
              alt="Neil Nevitt"
            />
            <div className="flex mt-8 lg:mt-2 lg:pt-16">
              <img
                className="w-32 sm:pr-4 pr-6"
                src={`${process.env.PUBLIC_URL}/rcp.webp`}
                alt="Royal College of Podiatry logo"
              />
              <img
                className="w-32 sm:pr-4 pl-6"
                src={`${process.env.PUBLIC_URL}/hcpc.webp`}
                alt="Health Care Professional Council logo"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
