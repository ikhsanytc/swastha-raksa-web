import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import type { ArticleType } from "../types/article";
import { supabase } from "../lib/supabase";
import { Link } from "react-router";

type SearchOverlayProps = {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
};

const SearchOverlay: FC<SearchOverlayProps> = ({
  showSearch,
  setShowSearch,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [articles, setArticles] = useState<ArticleType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await supabase.from("article").select();
      setArticles(data);
      setIsLoading(false);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from("article")
        .select()
        .ilike("title", `%${searchInput}%`);
      setArticles(data);
      setIsLoading(false);
    })();
  }, [searchInput]);
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
        className={`fixed bg-gray-900 md:w-1/2 md:h-1/2 p-5 z-[9999] w-xs h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl ${
          showSearch ? "scale-100" : "scale-0 pointer-events-none"
        } transition-all duration-300`}
      >
        <div className="bg-slate-200/20 w-full py-2 px-4 rounded flex gap-3 items-center text-white">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search..."
            className="w-full outline-none"
          />
          <XMarkIcon
            width={24}
            className={`cursor-pointer ${
              searchInput === "" ? "scale-0" : "scale-100"
            } transition duration-300`}
            onClick={() => setSearchInput("")}
          />
        </div>
        <div className="flex flex-col gap-4 mt-3 text-white overflow-auto max-h-3/4">
          {!isLoading &&
            articles?.map((item, idx) => (
              <Link to={`/article/${item.slug}`}>
                <div
                  className="w-full bg-slate-100/10 p-2 rounded cursor-pointer hover:bg-slate-100/20 duration-150 transition active:bg-slate-100/30"
                  key={idx}
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm font-light">{item.description}</p>
                </div>
              </Link>
            ))}
          {isLoading &&
            Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full bg-slate-100/10 p-2 rounded animate-pulse"
              >
                <div className="w-24 bg-slate-200/10 h-2 rounded-full"></div>
                <div className="w-64 bg-slate-200/10 h-5 mt-2 rounded"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
