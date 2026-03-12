export default function About() {
  return (
    <>
      <section className="w-full bg-cyan-600 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="about-title"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              About
            </h1>
            <p className="mt-4 text-base leading-7 text-cyan-100 sm:text-lg">
              Experienced podiatry care with a long-standing background in
              private practice, NHS services, and professional sport.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8 lg:px-8"
        aria-labelledby="about-title"
      >
        <div className="mx-auto rounded-lg bg-gray-50 px-4 py-8 shadow-lg sm:max-w-xl sm:px-6 md:max-w-3xl md:px-8 lg:max-w-4xl lg:px-10 xl:max-w-4xl xl:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Neil Nevitt
              </h2>

              <div
                className="space-y-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8"
                aria-label="Biography of Neil Nevitt"
              >
                <p>
                  I qualified as a chiropodist at the Northern College of
                  Chiropody, Salford (now Salford University).
                  Post-qualification, I lectured at the college before
                  relocating to Liverpool.
                </p>

                <p>
                  Since 1979, I have operated a private practice in South
                  Liverpool, as well as various other roles including being
                  employed as an NHS podiatrist for many years, a podiatrist for
                  ICI in Runcorn and Widnes (1981-1985), and as the podiatrist
                  for Liverpool Football Club (1991-1994).
                </p>

                <p>
                  From 2000 to 2017, I managed the Community Podiatry Team for
                  the NHS in Liverpool, overseeing the delivery of quality
                  podiatric services.
                </p>

                <p>
                  Currently, I work part-time for St.Helens Primary Care Network
                  (NHS) as well as carrying out private work in my Liverpool
                  Practice.
                </p>
              </div>
            </div>

            <div
              className="mt-8 flex flex-col items-center lg:mt-0"
              aria-label="Portrait of Neil Nevitt"
            >
              <div className="w-full max-w-sm">
                <img
                  className="w-full rounded-2xl border border-gray-200 object-cover shadow-lg"
                  src="/neilnevitt.webp"
                  alt="Portrait of Neil Nevitt, a professional podiatrist"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                  <img
                    className="h-16 w-auto"
                    src="/rcp.webp"
                    alt="Royal College of Podiatry logo"
                  />
                </div>

                <div className="min-w-0 text-left">
                  <p className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                    Member of the Royal College of Podiatry (MRCoP)
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">
                    MRCoP - membership number 07675
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                  <img
                    className="h-16 w-auto"
                    src="/hcpc.webp"
                    alt="Health Care Professional Council logo"
                  />
                </div>

                <div className="min-w-0 text-left">
                  <p className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                    Health Care Professional Council (HCPC)
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">
                    HCPC - membership number CH06728
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
