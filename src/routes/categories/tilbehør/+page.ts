import type { PageLoad } from './$types';
import { fetchCategory } from '$lib/api/categories';
import { fecthAllProductBrands, fecthAllProductRetailers, fetchPagedProducts } from '$lib/api/products';

export const load: PageLoad = async ({ fetch }) => {
	const id = 9;
	const category = await fetchCategory(fetch, id);
	const data = await fetchPagedProducts(fetch, 1, {}, "", {}, id);
	const brands = await fecthAllProductBrands(fetch, id);
	const retailers = await fecthAllProductRetailers(fetch, id);
	return {
		category,
		products: data.products,
		totalPages: data.totalPages,
		currentPage: data.currentPage,
		brands,
		retailers
	};
};