import { NavLinksProps } from "./Navigation.interface";

export function NavLinks({ sections }: NavLinksProps) {
  return (
    <>
      <nav>
        {sections.map((section, i: number) => (
          <a
            aria-label={section.ariaText || section.label}
            href={`/#${section.link}`}
            key={i}
            target={!!section.openInNewTab ? "_blank" : "_self"}
            rel={!!section.openInNewTab ? "noreferrer" : ""}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </>
  );
}
