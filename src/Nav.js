import React, { useRef } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Podiatry", href: "/podiatry", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Location", href: "/location", current: false },
];

export default function Nav(props) {
  const buttonRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Disclosure as="nav" className="bg-gray-800 w-full z-10">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton
                    ref={buttonRef}
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    tabIndex="0"
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              "rounded-md px-2 py-2 text-sm font-medium " +
                              (isActive
                                ? "bg-gray-700 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white")
                            );
                          }}
                          aria-current={item.current ? "page" : undefined}
                          tabIndex="0"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "block rounded-md px-3 py-2 text-base font-medium " +
                        (isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white")
                      );
                    }}
                    aria-current={item.current ? "page" : undefined}
                    tabIndex="0"
                    onClick={() => {
                      if (buttonRef.current) {
                        buttonRef.current.click();
                      }
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      {!isHomePage && (
        <div className="w-full h-40">
          <img
            src={`${process.env.PUBLIC_URL}/pebble-footprint.webp`}
            alt="Banner"
            className="w-full h-full object-cover"
            aria-label="Banner Image"
          />
        </div>
      )}

      <div className="bg-white min-h-screen">{props.children}</div>
    </>
  );
}
