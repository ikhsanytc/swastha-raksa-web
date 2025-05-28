import { motion } from "motion/react";
import SearchIconDesktop from "../components/search-icon-desktop";
import SidebarDesktop from "../components/sidebar-desktop";
import NavbarMobile from "../components/navbar-mobile";
import useAtTop from "../hooks/useAtTop";

const Gallery = () => {
  const { isAtTop } = useAtTop();
  return (
    <div className="min-h-screen relative bg-blue-100">
      {/* search icon */}
      <SearchIconDesktop isAtTop={isAtTop} />

      {/* sidebar desktop */}
      <SidebarDesktop active="gallery" />
      {/* navbar mobile */}
      <NavbarMobile active="gallery" isAtTop={isAtTop} />
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
              Gallery
            </motion.h1>
          </div>
          <img
            src="/banner.jpg"
            alt=""
            className="w-full h-[400px] object-cover object-center bg-local"
          />
        </div>
        <div className="lg:px-14 px-5 pt-10 pb-10">
          <section id="gallery" className="flex flex-wrap gap-5 justify-center">
            <iframe
              width={300}
              height={300}
              src="https://www.youtube.com/embed/NHnepvYmvyA?si=90AiTqn162Zon8hl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              width={300}
              height={300}
              src="https://www.youtube.com/embed/o3I0mJ2RfU0?si=ErAFASXqrvCD5b5c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              width={300}
              height={300}
              src="https://www.youtube.com/embed/uirINayrSJs?si=2ulrabREK1lHdR63"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              width={300}
              height={300}
              src="https://www.youtube.com/embed/Y18Vz51Nkos?si=NTtGqWe23UsNd1Y4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              width={300}
              height={300}
              src="https://www.youtube.com/embed/aasKIDz9ZX4?si=L9Oi0XvFOmOqTLIP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              width={300}
              height={300}
              src="https://www.youtube.com/embed/_th5U5hRu8k?si=_AHTkeMMndi7UIYu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              width={300}
              height={300}
              src="https://www.youtube.com/embed/5Pc0GW7jsDo?si=NFAp66ExqjzIsjV1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
