import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Conditions from "./Conditions.js";
import Location from "./Location.js";
import Podiatry from "./Podiatry.js";

function App() {
  return (
    <div>
      <BrowserRouter basename="/nn-podiatry">
        <Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="podiatry" element={<Podiatry />} />
            <Route path="contact" element={<Contact />} />
            <Route path="location" element={<Location />} />
          </Routes>
        </Nav>
      </BrowserRouter>
    </div>
  );
}
export default App;
