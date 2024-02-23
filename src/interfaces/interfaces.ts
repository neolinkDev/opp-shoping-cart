
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface CountPerProduct {
  [key: string]: number;
}