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
  {
    title: "Logout",
    path: "/admin/logout",
  },
];
