import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, type FC } from "react";
import SearchOverlay from "./search-overlay";

type SearchIconDesktopProps = {
  isAtTop: boolean;
  isArticle?: boolean;
};

const SearchIconDesktop: FC<SearchIconDesktopProps> = ({
  isAtTop,
  isArticle = false,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div
        className="lg:block hidden cursor-pointer"
        onClick={() => setShowSearch(true)}
      >
        <div className="top-5 fixed right-0 z-50 py-1 px-3">
          <MagnifyingGlassIcon
            width={24}
            className={
              isArticle && isAtTop
                ? "text-black"
                : isArticle && !isAtTop
                ? "text-white"
                : "text-white"
            }
          />
        </div>
        <div
          className={`fixed top-5 right-0 z-40 py-1 px-3 bg-black rounded-l-full w-12 h-8 ${
            isAtTop ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300`}
        ></div>
      </div>
      <SearchOverlay showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default SearchIconDesktop;
