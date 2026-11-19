import { Heart, Menu, SearchIcon, ShoppingBasket, User } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useClickOutside } from "@/shared/hooks/useClickOutside.hook";

import Input from "../Input";
import UserMenu from "../UserMenu";

export function Header() {
  const [isOpenUserMenu, setOpenUserMenu] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(userMenuRef, () => setOpenUserMenu(false), isOpenUserMenu);

  const options = [
    { name: "Showcase", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex py-10 items-center justify-around h-16 font-edit md:border-b-2 ">
      <span className="flex items-center gap-8">
        <span className="flex justify-between items-center">
          <Menu className="md:hidden" />
          <Link
            to={"/"}
            className="flex items-center justify-center cursor-pointer"
          >
            <img src="/cloud.png" alt="logo" title="logo" className="w-16" />
            <h1 className="text-2xl font-light tracking-tighter [font-optical-sizing:text]">
              CloudMart
            </h1>
          </Link>
        </span>
        <span className="hidden md:flex gap-5 cursor-pointer">
          {options.map((opt) => (
            <Link
              key={opt.name}
              to={opt.path}
              className="
                tracking-tighter
                text-lg
                relative
                after:absolute
                after:bottom-0
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-green-default
                after:transition-all
                after:duration-300
                after:ease-in-out
                hover:after:w-full"
            >
              {opt.name}
            </Link>
          ))}
        </span>
      </span>
      <span className="hidden md:block w-1/2">
        <Input
          icon={SearchIcon}
          title="search"
          placeholder="What are you looking for today?"
        />
      </span>
      <span className="flex items-center justify-between gap-5 [&>*]:cursor-pointer">
        <div ref={userMenuRef} className="relative hidden md:flex">
          <button
            className="text-black"
            type="button"
            aria-label="User menu"
            aria-haspopup="true"
            aria-expanded={isOpenUserMenu}
            onClick={() => setOpenUserMenu(!isOpenUserMenu)}
          >
            <User />
          </button>
          {isOpenUserMenu && <UserMenu />}
        </div>
        <Heart />
        <ShoppingBasket />
      </span>
    </header>
  );
}
