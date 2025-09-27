<script lang="ts">
	import { subCategories } from '$lib/data/subCategories';
	import { products } from '$lib/data/products';
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';

	const energyCategoryId = 3;

	const energySubCategories = subCategories.filter((sub) =>
		sub.categoryIds.includes(energyCategoryId)
	);
	const energyProducts = products.filter((product) =>
		product.subCategoryIds.some((id) => energySubCategories.map((sc) => sc.id).includes(id))
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Energi"
		text="Udforsk vores udvalg af energigivende kosttilskud"
		categories={energySubCategories}
	/>

	<Products products={energyProducts} />
</main>
