import type React from "react";

export interface PaginationProps<T> {
  totalItems: number;
  itemsPerPage: number;
  items: T[];
  component: React.ElementType<{ item: T }>;
}
