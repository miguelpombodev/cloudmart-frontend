import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Pencil, Mail, KeyRound } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/shared/components/Button";
import Checkbox from "@/shared/components/Checkbox";
import Input from "@/shared/components/Input";

export function CreateAccountPage() {
  return (
    <div className="flex flex-1 items-stretch justify-center gap-5 bg-green-default py-16 basis-0">
      <section className="flex flex-col justify-flex items-start bg-white rounded-lg px-14 py-5 gap-4">
        <h1 className="font-edit text-2xl">
          Create your account is
          <span className="text-green-default text-2xl mx-1 font-bold">
            EASY
          </span>
          and
          <span className="text-green-default text-2xl mx-1 font-bold">
            FREE!
          </span>
        </h1>
        <form action="" className="flex flex-col gap-8">
          <span className="flex flex-col gap-4">
            <Input
              title="First Name"
              withLabel
              icon={Pencil}
              placeholder="Jonh"
            />
            <Input
              title="Last Name"
              withLabel
              icon={Pencil}
              placeholder="Doe"
            />
            <Input
              title="Email"
              withLabel
              icon={Mail}
              placeholder="user@email.com"
            />
            <Input
              title="Password"
              withLabel
              icon={KeyRound}
              type="password"
              placeholder="Type your password"
            />
          </span>
          <span>
            <p className="font-bold">
              The password will have to meet the following requirements
            </p>
            <ul className="list-disc list-inside text-green-default">
              <li>Tiny character</li>
              <li>Uppercase character</li>
              <li>Special character</li>
              <li>Number</li>
            </ul>
          </span>
          <span className="flex flex-col gap-3">
            <span className="flex gap-2">
              <Checkbox
                title="I'd like to receive personalized news and CloudMart's comercial communication through email"
                className="border-black border-2"
              />
            </span>
            <span className="flex gap-2">
              <Checkbox
                title="I read and accepted the Terms and Conditions, and the usage of my personal data as explained in our Privacy Politics"
                className="border-black border-2"
              />
            </span>
          </span>
          <Button kind="default" value="Create Account" sizeType="medium" />
        </form>
      </section>
      <section className="flex flex-col items-center justify-center bg-white rounded-lg px-14 py-5">
        <div className="flex flex-col gap-8">
          <span className="flex flex-col gap-4">
            <h1 className="font-edit text-2xl">
              Or sign in with a social media
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
          <span className="flex flex-col justify-center items-center text-sm">
            <p>Only used for authentication.</p>
            <p>{"We'll never post anything on your profile."}</p>
          </span>

          <span className="flex flex-col font-bold gap-5 items-center">
            <h2>
              Already have an account at{" "}
              <span className="text-green-default text-2xl">CloudMart?</span>
            </h2>
            <p>Click below to start your session!</p>
            <Link to="/customer/login">
              <Button kind="outline" sizeType="medium" value="Start session" />
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
}
