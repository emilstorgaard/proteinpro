import type { Category } from "../types/category";

const API_BASE = "https://api.bodyup.dk/api";

export async function fetchAllCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE}/categories`);
  return await res.json();
}

export async function fetchCategory(id: number): Promise<Category> {
  const res = await fetch(`${API_BASE}/categories/${id}`);
  return await res.json();
}