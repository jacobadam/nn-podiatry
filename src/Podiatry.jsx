export default function Podiatry() {
  return (
    <section
      aria-labelledby="podiatry-title"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="podiatry-title"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          What is Podiatry?
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          Professional foot care, treatment, and preventative support for a wide
          range of conditions.
        </p>
      </div>

      <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              <p id="podiatry-intro">
                Podiatry (or chiropody) is the medical speciality of caring for
                feet. The terms podiatry and chiropody are interchangeable,
                although there are a growing number of surgical podiatrists in
                the UK who carry out ambulatory foot surgery to treat conditions
                such as bunions and hammer toes.
              </p>

              <p id="podiatry-treatments">
                Podiatrists treat conditions of the feet such as hard skin,
                corns, and nail problems. They are specialists in treating
                ingrowing toenails, which can be cured with a minor surgical
                procedure performed under local anaesthetic. This treatment can
                usually be carried out in the clinic and typically takes less
                than an hour. Podiatrists also treat verrucae (plantar warts),
                although the British Medical Association currently advises not
                treating them unless they are causing pain.
              </p>

              <p id="podiatry-diabetics">
                Podiatrists also care for the feet of people with diabetes. Due
                to the effects diabetes can have on the feet, individuals are at
                greater risk of peripheral vascular disease (circulatory
                problems) and peripheral neuropathy, which reduces sensation in
                the feet. Without proper care, diabetics have a higher risk of
                serious foot complications, many of which can be prevented
                through regular podiatry treatment.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p
                  id="hcpc-info"
                  className="text-sm leading-6 text-gray-600 sm:text-base"
                >
                  <span className="font-semibold text-gray-900">HCPC</span> -
                  Check whether your podiatrist is on the HCPC register.
                </p>
                <a
                  href="https://www.hcpc-uk.org/check-the-register/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Go to check the HCPC register page"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-rose-600 underline-offset-4 transition hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  Check the HCPC register
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p
                  id="rcp-info"
                  className="text-sm leading-6 text-gray-600 sm:text-base"
                >
                  <span className="font-semibold text-gray-900">
                    Royal College of Podiatry
                  </span>{" "}
                  - Check whether your podiatrist is a member.
                </p>
                <a
                  href="https://rcpod.org.uk/find-a-podiatrist#FIND.PODIATRIST"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Go to check if your podiatrist is a Royal College member page"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-rose-600 underline-offset-4 transition hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  Find a podiatrist
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto max-w-xl lg:ml-auto lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-lg">
              <img
                className="aspect-4/3 w-full object-cover lg:aspect-5/6 opacity-80"
                src="/footcare.webp"
                alt="footcare"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
