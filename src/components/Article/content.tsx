import type { FC } from "react";
import { addTailwindClasses } from "../../lib/addClassesTailwind";
// import "../../article.css";

type ContentProps = {
  content: string;
};

const Content: FC<ContentProps> = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: addTailwindClasses(content),
      }}
      className="mt-32"
    ></div>
  );
};

export default Content;
