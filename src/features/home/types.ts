export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
}

export interface Banners {
  id: number;
  title: string;
  color: string;
  description: string;
  ctaString: string;
  urlImg: string;
}
