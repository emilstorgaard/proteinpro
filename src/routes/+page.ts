import type { PageLoad } from './$types';
import { fetchAllCategories } from '$lib/api/categories';
import { fecthAllProductBrands, fecthAllProductRetailers, fetchPagedProducts } from '$lib/api/products';

export const load: PageLoad = async ({ fetch }) => {
  try {
    const categories = await fetchAllCategories(fetch);
    const data = await fetchPagedProducts(fetch, 1);
    const brands = await fecthAllProductBrands(fetch);
    const retailers = await fecthAllProductRetailers(fetch);
    return {
      categories,
      products: data.products,
      totalPages: data.totalPages,
      currentPage: data.currentPage,
      brands,
      retailers
    };
  } catch (err) {
    console.error("Failed to load page data:", err);
    return { categories: [], products: [], totalPages: 0, currentPage: 0, brands: [], retailers: [] };
  }
};