export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
  children?: NavItem[];
}
