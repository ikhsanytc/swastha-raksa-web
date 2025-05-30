import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import type { ArticleType } from "../../types/article";
import NotFound from "../notfound";
import ContainerArticle from "../../layout/containerArticle";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { getStoragePath, supabase } from "../../lib/supabase";
import { toast } from "react-toastify";

const EditArticle = () => {
  const { article }: { article: ArticleType | null } = useLoaderData();
  const { quill, quillRef } = useQuill();
  const nav = useNavigate();
  if (!article) {
    return <NotFound message="Article is not found" />;
  }
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(article.content);
    }
  }, [quill]);
  const handleOnDelete = async () => {
    const question = confirm("Are you sure?");
    if (!question) {
      return;
    }
    const path = getStoragePath(article.thumbnail);
    try {
      const { error: ErrorDeleteArticle } = await supabase
        .from("article")
        .delete()
        .eq("id", article.id);
      if (ErrorDeleteArticle) {
        throw new Error(ErrorDeleteArticle.message);
      }
      const { error: ErrorDeleteStorage } = await supabase.storage
        .from("thumbnail")
        .remove([path]);
      if (ErrorDeleteStorage) {
        throw new Error(ErrorDeleteStorage.message);
      }
      toast.success("Success to delete article");
      nav("/");
    } catch (e: any) {
      if (e.message) {
        toast.error(e.message);
        return;
      }
      toast.error("Unexpected error");
    }
  };
  return (
    <ContainerArticle article={article} isEditArticle>
      <div className="flex flex-col gap-4 justify-center items-center mb-32">
        <img
          src={article.thumbnail}
          className="w-64 h-64 object-cover object-center"
          alt=""
        />
        <input
          type="text"
          className="outline-none text-center border-b-1 md:text-5xl text-3xl"
          placeholder="Title..."
          defaultValue={article.title}
        />
        <div className="w-full">
          <div className="w-full flex justify-center items-center">
            <textarea
              name="desc"
              id="desc"
              placeholder="Description..."
              defaultValue={article.description}
              className="outline-none border-b-1 md:text-xl w-full md:w-2/3"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="h-96 mb-5">
        <div ref={quillRef}></div>
      </div>
      <button className="w-full text-center bg-transparent py-2 cursor-pointer border-1 md:mt-10 mt-24">
        Submit
      </button>
      <button
        type="button"
        onClick={handleOnDelete}
        className="w-full text-center bg-transparent py-2 cursor-pointer border-1 border-red-600 mt-5 text-red-600"
      >
        Delete
      </button>
    </ContainerArticle>
  );
};

export default EditArticle;
