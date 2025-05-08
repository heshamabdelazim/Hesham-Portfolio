interface socialStructure {
  id: number;
  icon: String;
  href: String;
  title: String;
}
let id: number = 1;
export const allSocial: socialStructure[] = [
  {
    id: id++,
    icon: "icon-github",
    href: "https://github.com/heshamabdelazim",
    title: "GitHub",
  },
  {
    id: id++,
    icon: "icon-envelope",
    href: "mailto:heshamabdelazim3@gmail.com",
    title: "Gmail",
  },
  {
    id: id++,
    icon: "icon-linkedin",
    href: "https://www.linkedin.com/in/hesham-abdelazim-kamel/",
    title: "LinkedIn",
  },
];
