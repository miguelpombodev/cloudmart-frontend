import { Menu, Search, SearchIcon, ShoppingBasket, User } from "lucide-react";
import { Link } from "react-router-dom";

import Input from "../Input";

export function Header() {
  const options = [
    { name: "Showcase", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex py-10 items-center justify-around h-16 font-edit md:border-b-2 ">
      <span className="flex items-center justify-center">
        <span className="flex w-36">
          <Menu className="md:hidden" />
          <Link
            to={"/"}
            className="max-w-16 flex items-center justify-center cursor-pointer"
          >
            <img src="/cloud.png" alt="logo" title="logo" />
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
      <span className="h-14 w-1/2">
        <Input icon={SearchIcon} title="search" placeholder="Search" />
      </span>
      <span className="flex items-center justify-between gap-5 [&>*]:cursor-pointer">
        <Search />
        <User className="hidden md:block" />
        <ShoppingBasket />
      </span>
    </header>
  );
}
