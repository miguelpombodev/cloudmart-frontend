import { Menu, Search, ShoppingBasket, User } from "lucide-react";

export function Header() {
  const options = ["Showcase", "About", "Contact"];

  return (
    <header className="flex items-center justify-around h-16 font-edit md:border-b-2">
      <Menu className="md:hidden" />
      <h1 className="text-2xl font-light tracking-tighter [font-optical-sizing:text] cursor-pointer">
        CloudMart
      </h1>
      <span className="hidden md:flex gap-5 cursor-pointer">
        {options.map((opt) => (
          <p
            key={opt}
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
            {opt}
          </p>
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
