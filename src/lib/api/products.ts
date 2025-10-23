import type { PagedProducts, Product } from "../types/product";

const API_BASE = "https://api.proteinpro.dk/api";

export interface ProductFilters {
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  retailer?: string;
}

export type ProductSearch = string | undefined;

export interface ProductSortOrder {
  price?: string;
}

export async function fetchPagedProducts(fetchFn: typeof fetch, page: number = 1, filters: ProductFilters = {}, search: ProductSearch = "", sort: ProductSortOrder = {}, categoryId?: number): Promise<PagedProducts> {
  const params = new URLSearchParams({
    page: String(page),
  });

  if (filters.brand) params.set('brand', filters.brand);
  if (filters.retailer) params.set('retailer', filters.retailer);
  if (filters.minPrice !== undefined) params.set('minPrice', String(filters.minPrice));
  if (filters.maxPrice !== undefined) params.set('maxPrice', String(filters.maxPrice));
  if (search) params.set('search', search);
  if (sort.price) params.set('sort', sort.price);

  if (categoryId !== undefined) params.set("categoryid", String(categoryId));

  const res = await fetchFn(`${API_BASE}/products?${params}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return await res.json();
}

export async function fetchProduct(fetchFn: typeof fetch, id: number): Promise<Product> {
  const res = await fetchFn(`${API_BASE}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return await res.json();
}

export async function fecthAllProductBrands(fetchFn: typeof fetch, categoryId?: number): Promise<string[]> {
  const url = categoryId ? `${API_BASE}/products/brands?categoryid=${categoryId}` : `${API_BASE}/products/brands`;
  const res = await fetchFn(url);
  if (!res.ok) throw new Error('Failed to fetch product brands');
  return await res.json();
}

export async function fecthAllProductRetailers(fetchFn: typeof fetch, categoryId?: number): Promise<string[]> {
  const url = categoryId ? `${API_BASE}/products/retailers?categoryid=${categoryId}` : `${API_BASE}/products/retailers`;
  const res = await fetchFn(url);
  if (!res.ok) throw new Error('Failed to fetch product retailers');
  return await res.json();
}