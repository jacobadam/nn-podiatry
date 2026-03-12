export default function About() {
  return (
    <div className="flex items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-12">
      <section
        className="mx-auto max-w-full rounded-lg bg-gray-50 px-4 py-8 shadow-lg sm:max-w-lg sm:px-6 md:max-w-xl md:px-8 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-8 lg:px-10 xl:max-w-4xl xl:px-12"
        aria-labelledby="about-title"
      >
        <div className="text-center lg:text-left">
          <h1
            id="about-title"
            className="mb-4 text-3xl font-bold tracking-tight text-gray-900"
          >
            Neil Nevitt
          </h1>

          <div
            className="space-y-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8"
            aria-label="Biography of Neil Nevitt"
          >
            <p>
              I qualified as a chiropodist at the Northern College of Chiropody,
              Salford (now Salford University). Post-qualification, I lectured
              at the college before relocating to Liverpool.
            </p>

            <p>
              Since 1979, I have operated a private practice in South Liverpool,
              as well as various other roles including being employed as an NHS
              podiatrist for many years, a podiatrist for ICI in Runcorn and
              Widnes (1981-1985), and as the podiatrist for Liverpool Football
              Club (1991-1994).
            </p>

            <p>
              From 2000 to 2017, I managed the Community Podiatry Team for the
              NHS in Liverpool, overseeing the delivery of quality podiatric
              services.
            </p>

            <p>
              Currently, I work part-time for St.Helens Primary Care Network
              (NHS) as well as carrying out private work in my Liverpool
              Practice.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm leading-6 text-gray-600 sm:text-base">
                  <span className="block font-semibold text-gray-900">
                    Member of the Royal College of Podiatry
                  </span>
                  <span className="mt-1 block">
                    MRCoP - membership number 07675
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm leading-6 text-gray-600 sm:text-base">
                  <span className="block font-semibold text-gray-900">
                    Health Care Professional Council
                  </span>
                  <span className="mt-1 block">
                    HCPC - membership number CH06728
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center lg:mt-0"
          aria-label="Images of Neil Nevitt and logos"
        >
          <div className="w-full max-w-sm">
            <img
              className="w-full rounded-2xl border border-gray-200 object-cover shadow-lg"
              src="/neilnevitt.webp"
              alt="Portrait of Neil Nevitt, a professional podiatrist"
            />

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <img
                  className="h-12 w-auto sm:h-14"
                  src="/rcp.webp"
                  alt="Royal College of Podiatry logo, representing Neil Nevitt's professional membership"
                />
              </div>

              <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <img
                  className="h-12 w-auto sm:h-14"
                  src="/hcpc.webp"
                  alt="Health Care Professional Council logo, representing Neil Nevitt's professional registration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
