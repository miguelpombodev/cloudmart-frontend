import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Mail, KeyRound, Check } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/shared/components/Button";
import Checkbox from "@/shared/components/Checkbox";
import Input from "@/shared/components/Input";
import { ErrorMessage } from "@/shared/errors/components";

import { useAuthStore } from "../store/auth.store";
import type { LoginFormValues } from "../types";
import type { LoginCredentials } from "../types/requests";

const schema = z.object({
  email: z.email("Email address is invalid"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password is too long")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
});

type FormData = z.infer<typeof schema>;

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const { login, initialized } = useAuthStore();
  const navigation = useNavigate();

  const onSubmit: SubmitHandler<LoginFormValues> = async (
    data: LoginCredentials,
  ) => {
    try {
      await login(data);
      initialized();
      navigation("/customer/account");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex px-5 flex-col flex-1 font-functional items-stretch justify-center gap-5 bg-green-default py-16 basis-0 md:flex-row md:px-0 md:h-[75dvh]">
      <section className="flex flex-col justify-center items-center bg-white rounded-lg px-5 py-5 gap-4 md:px-14">
        <span className="flex flex-col gap-3 justify-center items-center md:justify-center">
          <h1 className="font-edit text-2xl text-center md:text-start">
            Enter in your CloudMart account
          </h1>
          <GoogleOAuthProvider clientId="SEU_CLIENT_ID">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Erro no login");
              }}
              theme="filled_black"
            />
          </GoogleOAuthProvider>
        </span>
        <span
          aria-hidden="true"
          className="
        flex
        items-center
        w-full
        pt-6
        pb-2
        text-base
        before:bg-green-default
        before:h-px
        before:flex-1
        before:mr-6
        after:content-['']
        after:bg-green-default
        after:h-px
        after:flex-1
        after:ml-6
        "
        >
          OR
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full"
        >
          <span className="flex flex-col gap-4">
            <Input
              title="Email"
              withLabel
              icon={Mail}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="user@email.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
            <Input
              title="Password"
              withLabel
              icon={KeyRound}
              type="password"
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Type your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )}
          </span>
          <span>
            <span className="flex justify-between items-center">
              <p className="text-green-default cursor-pointer hover:underline">
                Forgot your password?
              </p>
              <span className="flex gap-2">
                <Checkbox
                  title="Keep session"
                  className="border-black border-2"
                />
              </span>
            </span>
          </span>

          <Button kind="default" value="Create Account" sizeType="medium" />
        </form>
      </section>
      <section className="flex flex-col justify-center items-center bg-white rounded-lg px-14 py-5 gap-8 md:items-start">
        <span className="font-edit text-2xl text-center md:text-start">
          <h1>{"You don't have an account yet? "}</h1>
          <h1>Sign up now!</h1>
        </span>
        <p className="text-green-default font-bold text-lg">Easy and Fast!</p>
        <ul className="flex flex-col list-inside gap-3 text-green-default font-bold [&>*]:flex [&>*]:gap-2 [&>*]:items-center">
          <li>
            <Check size={18} />
            Tiny character
          </li>
          <li>
            <Check size={18} />
            Uppercase character
          </li>
          <li>
            <Check size={18} />
            Special character
          </li>
          <li>
            <Check size={18} />
            Number
          </li>
        </ul>
        <p>Click below to start your session!</p>
        <Link to="/customer/create">
          <Button kind="outline" sizeType="medium" value="Start session" />
        </Link>
      </section>
    </div>
  );
}
