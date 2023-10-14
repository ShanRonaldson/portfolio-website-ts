import { ButtonProps } from "./Buttons.interface";

export function Button({ text, ariaText, classType, disabled }: ButtonProps) {
  return (
    <button
      aria-label={ariaText || text}
      aria-disabled={disabled}
      className={`base-button ${classType} ${disabled ? "disabled" : ""}`}
    >
      {text}
    </button>
  );
}
