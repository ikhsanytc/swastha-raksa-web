import type { FC } from "react";
import type { activeNav } from "../types/activeNav";
import { Link } from "react-router";

type SidebarDesktopProps = {
  active?: activeNav;
};

const SidebarDesktop: FC<SidebarDesktopProps> = ({ active = "home" }) => {
  return (
    <div className="bg-gray-900 h-screen w-64 fixed left-0 text-white lg:block hidden">
      <div className="px-10 py-14">
        <img src="/logo.png" alt="" className="w-9 rounded-full" />
        <h1 className="text-2xl mt-12">SwasthaRaksa.org</h1>
      </div>
      <div className="flex flex-col gap-3 px-8">
        <Link
          to="/"
          className={
            active === "home"
              ? "font-semibold"
              : "font-light hover:text-white/80"
          }
        >
          Home
        </Link>
        <Link
          to="/about"
          className={
            active === "about"
              ? "font-semibold"
              : "font-light hover:text-white/80"
          }
        >
          About
        </Link>
        <Link
          to="/gallery"
          className={
            active === "gallery"
              ? "font-semibold"
              : "font-light hover:text-white/80"
          }
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default SidebarDesktop;
