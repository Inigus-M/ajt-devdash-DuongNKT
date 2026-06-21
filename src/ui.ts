import type { Product } from "./types";

export function renderProducts(products: Product[]): string {
  return products
    .map(
      (product) => `
      <div class="card">
        <img
          src="${product.thumbnail}"
          width="120"
        >

        <h3>${product.title}</h3>

        <p>$${product.price}</p>

        <button
          class="detail-btn"
          data-id="${product.id}"
        >
          Details
        </button>
      </div>
    `,
    )
    .join("");
}

export function renderDetail(product: Product): string {
  return `
    <h2>${product.title}</h2>

    <img
      src="${product.thumbnail}"
      width="250"
    >

    <p>${product.description}</p>

    <p>Category: ${product.category}</p>

    <p>Price: $${product.price}</p>
  `;
}
