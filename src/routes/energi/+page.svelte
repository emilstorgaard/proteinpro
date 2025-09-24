<script lang="ts">
	import Categories from '$lib/components/Categories.svelte';
	import { subCategories } from '$lib/data/subCategories';
	import { products } from '$lib/data/products';
	import Products from '$lib/components/Products.svelte';

	const energyCategoryId = 3;

	const energySubCategories = subCategories.filter((sub) =>
		sub.categoryIds.includes(energyCategoryId)
	);
	const energyProducts = products.filter((product) =>
		product.subCategoryIds.some((id) => energySubCategories.map((sc) => sc.id).includes(id))
	);
</script>

<main class="min-h-screen bg-gray-50">
	<!-- Hero Section med Subcategories -->
	<section
		class="relative flex flex-col items-center justify-center bg-cover bg-center text-center sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
		style="background-image: url('/energy.png');"
	>
		<!-- Overlay -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

		<!-- Hero Content -->
		<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
			<h1
				class="text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
			>
				Energi
			</h1>
			<p class="mt-4 text-base text-gray-200 sm:text-lg md:text-xl">
				Udforsk vores udvalg af energigivende kosttilskud
			</p>
		</div>

		<!-- Subcategories Cards Overlay -->
		<Categories categories={energySubCategories} />
	</section>
	<Products products={energyProducts} title="Energi Produkter" />
</main>
