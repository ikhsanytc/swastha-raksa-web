import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef, useState, type FC } from "react";
import { Link } from "react-router";
import SearchOverlay from "./search-overlay";
import { navLinks, navLinksAdmin } from "../constants/navLink";

type NavbarMobileProps = {
  isAtTop: boolean;
  active?: string;
  admin?: boolean;
};

const NavbarMobile: FC<NavbarMobileProps> = ({
  isAtTop,
  active = "home",
  admin = false,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setShowSidebar(false);
      }
    };
    if (showSidebar) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("mousedown", handleClickOutside);
    }
    if (!showSidebar) {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);
  return (
    <>
      {/* <div
        className={`fixed bg-blue-100 w-screen h-screen z-[9999] flex justify-center items-center`}
      >
        <motion.img
          layoutId="logo"
          src="/logo.png"
          className="w-64 rounded-full"
          alt=""
        />
      </div> */}
      <SearchOverlay setShowSearch={setShowSearch} showSearch={showSearch} />
      <div
        className={`absolute bg-black/50 w-full h-full z-[88] backdrop-filter backdrop-blur-sm ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      ></div>
      <nav
        className={`${
          isAtTop
            ? "bg-transparent"
            : "bg-gray-900/80 backdrop-filter backdrop-blur-sm"
        } z-50 fixed top-0 w-full transition duration-300 lg:hidden`}
      >
        <div className="h-14 flex text-white items-center px-4 justify-between">
          <div className="flex gap-3">
            <Bars3Icon width={24} onClick={() => setShowSidebar(true)} />
            <Link to="/">
              <img src="/logo.png" className="w-9 rounded-full" alt="" />
            </Link>
          </div>
          <MagnifyingGlassIcon width={24} onClick={() => setShowSearch(true)} />
        </div>
      </nav>
      <div
        ref={sidebarRef}
        className={`fixed left-0 w-64 bg-gray-900 h-screen z-[99] ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:hidden transition-transform duration-300 p-4 text-white`}
      >
        <XMarkIcon width={24} onClick={() => setShowSidebar(false)} />
        <div className="mt-10 mb-10 px-8 flex flex-col gap-4">
          {!admin &&
            navLinks.map((item, idx) => (
              <Link
                to={item.path}
                key={idx}
                className={
                  active == item.title.toLowerCase()
                    ? "font-semibold"
                    : "font-light"
                }
              >
                {item.title}
              </Link>
            ))}
          {admin &&
            navLinksAdmin.map((item, idx) => (
              <Link
                to={item.path}
                key={idx}
                className={
                  active == item.title.toLowerCase()
                    ? "font-semibold"
                    : "font-light"
                }
              >
                {item.title}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
