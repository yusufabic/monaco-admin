import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import Card from "../../components/card";
import Button from "../../components/button";
import Input from "../../components/input";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const auth = useAuth();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!auth.login(data.email, data.password)) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center p-3 md:p-16 bg-background">
      <div className="w-full max-w-md">
        <Card className="p-8">
          <div className="py-6 px-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-textPrimary">
              Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <Input
                  label="Email"
                  type="email"
                  {...register("email")}
                  className="mb-1"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-error">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-4">
                <Input
                  label="Password"
                  type="password"
                  {...register("password")}
                  className="mb-1"
                  autoComplete="current-password"
                />
                {errors.password && (
                  <p className="text-error">{errors.password.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full"
                variant="default"
                size="medium"
              >
                Login
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
