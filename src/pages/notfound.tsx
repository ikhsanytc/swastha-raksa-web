import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate, useRouteError } from "react-router";

const NotFound = () => {
  const nav = useNavigate();
  const error: any = useRouteError();
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
      <p className="text-3xl mt-4 font-bold">{error.statusText}</p>
    </div>
  );
};

export default NotFound;
