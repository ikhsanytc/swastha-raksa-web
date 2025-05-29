import { useState } from "react";
import ContainerAdmin from "../../layout/admin/container";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../lib/supabase";
import { useLoaderData } from "react-router";
import type { User } from "@supabase/supabase-js";
import { toast } from "react-toastify";
import slugify from "../../lib/slug";

const articleScheme = z.object({
  image: z.any().refine((files) => files?.length === 1, "Image required."),
  title: z.string().min(3, "Title minimum 3 characters"),
  description: z.string().min(5, "Description minimum 5 characters"),
});

const AddArticle = () => {
  const { quillRef, quill } = useQuill({ placeholder: "Content" });
  const { user }: { user: User | null } = useLoaderData();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<z.infer<typeof articleScheme>>({
    resolver: zodResolver(articleScheme),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const imageFile = watch("image")?.[0];
  const submit: SubmitHandler<z.infer<typeof articleScheme>> = async ({
    description,
    title,
    image,
  }) => {
    if (!user) {
      throw new Error("Harus login");
    }
    const file = image?.[0] as File;
    const fileName = `${Date.now()}-${file.name}`;
    const content = quill?.root.innerHTML;
    if (quill?.getText() === "") {
      throw new Error("Content required");
    }
    try {
      setIsLoading(true);
      const { error: ErrorUpload, data } = await supabase.storage
        .from("thumbnail")
        .upload(`${fileName}`, file, {
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
        data: { publicUrl },
      } = supabase.storage.from("thumbnail").getPublicUrl(data.path);
      const { error } = await supabase.from("article").insert({
        slug: slugify(title),
        title,
        description,
        content,
        id_user: user.id,
        thumbnail: publicUrl,
      });
      if (error) {
        throw new Error(error.message);
      }
      setIsLoading(false);
      setValue("description", "");
      setValue("image", null);
      setValue("title", "");
      quill?.setText("");
      toast.success("Success create article");
    } catch (e: any) {
      setIsLoading(false);
      if (e.message) {
        toast.error(e.message);
        return;
      }
      toast.error("Unexpected error");
    }
  };
  return (
    <ContainerAdmin page="addArticle">
      <h1 className="font-bold text-3xl">ADD ARTICLE</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-8 mt-5">
          <div className="w-full">
            <div className="mb-5">
              <img
                src={
                  imageFile
                    ? URL.createObjectURL(imageFile)
                    : "https://placehold.co/554x544?text=Placeholder"
                }
                className="w-64"
                alt=""
              />
              <p className="text-red-600 mt-1">
                {errors.image?.message as string}
              </p>
            </div>
            <label
              htmlFor="image"
              className="py-2 px-4 bg-transparent border-1 cursor-pointer active:scale-95 transition duration-150"
            >
              Upload Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={isLoading}
              id="image"
              {...register("image")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Title"
              className={`lg:w-1/2 w-full border-b-1 outline-none text-xl ${
                errors.title ? "border-red-600 text-red-600" : ""
              }`}
              {...register("title")}
            />
            <p className="text-red-600 mt-1">{errors.title?.message}</p>
          </div>
          <div>
            <textarea
              id="desc"
              placeholder="Description"
              className={`lg:w-1/2 w-full outline-none border-b-1 text-xl ${
                errors.description ? "border-red-600 text-red-600" : ""
              }`}
              {...register("description")}
            ></textarea>
            <p className="text-red-600 mt-1">{errors.description?.message}</p>
          </div>
          <div>
            <div ref={quillRef}></div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="border-1 py-2 px-4 mt-10 cursor-pointer w-full not-disabled:active:scale-95 transition duration-150 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          Submit
        </button>
      </form>
    </ContainerAdmin>
  );
};

export default AddArticle;
