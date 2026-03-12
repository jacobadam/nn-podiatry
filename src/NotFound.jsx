import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      className="flex min-h-[70vh] items-center bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="page-title"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-3xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14">
          <p
            className="text-sm font-semibold uppercase tracking-wide text-cyan-600 sm:text-base"
            aria-label="Error code 404"
          >
            404
          </p>

          <h1
            id="page-title"
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Page not found
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8"
            aria-label="Sorry, we could not find the page you are looking for."
          >
            Sorry, we could not find the page you are looking for.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-blue-500/20 transition hover:bg-cyan-700 hover:shadow-lg hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
              aria-label="Go back home"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
