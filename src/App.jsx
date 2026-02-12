import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import Location from "./Location.jsx";
import Podiatry from "./Podiatry.jsx";
import NotFound from "./NotFound.jsx";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white font-roboto">
          <Nav />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/podiatry" element={<Podiatry />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/location" element={<Location />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
