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
          <div key={key} className="content-wrapper">
            <div className="content">
              <h4 className="heading">
                {uni.institution} <i>({uni.years})</i>
              </h4>
              <small>{uni.location}</small>
              <p className="bottom-divider">
                {uni.degree} in <strong> {uni.major}</strong>
              </p>
              <SkillsList skills={uni.skills}></SkillsList>
              <img
                className="vines"
                src={require("./../../images/trees.svg").default}
                alt=""
              />
            </div>
          </div>
        ))}
    </>
  );
}
