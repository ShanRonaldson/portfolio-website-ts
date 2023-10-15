import { Sections } from "./Sections.interface";
import Projects from "./../data/projects.json";
import "../images/culture.png";

export function ProjectsSection({ heading, id }: Sections) {
  return (
    <section className="projects-section-wrapper section">
      <h2 className="projects-title" id={id}>{heading}</h2>
      <div className="projects-content">
        {Object.values(Projects).map((value, i: number) => (
          <div className="project-wrapper" key={i}>
            <a
              href={value.link}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={require(`../images/${value.image}.png`)}
                alt={value.description}
              />
              <p className="project-heading">{value.name}</p>
              <div className="more-info">
                <p>{value.description}</p>
                <p>
                  Related to: <i>{value["related-to"]}</i>
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
