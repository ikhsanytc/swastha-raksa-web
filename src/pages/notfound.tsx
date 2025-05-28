import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <div className="absolute top-5 left-5">
        <ArrowLeftIcon
          width={32}
          onClick={() => nav("/")}
          className="cursor-pointer"
        />
      </div>
      <img src="/not-found.svg" className="w-80" alt="" />
    </div>
  );
};

export default NotFound;
