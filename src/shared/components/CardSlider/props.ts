export interface Items {
  id: string;
  name: string;
  imageUrl?: string;
  price?: number;
}

export interface ItemsSliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  title: string;
  withDecimal?: boolean;
}
