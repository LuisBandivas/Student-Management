import React from "react";

// Styles
import { Input } from "../assets/design/InputStyle";

//Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required("School ID or email is required"),
  password: yup.string().required("Password is required"),
});

type LoginForm = yup.InferType<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginForm) => {
    const formattedData = {
      username: data.username,
      password: data.password,
    };

    console.log("Login Data:", formattedData);
    reset();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-fit h-3/5 bg-white rounded-xl p-10 shadow-lg border flex flex-col">
        <section className="flex items-center gap-3">
          <img
            src=""
            alt="Logo"
            className="w-24 h-24 rounded-full object-cover bg-gray-200"
          />
          <article>
            <h3 className="text-h-h3 font-semibold">Welcome to HAHA</h3>
            <p className="text-p-rg font-medium text-gray-500">
              Halimaw at Haswang Academy Learning Management System
            </p>
          </article>
        </section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 flex flex-col items-center justify-between"
        >
          <section className="w-full pt-20 flex flex-col">
            <p className="text-p-sm font-medium">School ID or Username</p>
            <input
              type="text"
              {...register("username")}
              className={Input(!!errors.username)}
              placeholder="Enter your school ID or email"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
            <p className="text-p-sm font-medium mt-3">Password</p>
            <input
              type="password"
              {...register("password")}
              className={Input(!!errors.password)}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </section>
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-md bg-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
