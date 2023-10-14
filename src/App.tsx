import React from "react";
import "./styles/main.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { LandingSection } from "./sections/Landing";
import { EducationSection } from "./sections/Education";
import { ProjectsSection } from "./sections/Projects";

function App() {
  const sections = [
    { label: "Hello", link: "landing" },
    { label: "My Education", link: "education" },
    { label: "My Projects", link: "projects" },
  ];

  return (
    <div className="App">
      <Header sections={sections}></Header>

      <main>
        <LandingSection heading="" id="landing"></LandingSection>
        <EducationSection
          heading="My Education"
          id="education"
        ></EducationSection>
        <ProjectsSection heading="My Projects" id="projects"></ProjectsSection>
      </main>

      <Footer sections={sections}></Footer>
    </div>
  );
}

export default App;
