import type { Product } from "../types/product";

const API_BASE = "https://api.bodyup.dk/api";

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products`);
  return await res.json();
}

export async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE}/products/${id}`);
  return await res.json();
}

export async function fetchProductsByCategory(categoryId: number): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products/category/${categoryId}`);
  return await res.json();
}

export async function fetchProductsBySubCategory(subCategoryId: number): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products/subcategory/${subCategoryId}`);
  return await res.json();
}