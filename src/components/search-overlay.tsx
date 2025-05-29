import { XMarkIcon } from "@heroicons/react/24/solid";
import { type Dispatch, type FC, type SetStateAction } from "react";

type SearchOverlayProps = {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
};

const SearchOverlay: FC<SearchOverlayProps> = ({
  showSearch,
  setShowSearch,
}) => {
  return (
    <>
      <div
        onClick={() => setShowSearch(false)}
        key="bg-blur-search"
        className={`fixed bg-black/50 backdrop-filter backdrop-blur-sm w-full h-full z-[999] ${
          showSearch ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
      ></div>
      <div
        key="div-utama-search"
        className={`fixed bg-gray-900 lg:w-1/2 lg:h-1/2 p-5 z-[9999] w-xs h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl ${
          showSearch ? "scale-100" : "scale-0 pointer-events-none"
        } transition-all duration-300`}
      >
        <div className="bg-slate-200/20 w-full py-2 px-4 rounded flex gap-3 items-center text-white">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none"
          />
          <XMarkIcon
            width={24}
            className="cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
