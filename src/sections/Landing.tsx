import { Sections } from "./Sections.interface";

export function LandingSection({ heading, id }: Sections) {
  return (
    <section className="landing-section-wrapper section">
      <div className="hello-section">
        <h2 id={id}>Hello and Welcome!</h2>
        <p>
          You've landed on my portfolio page, welcome! If you're just having a
          look around, feel free to look at my{" "}
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
      </div>
    </section>
  );
}
