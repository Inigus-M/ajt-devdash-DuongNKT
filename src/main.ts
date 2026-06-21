import "./style.css";

import { fetchJson } from "./api";

import type { Product, ProductsResponse, Category } from "./types";

import type { AppState } from "./state";

import { searchProducts, filterProducts, debounce } from "./utils";

import { renderProducts, renderDetail } from "./ui";

let allProducts: Product[] = [];

let state: AppState = {
  status: "idle",
};

function render(): void {
  const appEl = document.querySelector<HTMLDivElement>("#app");
  if (!appEl) return;

  switch (state.status) {
    case "idle":
      appEl.innerHTML = `
        <h1>DevDash</h1>
        <p>Initializing...</p>
      `;
      break;
    case "loading":
      appEl.innerHTML = `
        <h1>DevDash</h1>
        <p>Loading...</p>
      `;
      break;
    case "success":
      appEl.innerHTML = `
        <h1>DevDash</h1>

        <input
          id="search"
          placeholder="Search products"
        >

        <select id="category">
          <option value="">
            All Categories
          </option>

          ${state.categories
            .map(
              (category) =>
                `<option value="${category.slug}">
                  ${category.name}
                </option>`,
            )
            .join("")}
        </select>

        <div id="products">
          ${renderProducts(state.products)}
        </div>

        <div id="details"></div>
      `;

      setupEvents();
      break;
    case "error":
      appEl.innerHTML = `
        <h1>DevDash</h1>
        <p class="error">${state.message}</p>
      `;
      break;
    default: {
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
    }
  }
}

async function init(): Promise<void> {
  try {
    state = {
      status: "loading",
    };
    render();

    const [productsData, categories] = await Promise.all([
      fetchJson<ProductsResponse>("https://dummyjson.com/products"),
      fetchJson<Category[]>("https://dummyjson.com/products/categories"),
    ]);

    allProducts = productsData.products;

    state = {
      status: "success",
      products: allProducts,
      categories: categories,
    };

    render();
  } catch (error) {
    state = {
      status: "error",
      message: error instanceof Error ? error.message : "Failed to load data",
    };
    render();
  }
}

function setupEvents(): void {
  const searchInput = document.querySelector<HTMLInputElement>("#search");

  const categorySelect = document.querySelector<HTMLSelectElement>("#category");

  const updateProducts = () => {
    const keyword = searchInput?.value ?? "";

    const category = categorySelect?.value ?? "";

    const searched = searchProducts(allProducts, keyword);

    const filtered = filterProducts(searched, category);

    document.querySelector("#products")!.innerHTML = renderProducts(filtered);

    bindDetailButtons(filtered);
  };

  const debouncedUpdate = debounce(updateProducts, 300);

  searchInput?.addEventListener("input", debouncedUpdate);

  categorySelect?.addEventListener("change", updateProducts);

  bindDetailButtons(allProducts);
}

function bindDetailButtons(products: Product[]): void {
  document.querySelectorAll(".detail-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number((button as HTMLElement).dataset.id);

      const product = products.find((product) => product.id === id);

      if (!product) {
        return;
      }

      document.querySelector("#details")!.innerHTML = renderDetail(product);
    });
  });
}

init();
