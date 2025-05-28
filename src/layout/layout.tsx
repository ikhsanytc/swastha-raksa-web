import { AnimatePresence } from "motion/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <AnimatePresence mode="wait">
      <Outlet />
    </AnimatePresence>
  );
};

export default Layout;
