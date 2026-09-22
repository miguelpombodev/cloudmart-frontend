export interface Items {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface ItemsSliderProps {
  categories?: Items[];
  title?: string;
}
