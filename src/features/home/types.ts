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

export interface Category {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface Rating {
  id: number;
  reviewerName: string;
  productName: string;
  rating: number;
  description: string;
  date: string;
  productUrl: string;
}
