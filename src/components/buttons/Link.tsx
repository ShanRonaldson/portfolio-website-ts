import { LinkProps } from "./Buttons.interface";

export function Link({ text, ariaText, link, disabled }: LinkProps) {
  return (
    <a
      aria-label={ariaText || text}
      aria-disabled={disabled}
      href={link}
      className={`link-button ${disabled ? "disabled" : ""}`}
    >
      {text}
    </a>
  );
}
