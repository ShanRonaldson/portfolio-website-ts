import { SkillsList } from "./SkillsList";
import educationData from "../../data/education.json";

export function OtherEduInfo() {
  let other = educationData.other;

  return (
    <>
      {Object.entries(other)
        .sort()
        .reverse()
        .map(([key, course]) => (
          <div key={key} className="content-wrapper">
            <div className="content">
              <p>
                <a
                  href={course.link}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {course.course}
                </a>
              </p>
              <p>
                {course.institution} {course.type}
              </p>
              <p>
                <strong>Completed: </strong> {course.completed}
              </p>
              <SkillsList skills={course.skills}></SkillsList>
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
