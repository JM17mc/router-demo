import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">

          <h1 className="logo">MAC SPACE</h1>

          <div className="nav-links">

            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Contact
            </NavLink>

          </div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;