<script lang="ts">
	import { subCategories } from '$lib/data/subCategories';
	import { products } from '$lib/data/products';
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';

	const accessoriesCategoryId = 4;

	const accessoriesSubCategories = subCategories.filter((sub) =>
		sub.categoryIds.includes(accessoriesCategoryId)
	);
	const asseccoriesProducts = products.filter((product) =>
		product.subCategoryIds.some((id) => accessoriesSubCategories.map((sc) => sc.id).includes(id))
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Tilbehør"
		text="Udforsk vores udvalg af tilbehør"
		backgroundImage="/accessories.jpg"
		categories={accessoriesSubCategories}
	/>

	<Products products={asseccoriesProducts} title="Tilbehør Produkter" />
</main>
