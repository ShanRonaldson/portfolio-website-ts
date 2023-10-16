import { Duties } from "./Work.interface";

export function DutiesList({ duties }: Duties) {
  return (
    <>
      <p>
        <strong>Duties</strong>
      </p>
      <ul className="list-wrapper">
        {duties.map((duty, key) => (
          <li key={key} className="duty">
            {duty}
          </li>
        ))}
      </ul>
    </>
  );
}
