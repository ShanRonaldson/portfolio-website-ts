import React from "react";
import "./styles/main.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { LandingSection } from "./sections/Landing";
/* import { AboutSection } from "./sections/About"; */
import { EducationSection } from "./sections/Education";
import { ProjectsSection } from "./sections/Projects";

function App() {
  const sections = [
    { label: "Hello", link: "landing" },
    /* { label: "About Me", link: "about" }, */
    { label: "My Education", link: "education" },
    { label: "My Projects", link: "projects" },
    {
      label: "My CV",
      link: "https://drive.google.com/file/d/1KiLOfF7LfTFlXVGzIstLskMhcj_D5GRJ/view?usp=sharing",
      outsideLink: true,
    },
  ];

  return (
    <div className="App">
      <Header sections={sections}></Header>

      <main>
        <LandingSection heading="" id="landing"></LandingSection>
        {/* <AboutSection heading="Me at a Glance" id="about"></AboutSection> */}
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
