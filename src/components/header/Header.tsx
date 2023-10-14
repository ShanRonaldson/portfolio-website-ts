import { NavLinks } from "../navigation/NavLinks";
import { NavLinksProps } from "../navigation/Navigation.interface";

export function Header({ sections }: NavLinksProps) {
  return (
    <>
      <header>
        <h1>Shannon Ronaldson</h1>
        <NavLinks sections={sections}></NavLinks>
      </header>
    </>
  );
}
