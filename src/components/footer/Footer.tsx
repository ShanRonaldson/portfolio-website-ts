import { NavLinks } from "../navigation/NavLinks";
import { NavLinksProps } from "../navigation/Navigation.interface";
import { OutsideLinks } from "../navigation/Links";

export function Footer({ sections }: NavLinksProps) {
  return (
    <>
      <footer>
        <NavLinks sections={sections}></NavLinks>
        <div className="outside-links-wrapper">
          <OutsideLinks></OutsideLinks>
        </div>
      </footer>
    </>
  );
}
