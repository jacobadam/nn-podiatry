import React, { useState } from "react";
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
      <nav
        className="py-5 lg:fixed w-full bg-white transition-all z-50 sticky top-0 duration-500"
        aria-label="Primary navigation"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex-1 flex items-center">
              <Link to="/" aria-label="Neil Nevitt Podiatry Home">
                <img
                  src="/favicon.ico"
                  alt="Neil Nevitt Podiatry Logo"
                  className="h-8 w-auto"
                  width="32"
                  height="32"
                />
              </Link>
            </div>

            <div className="flex gap-8" role="menubar">
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
                  role="menuitem"
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
            <Link to="/" aria-label="Neil Nevitt Podiatry Home">
              <img
                src="/favicon.ico"
                alt="Neil Nevitt Podiatry Logo"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-black focus:outline-none focus:ring-2 focus:ring-cyan-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div id="mobile-menu" className="mt-4 lg:hidden" role="menu">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive
                          ? "text-cyan-600 font-semibold block"
                          : "text-black hover:text-cyan-600 transition font-medium block"
                      }
                      role="menuitem"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
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
