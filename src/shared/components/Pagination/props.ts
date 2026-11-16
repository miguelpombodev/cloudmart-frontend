import type React from "react";

import type PaginatedData from "@/shared/types/paginatedData.interface";

export interface PaginationProps<T> {
  totalItems: number;
  itemsPerPage: number;
  data: PaginatedData<T>;
  component: React.ElementType<{ item: T }>;
}
