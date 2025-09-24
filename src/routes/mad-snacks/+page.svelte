<script lang="ts">
	import { subCategories } from '$lib/data/subCategories';
	import { products } from '$lib/data/products';
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';

	const foodAndSnacksCategoryId = 2;

	const foodAndSnacksSubCategories = subCategories.filter((sub) =>
		sub.categoryIds.includes(foodAndSnacksCategoryId)
	);
	const foodAndSnacksProducts = products.filter((product) =>
		product.subCategoryIds.some((id) => foodAndSnacksSubCategories.map((sc) => sc.id).includes(id))
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Mad & Snacks"
		text="Udforsk vores udvalg af sunde og lækre mad- og snackprodukter"
		backgroundImage="/foodAndSnacks.png"
		categories={foodAndSnacksSubCategories}
	/>

	<Products products={foodAndSnacksProducts} title="Mad & Snacks Produkter" />
</main>
