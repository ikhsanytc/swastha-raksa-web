import { AnimatePresence } from "motion/react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <AnimatePresence mode="wait">
      <Outlet />
      <ToastContainer />
    </AnimatePresence>
  );
};

export default Layout;
