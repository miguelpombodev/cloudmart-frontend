import { Menu, Search, ShoppingBasket, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const options = [
    { name: "Showcase", path: "/showcase" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex items-center justify-around h-16 font-edit md:border-b-2 ">
      <Menu className="md:hidden" />
      <Link
        to={"/"}
        className="max-w-12 flex items-center justify-center cursor-pointer"
      >
        <img src="/cloud.png" alt="logo" title="logo" />
        <h1 className="text-2xl font-light tracking-tighter [font-optical-sizing:text]">
          CloudMart
        </h1>
      </Link>
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
      <span className="flex items-center justify-between gap-5 [&>*]:cursor-pointer">
        <Search />
        <User className="hidden md:block" />
        <ShoppingBasket />
      </span>
    </header>
  );
}
