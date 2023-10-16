export interface NavigationProps {
  label: string;
  ariaText?: string;
  link: string;
  outsideLink?: boolean
}

export interface NavLinksProps {
  sections: NavigationProps[];
}
