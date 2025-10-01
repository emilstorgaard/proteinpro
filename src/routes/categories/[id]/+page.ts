import type { PageLoad } from './$types';
import { fetchCategory } from '$lib/api/categories';
import { fetchProductsByCategory } from '$lib/api/products';
import { fetchSubCategoriesByCategoryId } from '$lib/api/subCategories';

export const load: PageLoad = async ({ params }) => {
	const id = Number(params.id);
	const category = await fetchCategory(id);
	const subCategories = await fetchSubCategoriesByCategoryId(id);
	const products = await fetchProductsByCategory(id);

	return { category, subCategories, products };
};