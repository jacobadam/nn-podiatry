import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Conditions from "./Conditions.js";
import Podiatry from "./Podiatry.js";
import Location from "./Location.js";
import Links from "./Links.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="podiatry" element={<Podiatry />} />
            <Route path="contact" element={<Contact />} />
            <Route path="location" element={<Location />} />
            <Route path="links" element={<Links />} />
          </Routes>
        </Nav>
      </BrowserRouter>
    </div>
  );
}
export default App;
