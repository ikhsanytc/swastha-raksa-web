export type navLinkType = {
  title: string;
  path: string;
};

export const navLinks: navLinkType[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Admin",
    path: "/admin",
  },
];

export const navLinksAdmin: navLinkType[] = [
  {
    title: "Home",
    path: "/admin",
  },
  {
    title: "Add Article",
    path: "/admin/add_article",
  },
];
