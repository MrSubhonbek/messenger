"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

import Button from "~/components/Button";
import Input from "~/components/Input";
import AuthSocialButton from "./AuthSocialButton";

type TypeVariant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<TypeVariant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    variant === "LOGIN" ? setVariant("REGISTER") : setVariant("LOGIN");
  }, [variant]);
  const isRegister = variant === "REGISTER";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    } else {
      signIn("credentials", { ...data, redirect: false })
        .then(callback => {
          if (callback?.error) toast.error("Invalid credentials!");
          else if (callback?.ok) toast.success("Logged in!");
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    console.log("next auth");
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-neutral-950  px-4 py-8 shadow-lg  sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {isRegister && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button disable={isLoading} fullWidth type="submit">
              {isRegister ? "Register" : "Sing in"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-fuchsia-900" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-neutral-950 px-2 text-fuchsia-900">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2 px-2 text-sm text-neutral-100">
          <div>
            {isRegister ? "New to Messenger" : "Already have an account?"}
          </div>
          <div
            onClick={toggleVariant}
            className="cursor-pointer underline hover:text-fuchsia-900">
            {isRegister ? "Login" : "Create an account"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
