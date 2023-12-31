import { UniversityInfo } from "../components/education/UniversityInfo";
import { OtherEduInfo } from "../components/education/OtherEduInfo";
import { Sections } from "./Sections.interface";

export function EducationSection({ heading, id }: Sections) {
  return (
    <section className="education-section-wrapper section column-section">
      <h2 id={id} className="section-header space-on-top">
        {heading}
      </h2>

      <h3 className="section-header">University Education</h3>
      <div className="column-block-wrapper">
        <UniversityInfo></UniversityInfo>
      </div>

      <h3 className="section-header">Other courses</h3>
      <div className="column-block-wrapper small">
        <OtherEduInfo></OtherEduInfo>
      </div>
    </section>
  );
}
