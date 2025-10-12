import type { PageLoad } from './$types';
import { fetchSubCategory } from '$lib/api/subCategories';
import { fetchPagedProducts } from '$lib/api/products';

export const load: PageLoad = async ({ params, fetch }) => {
	const id = Number(params.subcategoryid);
	const subCategory = await fetchSubCategory(fetch, id);
	const data = await fetchPagedProducts(fetch, 1, {}, "", {}, 0, id);

	return { subCategory, products: data.products, totalPages: data.totalPages, currentPage: data.currentPage };
};