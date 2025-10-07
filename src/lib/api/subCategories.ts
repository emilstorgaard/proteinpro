import type { SubCategory } from "$lib/types/subCategory";

const API_BASE = "https://api.proteinpro.dk/api";

export async function fetchAllSubCategories(): Promise<SubCategory[]> {
  const res = await fetch(`${API_BASE}/subcategories`);
  return await res.json();
}

export async function fetchSubCategory(id: number): Promise<SubCategory> {
  const res = await fetch(`${API_BASE}/subcategories/${id}`);
  return await res.json();
}

export async function fetchSubCategoriesByCategoryId(categoryId: number): Promise<SubCategory[]> {
  const res = await fetch(`${API_BASE}/subcategories/category/${categoryId}`);
  return await res.json();
}