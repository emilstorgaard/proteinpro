import type { PageLoad } from './$types';
import { fetchSubCategory } from '$lib/api/subCategories';
import { fetchProductsBySubCategory } from '$lib/api/products';

export const load: PageLoad = async ({ params }) => {
	const id = Number(params.id);
	const subCategory = await fetchSubCategory(id);
	const products = await fetchProductsBySubCategory(id);

	return { subCategory, products };
};