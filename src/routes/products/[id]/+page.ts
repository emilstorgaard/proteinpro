import { products } from '$lib/data/products';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const product = products.find((p) => p.id === Number(params.id));
	return { product };
};