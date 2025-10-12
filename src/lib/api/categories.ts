import type { Category } from "../types/category";

const API_BASE = "https://api.proteinpro.dk/api";

export async function fetchAllCategories(fetchFn: typeof fetch): Promise<Category[]> {
  const res = await fetchFn(`${API_BASE}/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return await res.json();
}

export async function fetchCategory(fetchFn: typeof fetch, id: number): Promise<Category> {
  const res = await fetchFn(`${API_BASE}/categories/${id}`);
  if (!res.ok) throw new Error('Failed to fetch category');
  return await res.json();
}