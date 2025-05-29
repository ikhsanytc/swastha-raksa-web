import { useEffect, useState } from "react";
import type { ArticleType } from "../../types/article";
import { supabase } from "../../lib/supabase";
import { Link } from "react-router";

const FotoFoto = () => {
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
  return (
    <section id="foto-foto">
      <h1 className="font-semibold mb-5 md:text-4xl text-3xl hover:underline">
        KNOW YOUR ENEMY
      </h1>
      <p className="font-light text-xl leading-relaxed bg-blue">
        Literature on how to quit smoking, nicotine addiction, and understanding
        the damages of smoking on health. Help to raise awareness, and
        comprehend adolescent's battle against smoking, creating an informative
        haven for everyone. Click on the title to broaden your knowledge!
      </p>
      <div className="mt-5 flex gap-20 flex-wrap justify-center">
        {!isLoading &&
          articles?.map((item, idx) => (
            <div className="flex flex-col gap-4" key={idx}>
              <img
                src={item.thumbnail}
                className="w-64 h-64 object-cover object-center"
                alt=""
              />
              <Link
                to={`/article/${item.slug}`}
                className="font-light cursor-pointer text-gray-500 text-lg text-center py-2 px-4 hover:bg-gray-300 rounded"
              >
                {item.title}
              </Link>
            </div>
          ))}
        {isLoading &&
          Array.from({ length: 4 }).map((_, idx) => (
            <div className="flex flex-col gap-4" key={idx}>
              <img
                src="https://placehold.co/256x256?text=Loading..."
                className="w-64 h-64 object-cover object-center animate-pulse"
                alt=""
              />
              <p className="font-light cursor-pointer text-gray-500 text-lg text-center py-2 px-4 hover:bg-gray-300 rounded">
                Loading
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FotoFoto;
