import { SkillsList } from "./SkillsList";
import educationData from "../../data/education.json";

export function UniversityInfo() {
  let university = educationData.university;

  return (
    <>
      {Object.entries(university)
        .sort()
        .reverse()
        .map(([key, uni]) => (
          <div key={key} className="edu-block-content-wrapper large">
            <div className="content">
              <h4>
                {uni.institution} <i>({uni.years})</i>
              </h4>
              <small>{uni.location}</small>
              <p>
                {uni.degree} in <strong> {uni.major}</strong>
              </p>
              <SkillsList skills={uni.skills}></SkillsList>
              <img
                className="vines"
                src={require("./../../styles/trees.svg").default}
                alt=""
              />
            </div>
          </div>
        ))}
    </>
  );
}
