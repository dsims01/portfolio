import React from "react";
import "./App.scss";
import "./animations.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar, { PATHS } from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div
        style={{
          height: "100vh",
          maxHeight: "100vh",
          width: "100vw",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
        id="App"
        className="relative hide-scrollbar-visual"
      >
        <Navbar />
        <Routes>
          <Route path={PATHS.ABOUT} element={<AboutMe />} />
          <Route path={PATHS.EXPERIENCE} element={<Projects />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
          <Route path={PATHS.HOME} element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
