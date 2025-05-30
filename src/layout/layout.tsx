import { AnimatePresence } from "motion/react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../components/scroll-to-top";

const Layout = () => {
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Outlet />
      <ToastContainer />
    </AnimatePresence>
  );
};

export default Layout;
