export default interface PaginatedData<T> {
  items: T[];
  totalCount: number;
  hasNextPage: true;
  nextCursor: boolean | null;
}
