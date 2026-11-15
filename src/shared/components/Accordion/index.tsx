import { ChevronDown } from "lucide-react";
import React, { useCallback, useId, useMemo, useState } from "react";

import {
  AccordionContext,
  ItemContext,
  useAccordion,
  useAccordionItem,
} from "./context";
import type { RootProps } from "./props";

function Root({
  type = "single",
  defaultValue = [],
  className,
  children,
}: RootProps) {
  const [openValues, setOpenValues] = useState<string[]>(defaultValue);

  const toggle = useCallback(
    (value: string) => {
      setOpenValues((prev) => {
        if (prev.includes(value)) return prev.filter((v) => v !== value);
        return type === "single" ? [value] : [...prev, value];
      });
    },
    [type],
  );

  const ctx = useMemo(() => ({ openValues, toggle }), [openValues, toggle]);

  return (
    <AccordionContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

function Item({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { openValues } = useAccordion();
  const id = useId();
  console.log(openValues);
  const isOpen = openValues.includes(value);

  const ctx = useMemo(
    () => ({
      value,
      isOpen,
      triggerId: `${id}-trigger`,
      contentId: `${id}-content`,
    }),
    [value, isOpen, id],
  );

  return (
    <ItemContext.Provider value={ctx}>
      <div className={className ?? "border-b border-white/20"}>{children}</div>
    </ItemContext.Provider>
  );
}

function Trigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { toggle } = useAccordion();
  const { value, isOpen, contentId, triggerId } = useAccordionItem();

  return (
    <button
      id={triggerId}
      type="button"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={() => toggle(value)}
      className={
        className ??
        "flex w-full items-center justify-between py-3 text-left cursor-pointer"
      }
    >
      {children}
      <ChevronDown
        size={18}
        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  const { isOpen, triggerId, contentId } = useAccordionItem();

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div
        className={`overflow-hidden transition-[visibility] duration-300 ${isOpen ? "visible" : "invisible"}`}
      >
        <div className="pb-3">{children}</div>
      </div>
    </div>
  );
}

export const Accordion = Object.assign(Root, { Item, Trigger, Content });
