export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  imageUrl: string;
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[];
}

export type ProductCategory = 
  | 'laptops'
  | 'smartphones'
  | 'accessories'
  | 'headphones'
  | 'smartwatches'
  | 'cameras';