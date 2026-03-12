import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="w-full bg-cyan-600 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            id="page-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cyan-100 sm:text-lg">
            The page you are looking for may have been moved or no longer
            exists.
          </p>
        </div>
      </section>

      <main
        className="flex items-center bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="page-title"
      >
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-3xl bg-white px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14">
            <p
              className="text-sm font-semibold uppercase tracking-wide text-cyan-600 sm:text-xl"
              aria-label="Error code 404"
            >
              Error 404
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Sorry, we could not find the page you were looking for. You can
              return to the homepage below.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-blue-500/20 transition hover:bg-cyan-700 hover:shadow-lg hover:shadow-blue-500/40"
                aria-label="Go back home"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
