<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';

	const proteinbarerSubCategoryId = 5;

	const proteinbarerProducts = products.filter((p) =>
		p.subCategoryIds.includes(proteinbarerSubCategoryId)
	);
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
		<div class="relative z-10 mx-auto max-w-2xl px-6 text-center">
			<h1
				class="text-3xl font-extrabold text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-5xl"
			>
				Proteinbarer
			</h1>
			<p class="mt-4 leading-relaxed text-gray-100 drop-shadow-sm sm:text-lg md:text-xl lg:text-xl">
				Proteinbarer er praktiske snacks, der hjælper dig med at få ekstra protein på farten. De er
				perfekte før eller efter træning, eller som et mellemmåltid, når du har brug for en hurtig
				energikilde.
				<br /><br />Proteinbarer indeholder typisk en blanding af protein, kulhydrater og lidt fedt,
				og findes i mange smagsvarianter, så det bliver både sundt og lækkert. De understøtter
				muskelopbygning, restitution og hjælper dig med at nå dit daglige proteinbehov.
			</p>
		</div>
	</section>

	<Products products={proteinbarerProducts} title="Proteinbarer" />
</main>
