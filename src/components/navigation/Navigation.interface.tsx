export interface NavigationProps {
  label: string;
  ariaText?: string;
  link: string;
  openInNewTab?: boolean
}

export interface NavLinksProps {
  sections: NavigationProps[];
}
