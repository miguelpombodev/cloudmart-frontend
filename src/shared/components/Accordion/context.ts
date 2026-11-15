import { createContext, useContext } from "react";

interface AccordionContextValue {
  openValues: string[];
  toggle: (value: string) => void;
}

interface ItemContextValue {
  value: string;
  isOpen: boolean;
  triggerId: string;
  contentId: string;
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
export const ItemContext = createContext<ItemContextValue | null>(null);

export function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion.* must be used within <Accordion>");

  return ctx;
}

export function useAccordionItem() {
  const ctx = useContext(ItemContext);
  if (!ctx)
    throw new Error(
      "Accordion.Trigger and Accordion.Content must be used within <Accordion.Item>",
    );

  return ctx;
}
