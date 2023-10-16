import workData from "./../data/work.json";
import { Sections } from "./Sections.interface";
import { SkillsList } from "../components/education/SkillsList";
import { DutiesList } from "../components/work/DutiesList";

export function WorkSection({ heading, id }: Sections) {
  return (
    <section className="work-section-wrapper section column-section">
      <h2 className="section-header" id={id}>
        {heading}
      </h2>

      <div className="column-block-wrapper">
        {Object.values(workData)
          .sort()
          .reverse()
          .map((value, i: number) => (
            <div className="content-wrapper" key={i}>
              <div className="content">
                <div className="heading-wrapper">
                  <h3 className="heading small">{value.position}</h3>
                  <p className="subheading">
                    {value.company}
                    <small>
                      <i>
                        ({value.start} - {value.end})
                      </i>
                    </small>
                  </p>
                  <span className="subheading">
                    <small>{value.location}</small>
                    <small>
                      <i>({value.type})</i>
                    </small>
                  </span>
                </div>

                <div className="more-info">
                  <DutiesList duties={value.duties}></DutiesList>
                  <SkillsList skills={value.skills}></SkillsList>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
