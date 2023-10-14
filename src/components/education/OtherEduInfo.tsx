import { SkillsList } from "./SkillsList";
import educationData from "../../data/education.json";
import "../../styles/vine.svg";

export function OtherEduInfo() {
  let other = educationData.other;

  return (
    <>
      {Object.entries(other)
        .sort()
        .reverse()
        .map(([key, course]) => (
          <div key={key} className={`edu-block-content-wrapper ${key}`}>
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
                src={require("./../../styles/trees.svg").default}
                alt=""
              />
            </div>
          </div>
        ))}
    </>
  );
}
