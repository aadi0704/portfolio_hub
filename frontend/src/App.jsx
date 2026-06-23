import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import ProjectPage from "./components/ProjectPage";
import DsajourneyPage from "./components/DsajourneyPage";
import ContactPage from "./components/ContactPage"
import Projects from "./components/Projects";
import Footer from "./components/Footer"

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <aside>
        <Navbar />
      </aside>

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><HomePage /></section>
                <section id="about"><AboutPage /></section>
                <section id="skills"><SkillsPage /></section>
                <section id="projects"><ProjectPage /></section>
                <section id="dsa"><DsajourneyPage /></section>
                <section id="contact"><ContactPage /></section>
                <Footer />
              </>
            }
          />
          <Route path="/projects/:categoryId" element={<Projects />} />
        </Routes>

      </main>
    </div>
  );
};

export default App;