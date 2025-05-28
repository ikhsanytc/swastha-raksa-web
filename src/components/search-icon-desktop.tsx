import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { type FC } from "react";

type SearchIconDesktopProps = {
  isAtTop: boolean;
};

const SearchIconDesktop: FC<SearchIconDesktopProps> = ({ isAtTop }) => {
  return (
    <div className="lg:block hidden">
      <div className="top-5 fixed right-0 z-50 py-1 px-3">
        <MagnifyingGlassIcon width={24} className="text-white" />
      </div>
      <div
        className={`fixed top-5 right-0 z-40 py-1 px-3 bg-black rounded-l-full w-12 h-8 ${
          isAtTop ? "translate-x-full" : "translate-x-0"
        } transition-transform duration-300`}
      ></div>
    </div>
  );
};

export default SearchIconDesktop;
