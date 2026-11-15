import type React from "react";

export type AccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export interface RootProps {
  type?: "single" | "multiple";
  defaultValue?: string[];
  className?: string;
  children: React.ReactNode;
}
