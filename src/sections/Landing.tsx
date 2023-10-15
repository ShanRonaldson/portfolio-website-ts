import { Sections } from "./Sections.interface";
import PersonalInfo from "../data/personal-info.json";

export function LandingSection({ heading, id }: Sections) {
  const skills = PersonalInfo.skills;
  return (
    <section className="landing-section-wrapper section">
      <div className="hello-section">
        <h2 id={id}>Hello and Welcome!</h2>
        <p>
          You've landed on my portfolio page, welcome! I am a young Frontend
          Engineer, with an expertise and passion for UI/UX development. If
          you're just having a look around, feel free to look at my{" "}
          <a href="#projects" className="text-link">
            Projects
          </a>
          . You can also take a peek at my{" "}
          <a href="#education" className="text-link">
            Education section
          </a>
          , which also includes the courses I have taken.
        </p>
      </div>

      <div className="notable-skills-section">
        <h2>My Notable Skills</h2>
        <div className="notable-skills-list">
          {Object.entries(skills).map(([key, skill]) => (
            <div className="notable-skills" key={key}>
              <div className="skill">{skill[0]}</div>
              <div className="expertise">{skill[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
