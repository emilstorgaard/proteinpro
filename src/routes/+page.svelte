<script lang="ts">
	import Categories from '$lib/components/Categories.svelte';
	import { categories } from '$lib/data/categories';
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
</script>

<main class="min-h-screen bg-gray-50">
	<!-- Hero Section med Subcategories -->
	<section
		class="relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-center shadow-xl sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
	>
		<!-- Overlay (valgfrit, giver lidt shine-effekt) -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
		></div>

		<!-- Hero Content -->
		<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
			<h1
				class="text-3xl font-extrabold text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl"
			>
				Bodyup
			</h1>
			<p class="mt-4 text-base text-gray-100 drop-shadow sm:text-lg md:text-xl">Bodyup</p>
		</div>

		<!-- Subcategories Cards Overlay -->
		<Categories {categories} />
	</section>

	<Products {products} title="Alle Produkter" />
</main>
