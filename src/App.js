import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css';
import React from "react";

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Home />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
