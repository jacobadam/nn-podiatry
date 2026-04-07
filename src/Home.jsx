import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <section
        className="relative flex min-h-[70vh] w-full items-center overflow-hidden lg:min-h-[61vh] 2xl:min-h-[78vh]"
        aria-labelledby="home-title"
      >
        <img
          src="/homepage-image-mobile.webp"
          alt="A podiatrist providing foot care to a patient."
          className="absolute inset-0 h-full w-full object-cover"
          srcSet="/homepage-image-mobile.webp 768w, /homepage-image-optimized.webp 2124w"
          sizes="(max-width: 768px) 100vw, 100vw"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-cyan-700/60 lg:bg-cyan-700/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center md:ml-auto md:mr-0 md:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-base">
              Over 40 Years of Experience in Podiatry
            </p>

            <h1
              id="home-title"
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Neil Nevitt
            </h1>

            <div className="mt-5 space-y-2 text-base text-white sm:text-lg lg:text-xl">
              <p className="font-semibold">DPodM, MRCoP</p>
              <p className="font-semibold">HCPC (State) Registered</p>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-cyan-700 shadow-md transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                aria-label="Get in touch with Neil Nevitt"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-cyan-500 p-6 text-center text-white shadow-sm sm:px-6 sm:py-4 lg:text-left">
              <h2 className="text-xl font-semibold tracking-tight">
                Trusted Expertise
              </h2>
              <p className="mt-4 text-sm leading-7 sm:text-base">
                First-class foot care and health support from an experienced,
                reliable professional.
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-600 p-6 text-center text-white shadow-sm sm:px-6 sm:py-4  lg:text-left">
              <h2 className="text-xl font-semibold tracking-tight">
                Treatments
              </h2>
              <p className="mt-4 text-sm leading-7 sm:text-base">
                Our podiatric treatments offer personalized solutions to relieve
                discomfort, correct problems, and keep your feet in optimal
                condition.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-800 p-6 text-center text-white shadow-sm sm:px-6 sm:py-4  lg:text-left">
              <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
              <ul className="mt-4 space-y-4 text-sm sm:text-base">
                <li className="border-b border-white/20 pb-3">
                  <span className="block font-semibold">Phone</span>
                  <p className="mt-1 wrap-break-word">0151 722 3840</p>
                </li>
                <li className="border-b border-white/20 pb-3">
                  <span className="block font-semibold">Mobile</span>
                  <p className="mt-1 wrap-break-word">07946 582 000</p>
                </li>
                <li>
                  <span className="block font-semibold">Email</span>
                  <p className="mt-1 wrap-break-word">neilnev@hotmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
