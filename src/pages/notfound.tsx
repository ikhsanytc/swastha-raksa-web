import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import type { FC } from "react";
import { useNavigate } from "react-router";

type NotFoundProps = {
  message?: string;
};

const NotFound: FC<NotFoundProps> = ({ message }) => {
  const nav = useNavigate();
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <div className="absolute top-5 left-5">
        <ArrowLeftIcon
          width={32}
          onClick={() => nav(-1)}
          className="cursor-pointer"
        />
      </div>
      <img src="/not-found.svg" className="w-80" alt="" />
      <p className="text-3xl mt-4 font-bold">{message}</p>
    </div>
  );
};

export default NotFound;
