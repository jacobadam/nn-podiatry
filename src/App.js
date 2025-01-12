import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Nav from "./Nav.js";
import { BounceLoader } from "react-spinners";

const Home = lazy(() => import("./Home.js"));
const About = lazy(() => import("./About.js"));
const Contact = lazy(() => import("./Contact.js"));
const Services = lazy(() => import("./Services.js"));
const Location = lazy(() => import("./Location.js"));
const Podiatry = lazy(() => import("./Podiatry.js"));
const NotFound = lazy(() => import("./NotFound.js"));

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Suspense fallback={<BounceLoader color={"#ffffff"} size={50} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="podiatry" element={<Podiatry />} />
            <Route path="contact" element={<Contact />} />
            <Route path="location" element={<Location />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Nav>
    </BrowserRouter>
  );
}

export default App;
