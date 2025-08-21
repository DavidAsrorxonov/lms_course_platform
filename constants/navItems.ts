interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Dashboard",
    href: "/admin",
  },
];
