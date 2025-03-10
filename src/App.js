import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Services from "./Services.js";
import Location from "./Location.js";
import Podiatry from "./Podiatry.js";
import NotFound from "./NotFound.js";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="podiatry" element={<Podiatry />} />
            <Route path="contact" element={<Contact />} />
            <Route path="location" element={<Location />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Nav>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
