import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

import "./App.css";

const SkillsPage = lazy(() => import("./components/SkillsPage"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const DsajourneyPage = lazy(() => import("./components/DsajourneyPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const Projects = lazy(() => import("./components/Projects"));

const App = () => {
  return (
    <div className="app">
      <aside>
        <Navbar />
      </aside>

      <main className="main-content">
        <Suspense
              fallback={
                <div className="skeleton-page">
                  <div className="skeleton-heading"></div>

                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                </div>
              }
            >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <HomePage />
                  </section>

                  <section id="about">
                    <AboutPage />
                  </section>

                  <section id="skills">
                    <SkillsPage />
                  </section>

                  <section id="projects">
                    <ProjectPage />
                  </section>

                  <section id="dsa">
                    <DsajourneyPage />
                  </section>

                  <section id="contact">
                    <ContactPage />
                  </section>

                  <Footer />
                </>
              }
            />

            <Route
              path="/projects/:categoryId"
              element={<Projects />}
            />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;