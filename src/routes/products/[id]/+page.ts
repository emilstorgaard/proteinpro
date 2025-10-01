import type { PageLoad } from './$types';
import { fetchProduct } from '$lib/api/products';
import type { Product } from '$lib/types/product';

export const load: PageLoad = async ({ params }) => {
	const id = Number(params.id);
	const product: Product = await fetchProduct(id);

	return { product };
};