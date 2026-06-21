import type { Product } from "./types";

export function searchProducts(
  products: Product[],
  keyword: string,
): Product[] {
  return products.filter((product) =>
    product.title.toLowerCase().includes(keyword.toLowerCase()),
  );
}

export function filterProducts(
  products: Product[],
  category: string,
): Product[] {
  if (!category) {
    return products;
  }

  return products.filter((product) => product.category === category);
}

export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  delay: number,
) {
  let timer: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
