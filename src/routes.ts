import { createBrowserRouter } from "react-router";
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";
import Gallery from "./pages/gallery";

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
    ],
  },
]);
