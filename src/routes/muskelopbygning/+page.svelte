<script lang="ts">
	import { subCategories } from '$lib/data/subCategories';
	import { products } from '$lib/data/products';
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';

	const muskelopbygningCategoryId = 1;

	const muskelopbygningSubCategories = subCategories.filter((sub) =>
		sub.categoryIds.includes(muskelopbygningCategoryId)
	);

	const muskelopbygningProducts = products.filter((product) =>
		product.subCategoryIds.some((id) =>
			muskelopbygningSubCategories.map((sc) => sc.id).includes(id)
		)
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Muskelopbygning"
		text="Udforsk vores udvalg af kosttilskud til styrke og muskelvækst"
		categories={muskelopbygningSubCategories}
	/>

	<Products products={muskelopbygningProducts} title="Muskelopbygning Produkter" />
</main>
