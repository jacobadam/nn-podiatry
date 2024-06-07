import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/conditions">Conditions</Link>
          </li>
          <li>
            <Link to="/scope-of-practice">Scope</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
