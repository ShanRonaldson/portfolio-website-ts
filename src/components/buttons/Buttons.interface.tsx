interface BaseProps {
  text: string;
  ariaText?: string;
  disabled?: boolean;
}

export interface ButtonProps extends BaseProps {
  classType: "primary" | "warn" | "accept";
}

export interface LinkProps extends BaseProps {
  link: string;
}
