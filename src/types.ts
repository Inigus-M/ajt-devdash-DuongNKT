export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export type ProductPreview = Pick<Product, "id" | "title" | "price">;

export type ProductUpdate = Partial<Product>;
