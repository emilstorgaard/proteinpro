import type { LayoutLoad } from './$types';
import { fetchAllCategories } from '$lib/api/categories';

export const load: LayoutLoad = async ({ fetch }) => {
	const categories = await fetchAllCategories(fetch);
	return { categories };
};
