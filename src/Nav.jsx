import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Podiatry", to: "/podiatry" },
  { label: "Contact", to: "/contact" },
  { label: "Location", to: "/location" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full bg-white py-3 shadow-sm"
        aria-label="Primary navigation"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden w-full items-center justify-between lg:flex">
            <div className="flex flex-1 items-center">
              <Link to="/" aria-label="Neil Nevitt Podiatry Home">
                <img
                  src="/favicon.ico"
                  alt="Neil Nevitt Podiatry Logo"
                  width="32"
                  height="32"
                  className="h-8 w-8"
                />
              </Link>
            </div>

            <div className="flex gap-8" role="menubar">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  role="menuitem"
                  className="text-base font-medium text-gray-800 transition hover:text-cyan-600"
                >
                  {({ isActive }) => (
                    <span className="flex flex-col items-center">
                      {item.label}
                      <span
                        className={
                          isActive
                            ? "mt-1 h-0.5 w-full rounded bg-cyan-600"
                            : "mt-1 h-0.5 w-full rounded bg-transparent"
                        }
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden flex-1 items-center justify-end lg:flex">
              <div className="text-right leading-tight">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Telephone
                </p>
                <a
                  href="tel:01517223840"
                  className="mt-1 block text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                  aria-label="Call 0151 722 3840"
                >
                  0151 722 3840
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between lg:hidden">
            <Link to="/" aria-label="Neil Nevitt Podiatry Home">
              <img
                src="/favicon.ico"
                alt="Neil Nevitt Podiatry Logo"
                width="32"
                height="32"
                className="h-8 w-8"
              />
            </Link>

            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="rounded-lg p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div id="mobile-menu" className="mt-4 lg:hidden" role="menu">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      role="menuitem"
                      className="block text-base font-medium text-gray-800 transition hover:text-cyan-600"
                    >
                      {({ isActive }) => (
                        <span className="flex flex-col">
                          {item.label}
                          <span
                            className={
                              isActive
                                ? "mt-1 h-0.5 w-8 rounded bg-cyan-600"
                                : "mt-1 h-0.5 w-8 rounded bg-transparent"
                            }
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Telephone
                </p>
                <a
                  href="tel:01517223840"
                  className="mt-1 block text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                  aria-label="Call 0151 722 3840"
                >
                  0151 722 3840
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
