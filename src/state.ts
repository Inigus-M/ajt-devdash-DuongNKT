import type { Product, Category } from "./types";

export type AppState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; products: Product[]; categories: Category[] }
  | { status: "error"; message: string };
