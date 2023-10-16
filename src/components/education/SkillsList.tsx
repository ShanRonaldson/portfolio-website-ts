import { SkillList } from "./Education.interface";

export function SkillsList({ skills }: SkillList) {
  let hardSkills = skills.hard;
  let softSkills = skills.soft;
  return (
    <>
      <p>
        <strong>Skills</strong>
      </p>

      <ul className="list-wrapper">
        {hardSkills.map((skill, key) => (
          <li key={key} className="skill hard">
            {skill}
          </li>
        ))}

        <div className="top-divider"></div>
        {softSkills.length > 0 &&
          softSkills.map((skill, key) => (
            <li className="skill soft" key={key}>
              {skill}
            </li>
          ))}
      </ul>
    </>
  );
}
