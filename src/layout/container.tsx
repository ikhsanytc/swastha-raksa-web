import { motion } from "motion/react";
import SearchIconDesktop from "../components/search-icon-desktop";
import SidebarDesktop from "../components/sidebar-desktop";
import NavbarMobile from "../components/navbar-mobile";
import useAtTop from "../hooks/useAtTop";
import type { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  page?: string;
};

const Container: FC<ContainerProps> = ({ children, page = "home" }) => {
  const { isAtTop } = useAtTop();
  return (
    <div className="min-h-screen flex flex-col relative bg-blue-100" id="badan">
      {/* search icon */}
      <SearchIconDesktop isAtTop={isAtTop} />

      {/* sidebar desktop */}
      <SidebarDesktop active={page} />
      {/* navbar mobile */}
      <NavbarMobile isAtTop={isAtTop} active={page} />
      {/* main content */}
      <div className="lg:ml-64 flex-1 flex flex-col">
        <div className="relative h-[400px] w-full">
          <div className="bg-blue-500/25 absolute flex justify-center items-center w-full h-full backdrop-filter backdrop-blur-[3px]">
            <motion.h1
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              className="font-bold text-5xl text-white text-center"
            >
              {page === "home"
                ? "Swastha Raksa"
                : page.charAt(0).toUpperCase() + page.slice(1)}
            </motion.h1>
          </div>
          <img
            src="/banner.jpg"
            alt=""
            className="w-full h-[400px] object-cover object-center bg-local"
          />
        </div>
        <div className="lg:px-14 px-5 pt-10 pb-10">{children}</div>
        <footer className="flex flex-col">
          <hr className="text-gray-900" />
          <div className="p-5 flex gap-4 items-center">
            <img src="/Instagram_icon.png" className="w-8 h-8" alt="" />
            <img src="/x_icon.png" className="w-8 h-8" alt="" />
            <img src="/email_icon.png" className="w-8 h-8" alt="" />
          </div>
          <div className="bg-gray-900 p-5 text-white w-full">
            <h1 className="font-semibold md:text-lg text-sm">
              Copyright © {new Date().getFullYear()} SwasthaRaksha -
              All Rights Reserved
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Container;
