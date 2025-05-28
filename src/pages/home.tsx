import SearchIconDesktop from "../components/search-icon-desktop";
import SidebarDesktop from "../components/sidebar-desktop";
import NavbarMobile from "../components/navbar-mobile";
import { motion } from "motion/react";
import Whispers from "../components/Home/whispers";
import VisiAndMisi from "../components/Home/visi-and-misi";
import FotoFoto from "../components/Home/foto-foto";
import useAtTop from "../hooks/useAtTop";

const Home = () => {
  const { isAtTop } = useAtTop();
  return (
    <div className="min-h-screen relative bg-blue-100" id="badan">
      {/* search icon */}
      <SearchIconDesktop isAtTop={isAtTop} />

      {/* sidebar desktop */}
      <SidebarDesktop />
      {/* navbar mobile */}
      <NavbarMobile isAtTop={isAtTop} />
      {/* main content */}
      <div className="lg:ml-64">
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
              className="font-bold text-5xl text-white"
            >
              Swastha Raksa
            </motion.h1>
          </div>
          <img
            src="/banner.jpg"
            alt=""
            className="w-full h-[400px] object-cover object-center bg-local"
          />
        </div>
        <div className="lg:px-14 px-5 pt-10 pb-10">
          <Whispers />
          <VisiAndMisi />
          <FotoFoto />
        </div>
      </div>
    </div>
  );
};

export default Home;
