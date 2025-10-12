import type { PageLoad } from './$types';
import { fetchAllCategories } from '$lib/api/categories';
import { fetchPagedProducts } from '$lib/api/products';

export const load: PageLoad = async ({ fetch }) => {
  try {
    const categories = await fetchAllCategories(fetch);
    const data = await fetchPagedProducts(fetch, 1);
    return {
      categories, products: data.products,
      totalPages: data.totalPages,
      currentPage: data.currentPage
    };
  } catch (err) {
    console.error("Failed to load page data:", err);
    return { categories: [], products: [] };
  }
};