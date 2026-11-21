import { X } from "lucide-react";
import { useEffect } from "react";

import type MenuDrawerProps from "./props";

export default function MenuDrawer({
  children,
  isOpen,
  onChange,
}: MenuDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onChange]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onChange}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-lg transition-[transform,visibility] duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        {children}
        <button
          type="button"
          onClick={onChange}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-gray-600 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <X />
        </button>
      </div>
    </>
  );
}
