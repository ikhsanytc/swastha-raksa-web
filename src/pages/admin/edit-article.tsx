import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import type { ArticleType } from "../../types/article";
import NotFound from "../notfound";
import ContainerArticle from "../../layout/containerArticle";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { getStoragePath, supabase } from "../../lib/supabase";
import { toast } from "react-toastify";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";

const editArticleScheme = z.object({
  image: z.any().refine((files) => files?.length === 1, "Image required."),
  title: z.string().min(3, "Title minimum 3 characters"),
  description: z.string().min(5, "Description minimum 5 characters"),
});

const EditArticle = () => {
  const { article }: { article: ArticleType | null } = useLoaderData();
  const { quill, quillRef } = useQuill();
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof editArticleScheme>>({
    defaultValues: {
      title: article?.title,
      description: article?.description,
      image: null,
    },
  });
  const nav = useNavigate();
  if (!article) {
    return <NotFound message="Article is not found" />;
  }

  const imageFile = watch("image")?.[0] as File;

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
  const onSubmit: SubmitHandler<z.infer<typeof editArticleScheme>> = async ({
    description,
    title,
    image,
  }) => {
    const content = quill?.root.innerHTML;
    if (!content || quill.getText().trim() === "") {
      toast.error("Content is required!");
      return;
    }
    try {
      setIsLoading(true);
      const file = image?.[0] as File;
      let publicUrl: string = "";
      if (file) {
        const fileName = `${Date.now()}-${file.name}`;
        const fileNameToDelete = getStoragePath(article.thumbnail);
        // delete file sebelumnya
        const { error: ErrorDeleteFile } = await supabase.storage
          .from("thumbnail")
          .remove([fileNameToDelete]);
        if (ErrorDeleteFile) {
          setIsLoading(false);
          setError("image", {
            message: ErrorDeleteFile.message,
          });
          return;
        }
        // upload file
        const { error: ErrorUpload, data: UploadData } = await supabase.storage
          .from("thumbnail")
          .upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
          });
        if (ErrorUpload) {
          setIsLoading(false);
          setError("image", {
            message: ErrorUpload.message,
          });
          return;
        }
        const {
          data: { publicUrl: publicUrlSupabase },
        } = supabase.storage.from("thumbnail").getPublicUrl(UploadData.path);
        publicUrl = publicUrlSupabase;
      }
      const { error: ErrorUpdate } = await supabase
        .from("article")
        .update({
          title,
          description,
          thumbnail: file ? publicUrl : article.thumbnail,
          content,
        })
        .eq("id", article.id);
      if (ErrorUpdate) {
        throw new Error(ErrorUpdate.message);
      }
      toast.success("Success edit article");
      nav(`/article/${article.slug}`);
    } catch (e: any) {
      setIsLoading(false);
      if (e.message) {
        toast.error(e.message);
        return;
      }
      toast.error("Unexpected error");
    }
  };
  const handleOnClickImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  return (
    <ContainerArticle article={article} isEditArticle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 justify-center items-center mb-32">
          <div className="">
            <img
              src={
                imageFile ? URL.createObjectURL(imageFile) : article.thumbnail
              }
              onClick={handleOnClickImage}
              className="w-64 h-64 object-cover object-center cursor-pointer"
              alt=""
            />
            <input
              type="file"
              className="hidden"
              {...register("image")}
              ref={(e) => {
                register("image").ref(e);
                fileRef.current = e;
              }}
            />
          </div>
          <input
            type="text"
            className="outline-none text-center border-b-1 md:text-5xl text-3xl"
            placeholder="Title..."
            {...register("title")}
          />
          <div className="w-full">
            <div className="w-full flex justify-center items-center">
              <textarea
                id="desc"
                placeholder="Description..."
                className="outline-none border-b-1 md:text-xl w-full md:w-2/3"
                {...register("description")}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="h-96 mb-5">
          <div ref={quillRef}></div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full disabled:cursor-not-allowed text-center disabled:bg-slate-500 bg-transparent py-2 cursor-pointer border-1 md:mt-10 mt-24"
        >
          Submit
        </button>
        <button
          type="button"
          disabled={isLoading}
          onClick={handleOnDelete}
          className="w-full text-center disabled:cursor-not-allowed bg-transparent py-2 cursor-pointer border-1 border-red-600 mt-5 text-red-600"
        >
          Delete
        </button>
      </form>
    </ContainerArticle>
  );
};

export default EditArticle;
