import type { PageLoad } from './$types';
import { fetchCategory } from '$lib/api/categories';
import { fetchPagedProducts } from '$lib/api/products';
import { fetchSubCategoriesByCategoryId } from '$lib/api/subCategories';

export const load: PageLoad = async ({ params, fetch }) => {
	const id = Number(params.categoryid);
	const category = await fetchCategory(fetch, id);
	const subCategories = await fetchSubCategoriesByCategoryId(fetch, id);
	const data = await fetchPagedProducts(fetch, 1, {}, "", {}, id);
	return { category, subCategories, products: data.products, totalPage: data.totalPages, currentPage: data.currentPage };
};