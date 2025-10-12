import type { SubCategory } from "$lib/types/subCategory";

const API_BASE = "https://api.proteinpro.dk/api";

export async function fetchAllSubCategories(fetchFn: typeof fetch): Promise<SubCategory[]> {
  const res = await fetchFn(`${API_BASE}/subcategories`);
  return await res.json();
}

export async function fetchSubCategory(fetchFn: typeof fetch, id: number): Promise<SubCategory> {
  const res = await fetchFn(`${API_BASE}/subcategories/${id}`);
  return await res.json();
}

export async function fetchSubCategoriesByCategoryId(fetchFn: typeof fetch, categoryId: number): Promise<SubCategory[]> {
  const res = await fetchFn(`${API_BASE}/subcategories/category/${categoryId}`);
  return await res.json();
}