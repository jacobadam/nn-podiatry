import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full h-40">
        <img
          src={`${process.env.PUBLIC_URL}/pebble-footprint.webp`}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12">
        <section className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-full sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-4xl rounded-lg shadow-lg lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left lg:pt-2">
            <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
              Neil Nevitt
            </h2>
            <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
              <p className="mb-4">
                I earned my Chiropody diploma from the Northern College of
                Chiropody in Salford. Post-qualification, I lectured at the
                college before relocating to Liverpool. Since 1979, I have
                operated a private practice in South Liverpool, alongside
                various other roles including serving as an NHS podiatrist
                (1979-1984, 1990-2017), a podiatrist for ICI in Runcorn and
                Widnes (1981-1985), and as the podiatrist for Liverpool Football
                Club (1991-1994). From 2010 to 2017, I managed the Community
                Podiatry Team for the NHS in Liverpool, overseeing the delivery
                of quality podiatric services. Currently, I work part-time in St
                Helens Primary Care Network (NHS) as well as carrying out
                private work in my Liverpool Practice.
              </p>
              <p className="font-bold">
                MCRPod - Member of the Royal College of Podiatry - membership
                number - 07675
              </p>
              <br />
              <p className="font-bold">
                HCPC - Health Care Professional Council - membership number
                CH06728
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <img
              className="w-48 sm:w-64 md:w-60 lg:w-68 xl:w-68 rounded-lg"
              src={`${process.env.PUBLIC_URL}/neilnevitt.webp`}
              alt="Neil Nevitt"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
