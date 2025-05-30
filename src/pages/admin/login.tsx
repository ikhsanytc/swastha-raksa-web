import {
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { supabase } from "../../lib/supabase";
import { useState } from "react";
import { toast } from "react-toastify";

const loginScheme = z.object({
  email: z.string().min(8),
  password: z.string().min(8),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof loginScheme>>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const submit: SubmitHandler<z.infer<typeof loginScheme>> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw new Error(error.message);
      }
      toast.success("Welcome admin");
      setIsLoading(false);
      nav("/admin");
    } catch (e: any) {
      setIsLoading(false);
      if (e.message && e.message == "Invalid login credentials") {
        setError("email", {
          message: "Email or password is not valid!",
        });
        setError("password", {
          message: "Email or password is not valid!",
        });
        return;
      }
      if (e.message) {
        toast.error(e.message);
        return;
      }
      toast.error("Unexpected error");
    }
  };
  return (
    <div className="bg-white flex justify-center items-center min-h-screen gap-4 px-4">
      <Link to="/" className="absolute top-5 left-5 cursor-pointer">
        <ArrowLeftIcon width={32} />
      </Link>
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white border border-slate-400 lg:w-md w-full p-5 rounded-lg shadow-2xl h-96"
      >
        <h1 className="text-4xl font-semibold text-blue-400 text-center">
          WELCOME
        </h1>
        <div className="mt-10 mb-10 flex flex-col gap-10">
          <div>
            <input
              type="email"
              className={`w-full outline-none border-b-1 text-xl ${
                errors.email ? "border-red-600 text-red-600" : ""
              }`}
              placeholder="Email"
              {...register("email")}
            />
            <p className="mt-1 text-red-500">{errors.email?.message}</p>
          </div>
          <div>
            <div
              className={`w-full border-b-1 text-xl flex gap-1 ${
                errors.password ? "border-red-600 text-red-600" : ""
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                className="w-full outline-none"
                placeholder="Password"
                {...register("password")}
              />
              {showPassword ? (
                <EyeSlashIcon
                  width={24}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeIcon
                  width={24}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <p className="mt-1 text-red-500">{errors.password?.message}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 transition duration-150 not-disabled:hover:scale-105 not-disabled:active:scale-110 not-disabled:active:-translate-y-1 py-2 px-4 text-white font-semibold rounded not-disabled:cursor-pointer w-full disabled:cursor-not-allowed disabled:bg-gray-500"
        >
          Login
        </button>
      </form>
      <img src="/login_undraw.svg" className="w-80 lg:block hidden" alt="" />
    </div>
  );
};

export default Login;
