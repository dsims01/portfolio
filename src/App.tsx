import React, { useEffect, useState } from "react";
import "./App.scss";
import "./animations.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar, { PATHS } from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageTransition from "./components/Transitions/PageTransition";

function App() {
  const [renderFull, setRenderFull] = useState(false);
  useEffect(() => {
    setRenderFull(true);
  }, []);

  return (
    <Router>
      {renderFull && (
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
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
