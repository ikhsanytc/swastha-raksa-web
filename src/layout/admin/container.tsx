import { motion } from "motion/react";
import SearchIconDesktop from "../../components/search-icon-desktop";
import SidebarDesktop from "../../components/sidebar-desktop";
import NavbarMobile from "../../components/navbar-mobile";
import useAtTop from "../../hooks/useAtTop";
import type { FC, ReactNode } from "react";

type ContainerPropsAdmin = {
  children: ReactNode;
  page?: "home" | "addArticle";
};

const ContainerAdmin: FC<ContainerPropsAdmin> = ({
  children,
  page = "home",
}) => {
  const { isAtTop } = useAtTop();
  return (
    <div className="min-h-screen flex flex-col bg-blue-100 relative" id="badan">
      {/* search icon */}
      <SearchIconDesktop isAtTop={isAtTop} />

      {/* sidebar desktop */}
      <SidebarDesktop active={page} admin />
      {/* navbar mobile */}
      <NavbarMobile isAtTop={isAtTop} active={page} admin />

      {/* main content */}
      <div className="lg:ml-64 flex flex-col flex-grow">
        {/* Banner */}
        <div className="relative h-[400px] w-full">
          <div className="bg-blue-500/25 absolute flex justify-center items-center w-full h-full backdrop-filter backdrop-blur-[3px]">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="font-bold text-5xl text-white text-center"
            >
              {page === "home"
                ? "Swastha Raksa Admin"
                : page === "addArticle"
                ? "Add Article"
                : ""}
            </motion.h1>
          </div>
          <img
            src="/banner.jpg"
            alt=""
            className="w-full h-[400px] object-cover object-center bg-local"
          />
        </div>

        {/* Children content */}
        <div className="lg:px-14 px-5 pt-10 pb-10 flex-grow">{children}</div>

        {/* Footer */}
        <footer className="flex flex-col mt-auto">
          <hr className="text-gray-900" />
          <div className="p-5 flex gap-4 items-center">
            <img src="/Instagram_icon.png" className="w-8 h-8" alt="" />
            <img src="/x_icon.png" className="w-8 h-8" alt="" />
            <img src="/email_icon.png" className="w-8 h-8" alt="" />
          </div>
          <div className="bg-gray-900 p-5 text-white w-full">
            <span className="font-semibold md:text-lg text-sm">
              Copyright © {new Date().getFullYear()} SwasthaRaksha –
              All Rights Reserved
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContainerAdmin;
