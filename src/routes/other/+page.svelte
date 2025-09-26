<script lang="ts">
	import { subCategories } from '$lib/data/subCategories';
	import { products } from '$lib/data/products';
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';

	const otherCategoryId = 5;

	const otherSubCategories = subCategories.filter((sub) =>
		sub.categoryIds.includes(otherCategoryId)
	);

	const otherProducts = products.filter((product) =>
		product.subCategoryIds.some((id) =>
			otherSubCategories.map((sc) => sc.id).includes(id)
		)
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Andet"
		text="Udforsk vores produkter som ikke er kategoriseret under de primære kategorier"
	/>

	<!-- Products Section -->
	<Products products={otherProducts} title="Andre Produkter" />
</main>
