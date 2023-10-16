import { NavLinksProps } from "./Navigation.interface";

export function NavLinks({ sections }: NavLinksProps) {
  return (
    <>
      <nav>
        {sections.map((section, i: number) => (
          <a
            aria-label={section.ariaText || section.label}
            href={
              !!section.outsideLink ? `${section.link}` : `/#${section.link}`
            }
            key={i}
            target={!!section.outsideLink ? "_blank" : "_self"}
            rel={!!section.outsideLink ? "noreferrer" : ""}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </>
  );
}
