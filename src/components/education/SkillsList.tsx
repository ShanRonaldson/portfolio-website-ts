import { Skills } from "./Education.interface";

export function SkillsList({ skills }: Skills) {
  return (
    <>
    <p><strong>Skills</strong></p>
      <ul className="skills-list-wrapper">
        {skills.map((skill, key) => (
          <li key={key}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
