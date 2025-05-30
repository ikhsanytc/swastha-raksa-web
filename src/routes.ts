import { createBrowserRouter, redirect } from "react-router";
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";
import Gallery from "./pages/gallery";
import Login from "./pages/admin/login";
import HomeAdmin from "./pages/admin/home";
import { getUser, supabase } from "./lib/supabase";
import AddArticle from "./pages/admin/add-article";
import type { ArticleType } from "./types/article";
import type { PostgrestSingleResponse } from "@supabase/supabase-js";
import Article from "./pages/article";
import EditArticle from "./pages/admin/edit-article";

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
        path: "/article/:slug",
        loader: async ({ params }) => {
          const { data } = (await supabase
            .from("article")
            .select()
            .eq("slug", params.slug)
            .maybeSingle()) as PostgrestSingleResponse<ArticleType>;
          return { article: data };
        },
        Component: Article,
      },
      {
        path: "/article/edit/:slug",
        loader: async ({ params }) => {
          const user = await getUser();
          if (!user) {
            return redirect("/admin/login");
          }
          const { data } = (await supabase
            .from("article")
            .select()
            .eq("slug", params.slug)
            .maybeSingle()) as PostgrestSingleResponse<ArticleType>;
          return { article: data };
        },
        Component: EditArticle,
      },
      {
        path: "admin",
        id: "admin-root",
        loader: async () => {
          const user = await getUser();
          if (!user) {
            return redirect("/admin/login");
          }
          return { user };
        },
        children: [
          {
            index: true,
            Component: HomeAdmin,
          },
          {
            path: "add_article",
            Component: AddArticle,
          },
        ],
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
      {
        path: "/admin/logout",
        loader: async () => {
          await supabase.auth.signOut();
          return redirect("/");
        },
      },
    ],
  },
]);
