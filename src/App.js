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
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            <Route
              path={`${process.env.PUBLIC_URL}/about`}
              element={<About />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/conditions`}
              element={<Conditions />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/podiatry`}
              element={<Podiatry />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/contact`}
              element={<Contact />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/location`}
              element={<Location />}
            />
          </Routes>
        </Nav>
      </BrowserRouter>
    </div>
  );
}
export default App;
