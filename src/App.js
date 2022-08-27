import React from "react";
import "./App.scss";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Error from "./containers/error";
import { Navbar } from "./components/navBar";
import Theme from "./components/theme";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { perticlesObject } from "./components/config";

function App() {
  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const location = useLocation();
  const renderParticlesJsIfCurrentPageIsHomePage = location.pathname === "/";
  const renderParticlesJsIfCurrentPageIsHomePageDefault = location.pathname === "/home";
  // const perticlesCondition = renderParticlesJsIfCurrentPageIsHomePage && renderParticlesJsIfCurrentPageIsHomePageDefault ;
  return (
    <div className="App">
      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* if (renderParticlesJsIfCurrentPageIsHomePage || renderParticlesJsIfCurrentPageIsHomePageDefault) (
      <Particles id="tsparticles" options={perticlesObject} init={particlesInit} loaded={particlesLoaded} />)else null */}
      {
        renderParticlesJsIfCurrentPageIsHomePage ? <Particles id="tsparticles" 
        options={perticlesObject} init={particlesInit} loaded={particlesLoaded} /> : renderParticlesJsIfCurrentPageIsHomePageDefault ? <Particles id="tsparticles" 
        options={perticlesObject} init={particlesInit} loaded={particlesLoaded} />  : null
      }
      {/* main content */}
      <div className="App__main-content-wrapper">
        {/* <Particles /> */}
        <Theme />
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
