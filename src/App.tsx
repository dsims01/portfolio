import React from "react";
import "./App.scss";
import "./animations.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar, { PATHS } from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageTransition from "./components/Transitions/PageTransition";

function App() {
  return (
    <Router>
      <div
        style={{
          maxWidth: "100%",
          //overflow: "hidden auto",
        }}
        id="App"
        className="relative full-width"
      >
        <Navbar />
        <Routes>
          <Route
            path={PATHS.ABOUT}
            element={
              <PageTransition path={PATHS.ABOUT}>
                <AboutMe />
              </PageTransition>
            }
          />
          <Route
            path={PATHS.EXPERIENCE}
            element={
              <PageTransition path={PATHS.EXPERIENCE}>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path={PATHS.CONTACT}
            element={
              <PageTransition path={PATHS.CONTACT}>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path={PATHS.HOME}
            element={
              <PageTransition path={PATHS.HOME}>
                <Home />
              </PageTransition>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
