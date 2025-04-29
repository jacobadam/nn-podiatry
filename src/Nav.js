import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Podiatry", to: "/podiatry" },
  { label: "Contact", to: "/contact" },
  { label: "Location", to: "/location" },
];

export default function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="py-5 lg:fixed w-full bg-white transition-all z-50 sticky top-0 duration-500">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex-1 flex items-center">
              <a href="/">
                <img
                  src="/favicon.ico"
                  alt="Your Logo"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            <div className="flex gap-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600 font-semibold"
                      : "text-black hover:text-cyan-600 transition font-medium"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex-1 hidden lg:flex flex-col items-end text-right text-sm leading-tight">
              <span className="font-semibold text-cyan-600">0151 722 3840</span>
            </div>
          </div>

          <div className="flex lg:hidden justify-between items-center">
            <a href="/">
              <img src="/favicon.ico" alt="Your Logo" className="h-8 w-auto" />
            </a>
            <button
              onClick={toggleMobileMenu}
              aria-label="hamburger menu"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 4H3a1 1 0 000 2h14a1 1 0 000-2zm0 6H3a1 1 0 000 2h14a1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 flex flex-col gap-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600 font-semibold"
                      : "text-black hover:text-cyan-600 transition font-medium"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
      {!isHomePage && (
        <div className="w-full h-60 lg:mt-16">
          <img
            src={`${process.env.PUBLIC_URL}/pebble-footprint.webp`}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );
}
