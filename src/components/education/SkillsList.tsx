import { Skills } from "./Education.interface";

export function SkillsList({ skills }: Skills) {
  return (
    <>
      <p>
        <strong>Skills</strong>
      </p>
      <ul className="list-wrapper">
        {skills.map((skill, key) => (
          <li key={key} className="skill">
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}
