import React from "react";
import "./styles/main.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { LandingSection } from "./sections/Landing";
/* import { AboutSection } from "./sections/About"; */
import { ProjectsSection } from "./sections/Projects";
import { EducationSection } from "./sections/Education";
import { WorkSection } from "./sections/Work";

function App() {
  const sections = [
    { label: "Hello", link: "landing" },
    /* { label: "About Me", link: "about" }, */
    { label: "My Work Experience", link: "work" },
    { label: "My Projects", link: "projects" },
    { label: "My Education", link: "education" },
    {
      label: "My CV",
      link: "https://drive.google.com/file/d/1qF4aGGtAHmUBENEtV0XssoIO3oHGMAgc/view?usp=sharing",
      outsideLink: true,
    },
  ];

  return (
    <div className="App">
      <Header sections={sections}></Header>

      <main>
        <LandingSection heading="" id="landing"></LandingSection>
        {/* <AboutSection heading="Me at a Glance" id="about"></AboutSection> */}
       <WorkSection heading="My Work Experience" id="work"></WorkSection>
        <ProjectsSection heading="My Projects" id="projects"></ProjectsSection>
        <EducationSection
          heading="My Education"
          id="education"
        ></EducationSection>
      </main>

      <Footer sections={sections}></Footer>
    </div>
  );
}

export default App;
