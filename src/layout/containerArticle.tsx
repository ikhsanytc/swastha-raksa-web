import SearchIconDesktop from "../components/search-icon-desktop";
import SidebarDesktop from "../components/sidebar-desktop";
import NavbarMobile from "../components/navbar-mobile";
import useAtTop from "../hooks/useAtTop";
import type { FC, ReactNode } from "react";
import useUser from "../hooks/useUser";
import { Link } from "react-router";
import { PencilIcon } from "@heroicons/react/24/solid";
import type { ArticleType } from "../types/article";

type ContainerArticleProps = {
  children: ReactNode;
  article: ArticleType;
  isEditArticle?: boolean;
};

const ContainerArticle: FC<ContainerArticleProps> = ({
  children,
  article,
  isEditArticle = false,
}) => {
  const { isAtTop } = useAtTop();
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col relative bg-blue-100" id="badan">
      {/* search icon */}
      <SearchIconDesktop isAtTop={isAtTop} isArticle />

      {/* sidebar desktop */}
      <SidebarDesktop active={"article"} />

      {/* navbar mobile */}
      <NavbarMobile isAtTop={isAtTop} active={"article"} isArticle />

      {/* main content */}
      <div className="flex-1 lg:ml-64 flex flex-col">
        <div className="lg:px-14 px-5 md:pt-10 pt-20 pb-10">{children}</div>

        <footer className="flex flex-col mt-auto">
          {user && !isEditArticle && (
            <Link to={`/article/edit/${article.slug}`}>
              <div className="lg:mx-14 mx-5 p-2 flex gap-1 text-blue-500 mb-5 cursor-pointer hover:bg-slate-500/20 rounded w-fit transition duration-150">
                <PencilIcon width={24} />
                <span className="text-xl">Edit this article</span>
              </div>
            </Link>
          )}
          <hr className="text-gray-900" />
          <div className="p-5 flex gap-4 items-center">
            <img src="/Instagram_icon.png" className="w-8 h-8" alt="" />
            <img src="/x_icon.png" className="w-8 h-8" alt="" />
            <img src="/email_icon.png" className="w-8 h-8" alt="" />
          </div>
          <div className="bg-gray-900 p-5 text-white w-full">
            <span className="font-semibold md:text-lg text-sm">
              Copyright © {new Date().getFullYear()} SwasthaRaksha -
              All Rights Reserved
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContainerArticle;
