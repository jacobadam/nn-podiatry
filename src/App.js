import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Conditions from "./Conditions.js";
import Scope from "./Scope.js";
import Location from "./Location.js";
import Links from "./Links.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="scope-of-practice" element={<Scope />} />
            <Route path="contact" element={<Contact />} />
            <Route path="location" element={<Location />} />
            <Route path="links" element={<Links />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
