import type { FC } from "react";
import { Link } from "react-router";
import { navLinks, navLinksAdmin } from "../constants/navLink";
import useUser from "../hooks/useUser";

type SidebarDesktopProps = {
  active?: string;
  admin?: boolean;
};

const SidebarDesktop: FC<SidebarDesktopProps> = ({
  active = "home",
  admin = false,
}) => {
  const { user } = useUser();
  return (
    <div className="bg-gray-900 h-screen w-64 fixed left-0 text-white lg:block hidden">
      <div className="px-10 py-14">
        <Link to="/">
          <img src="/logo.png" alt="" className="w-9 rounded-full" />
        </Link>
        <div className="mt-12"></div>
        <Link to="/" className="text-2xl hover:underline">
          Swastha Raksa
        </Link>
      </div>
      <div className="flex flex-col gap-3 px-8">
        {!admin && (
          <>
            {navLinks.map((item, idx) => (
              <Link
                to={item.path}
                key={idx}
                className={
                  active.toLowerCase().trim() ===
                  item.title.toLowerCase().trim()
                    ? "font-semibold"
                    : "font-light hover:text-white/80"
                }
              >
                {item.title}
              </Link>
            ))}
            <Link
              to={user ? "/admin" : "/admin/login"}
              className="font-light hover:text-white/80"
            >
              {user ? "Admin" : "Login"}
            </Link>
          </>
        )}
        {admin &&
          navLinksAdmin.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className={
                active.toLowerCase().trim() === item.title.toLowerCase().trim()
                  ? "font-semibold"
                  : "font-light hover:text-white/80"
              }
            >
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SidebarDesktop;
