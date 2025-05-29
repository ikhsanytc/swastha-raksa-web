import { createBrowserRouter, redirect } from "react-router";
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";
import Gallery from "./pages/gallery";
import Login from "./pages/admin/login";
import HomeAdmin from "./pages/admin/home";
import { getUser } from "./lib/supabase";
import AddArticle from "./pages/admin/add-article";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: NotFound,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/gallery",
        Component: Gallery,
      },
      {
        path: "/admin",
        loader: async () => {
          const user = await getUser();
          if (!user) {
            return redirect("/admin/login");
          }
          return { user };
        },
        Component: HomeAdmin,
      },
      {
        path: "/admin/add_article",
        loader: async () => {
          const user = await getUser();
          if (!user) {
            return redirect("/admin/login");
          }
          return { user };
        },
        Component: AddArticle,
      },
      {
        path: "/admin/login",
        loader: async () => {
          const user = await getUser();
          if (user) {
            return redirect("/admin");
          }
          return;
        },
        Component: Login,
      },
    ],
  },
]);
