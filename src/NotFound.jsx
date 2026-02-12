import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main
        className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
        aria-labelledby="page-title"
      >
        <div className="text-center">
          <p
            className="text-base font-semibold text-rose-700"
            aria-label="Error code 404"
          >
            404
          </p>
          <h1
            id="page-title"
            className="mt-3 text-3xl font-bold text-gray-900 sm:text-5xl"
          >
            Page not found
          </h1>
          <p
            className="mt-6 text-base leading-7 text-gray-600"
            aria-label="Sorry, we couldn’t find the page you’re looking for."
          >
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-rose-700 px-12 py-3 text-sm font-medium text-white shadow-xs hover:bg-rose-600 focus:outline-hidden focus:ring-3 active:bg-rose-500"
              aria-label="Go back home"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
