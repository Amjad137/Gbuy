"use client";
import { useEffect, useState, FormEvent } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type inputCredentials = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputCredentials>();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<inputCredentials> = async (data) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Logged In Successfully!");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center w-full max-w-sm mx-auto mt-10 justify-between p-4 gap-4 shadow-md shadow-slate-500 bg-slate-100">
        <input
          {...register("email", { required: true })}
          className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent w-full resize-none"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-sm text-red-700">This field is required</span>
        )}
        <input
          {...register("password", { required: true })}
          className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent w-full resize-none"
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-sm text-red-700">This field is required</span>
        )}
        <button
          type="submit"
          className="border-2 bg-green-500 p-2 text-white rounded-lg"
        >
          {isLoading ? "Logging in..." : "Log In"}
        </button>
      </div>
    </form>
  );
};

export default Login;
