import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/conditions">Conditions Treated</Link>
          </li>
          <li>
            <Link to="/scope-of-practice">Scope of Practice</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
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
