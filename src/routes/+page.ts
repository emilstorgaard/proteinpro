import type { PageLoad } from './$types';
import { fetchAllCategories } from '$lib/api/categories';
import { fetchAllProducts } from '$lib/api/products';

export const load: PageLoad = async () => {
  try {
    const categories = await fetchAllCategories();
    const products = await fetchAllProducts();
    return { categories, products };
  } catch (err) {
    console.error("Failed to load page data:", err);
    return { categories: [], products: [] };
  }
};