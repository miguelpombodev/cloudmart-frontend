export interface Filters {
  pageNumber: number;
  pageSize: number;
  sortBy: "HigherPrice" | "LowerPrice";
  maxValue?: number;
  minValue?: number;
  categories: string[];
  brands: string[];
}

export default class ProductFilters implements Filters {
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly sortBy: "HigherPrice" | "LowerPrice";
  readonly maxValue?: number;
  readonly minValue?: number;
  readonly categories: string[];
  readonly brands: string[];

  static Builder = class ProductFiltersBuilder {
    private filters: Filters = {
      pageNumber: 1,
      pageSize: 12,
      sortBy: "LowerPrice",
      categories: [],
      brands: [],
    };

    setPageNumber(pageNumber: number = 1): this {
      this.filters.pageNumber = Math.max(1, pageNumber);
      return this;
    }

    setPageSize(pageSize: number = 12): this {
      this.filters.pageSize = Math.max(1, pageSize);
      return this;
    }

    setSortBy(sortBy: string | null = "HigherPrice"): this {
      if (sortBy === "HigherPrice" || sortBy === "LowerPrice") {
        this.filters.sortBy = sortBy;
      } else {
        this.filters.sortBy = "HigherPrice";
      }

      return this;
    }

    setMaxValue(maxValue: number): this {
      this.filters.maxValue = maxValue;
      return this;
    }

    setMinValue(minValue: number): this {
      this.filters.minValue = minValue;
      return this;
    }

    setCategoriesList(categories: string[]): this {
      this.filters.categories = categories;
      return this;
    }

    setBrandsList(brands: string[]): this {
      this.filters.brands = brands;
      return this;
    }

    build(): ProductFilters {
      return new ProductFilters(this.filters);
    }
  };

  private constructor(filters: Filters) {
    this.pageNumber = filters.pageNumber;
    this.pageSize = filters.pageSize;
    this.sortBy = filters.sortBy;
    this.maxValue = filters.maxValue;
    this.minValue = filters.minValue;
    this.categories = filters.categories;
    this.brands = filters.brands;
  }

  static get builder() {
    return new ProductFilters.Builder();
  }
}
