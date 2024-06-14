import React from "react";

export default function Podiatry() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full h-32">
        <img
          src="pebble-footprint.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="py-4 antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What is Podiatry?
            </h2>

            <div className="mx-auto max-w-2xl space-y-6 text-left">
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Podiatry (or chiropody) is the medical speciality of caring for
                feet. (The terms podiatry and chiropody are interchangeable,
                although there are a growing number of surgical podiatrists in
                the UK who actually carry out ambulatory foot surgery on
                patients to treat conditions such as bunions and hammer toes).
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Podiatrists treat conditions on the feet such as hard skin,
                corns, nails (and in particular, are specialists in treating
                ingrowing toenails which can be cured by way of a minor surgical
                procedure under a local anaesthetic - a procedure that can be
                carried out in the surgery and takes less than an hour). We also
                treat verrucae although the present advice is to leave verrucae
                alone unless they are causing pain (this is following the
                recommendations of the BMA) - painful verrucae can be treated
                with chemical cautery by podiatrists.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Podiatrists also care for the feet of diabetics, whether insulin
                or non-insulin dependent. Due to the effect of diabetes on the
                feet, a diabetic is at greater risk of suffering from peripheral
                vascular disease (circulatory problems) and they can also suffer
                from peripheral neuropathy (when there is a reduction in the
                sensation in the feet). If not cared for, diabetics run a high
                risk of serious foot problems, many of which can be prevented by
                regular podiatry treatment. Evening appointments are also
                available.
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                Links
              </p>
              <p className="space-y-4 font-normal text-gray-500 dark:text-gray-400">
                Health Care Professional Council (HCPC) - check if your
                podiatrist is on the HCPC list
              </p>
              <a
                href="https://www.hcpc-uk.org/check-the-register/"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to check the register page"
                className="text-rose-600 hover:underline"
              >
                Click here for more information
              </a>
              <p className="space-y-4 font-normal text-gray-500 dark:text-gray-400">
                Society of Chiropodists and Podiatrists (SOCAP) - check if your
                podiatrist is a member of SOCAP
              </p>
              <a
                href="https://rcpod.org.uk/find-a-podiatrist#FIND.PODIATRIST"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to check if your podiatrist is a member page"
                className="text-rose-600 hover:underline"
              >
                Click here for more information
              </a>
              <p className="space-y-4 font-normal text-gray-500 dark:text-gray-400">
                Common foot problems
              </p>
              <a
                href="https://rcpod.org.uk/common-foot-problems"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to common foot problems page"
                className="text-rose-600 hover:underline"
              >
                Click here for more information
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
