import { useLoaderData } from "react-router";
import type { ArticleType } from "../types/article";
import ContainerArticle from "../layout/containerArticle";
import NotFound from "./notfound";
import Content from "../components/Article/content";

const Article = () => {
  const { article }: { article: ArticleType | null } = useLoaderData();
  if (!article) {
    return <NotFound message="Article is not found" />;
  }
  return (
    <ContainerArticle article={article}>
      <h1 className="text-5xl font-semibold text-center mt-2">
        {article.title}
      </h1>
      <Content content={article.content} />
    </ContainerArticle>
  );
};

export default Article;
