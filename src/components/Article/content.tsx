import type { FC } from "react";
import { parserHTML } from "../../lib/parserHTML";
import styles from "../../pages/article.module.css";
// import "../../article.css";

type ContentProps = {
  content: string;
};

const Content: FC<ContentProps> = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: parserHTML(content),
      }}
      className={`mt-32 ${styles.container}`}
    ></div>
  );
};

export default Content;
