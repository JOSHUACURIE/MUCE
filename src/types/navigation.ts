export interface NavItem {
  id: string;
  label: string;
  href?: string;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface NavigationData {
  topNav: NavItem[];
  mainNav: NavItem[];
}