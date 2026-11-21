import { Link } from "react-router-dom";

import { Button } from "../Button";

export default function UserMenu() {
  return (
    <div className="absolute right-0 top-full mt-3 w-80 max-w-[90vw] flex flex-col gap-4 py-10 px-5 border-2 border-green-default bg-white rounded-lg z-50 font-functional">
      <span className="flex flex-col gap-3">
        <p className="text-center text-3xl font-bold">Welcome!</p>
        <p>Start your session or create an account for a single experience</p>
      </span>
      <span className="flex items-center justify-center gap-5">
        <Link to="/customer/create">
          <Button kind="default" sizeType="medium" value="Sign In" />
        </Link>
        <Link to="/customer/login">
          <Button kind="outline" sizeType="medium" value="Sign Up" />
        </Link>
      </span>
    </div>
  );
}
