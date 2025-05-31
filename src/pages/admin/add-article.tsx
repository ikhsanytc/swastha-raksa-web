import { useRef, useState } from "react";
import ContainerAdmin from "../../layout/admin/container";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../lib/supabase";
import { useNavigate, useRouteLoaderData } from "react-router";
import type { User } from "@supabase/supabase-js";
import { toast } from "react-toastify";
import slugify from "../../lib/slug";
import JoditEditor from "jodit-react";
import "../../article.css";

const articleSchema = z.object({
  image: z.any().refine((files) => files?.length === 1, "Image required."),
  title: z.string().min(3, "Title minimum 3 characters"),
  description: z.string().min(5, "Description minimum 5 characters"),
});

const AddArticle = () => {
  const routeData = useRouteLoaderData<{ user: User | null }>("admin-root");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nav = useNavigate();

  if (!routeData) {
    return <div className="bg-blue-100 min-h-screen"></div>;
  }

  const { user } = routeData;
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const imageFile = watch("image")?.[0];
  const textTitleValue = watch("title", "");
  const isLongTitle = textTitleValue.length > 30;

  const onSubmit: SubmitHandler<z.infer<typeof articleSchema>> = async ({
    description,
    title,
    image,
  }) => {
    if (!user) throw new Error("Harus login");

    const file = image?.[0] as File;
    const fileName = `${Date.now()}-${file.name}`;

    if (!content || content.trim() === "" || content === "<p><br></p>") {
      toast.error("Content required");
      return;
    }

    try {
      setIsLoading(true);

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from("thumbnail")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        setIsLoading(false);
        setError("image", { message: uploadError.message });
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("thumbnail").getPublicUrl(uploadData.path);

      const { error: insertError } = await supabase
        .from("article")
        .insert({
          slug: slugify(title),
          title,
          description,
          content,
          id_user: user.id,
          thumbnail: publicUrl,
        })
        .select()
        .maybeSingle();

      if (insertError) throw new Error(insertError.message);

      setIsLoading(false);
      setValue("title", "");
      setValue("description", "");
      setValue("image", null);
      setContent("");
      nav(`/article/${slugify(title)}`);
      toast.success("Success create article");
    } catch (e: any) {
      setIsLoading(false);
      toast.error(e?.message || "Unexpected error");
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <ContainerAdmin page="addArticle">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 justify-center items-center mb-32">
          <div>
            <img
              className="w-64 h-64 object-cover object-center cursor-pointer"
              alt=""
              onClick={handleImageClick}
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : "https://placehold.co/256x256?text=Click+to+upload"
              }
            />
            <p className="text-red-600 text-center">
              {errors.image?.message as string}
            </p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="image"
              {...register("image")}
              ref={(e) => {
                register("image").ref(e);
                fileInputRef.current = e;
              }}
            />
          </div>

          <div>
            {isLongTitle ? (
              <textarea
                className={`outline-none text-center border-b-1 md:text-5xl text-3xl ${
                  errors.title ? "text-red-600" : ""
                }`}
                placeholder="Title..."
                autoFocus
                {...register("title")}
                rows={Math.ceil(textTitleValue.length / 30)}
              />
            ) : (
              <input
                type="text"
                className={`outline-none text-center border-b-1 md:text-5xl text-3xl ${
                  errors.title ? "text-red-600" : ""
                }`}
                autoFocus
                placeholder="Title..."
                {...register("title")}
              />
            )}
            <p className="text-red-600 mt-2">{errors.title?.message}</p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="w-full flex justify-center items-center">
              <textarea
                id="desc"
                placeholder="Description..."
                className={`outline-none border-b-1 w-full text-xl ${
                  errors.description ? "text-red-600" : ""
                }`}
                {...register("description")}
              />
            </div>
            <p className="text-red-600 mt-2">{errors.description?.message}</p>
          </div>
        </div>

        <div className="mb-5">
          <JoditEditor
            value={content}
            config={{
              readonly: false,
              height: 600,
              toolbarAdaptive: false,
              style: {
                backgroundColor: "#DBEAFE",
              },
            }}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="border-1 py-2 px-4 mt-10 cursor-pointer w-full not-disabled:active:scale-95 transition duration-150 disabled:cursor-not-allowed disabled:bg-slate-400 md:mt-10 mt-24"
        >
          Submit
        </button>
      </form>
    </ContainerAdmin>
  );
};

export default AddArticle;
