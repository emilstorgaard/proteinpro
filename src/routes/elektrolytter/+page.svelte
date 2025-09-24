<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';

	const elektrolytterSubCategoryId = 6;

	const elektrolytterProducts = products.filter((p) =>
		p.subCategoryIds.includes(elektrolytterSubCategoryId)
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
				Elektrolytter
			</h1>
			<p class="mt-4 leading-relaxed text-gray-100 drop-shadow-sm sm:text-lg md:text-xl lg:text-xl">
				Elektrolytter er essentielle mineraler som natrium, kalium og magnesium, der hjælper kroppen
				med at opretholde væskebalance, nervefunktion og muskelsammentrækning.
				<br /><br />De er især vigtige under og efter træning, når du sveder og mister salte, og kan
				hjælpe med at forebygge kramper, træthed og dehydrering. Elektrolytter fås som pulver,
				tabletter eller drikke, og er en enkel måde at sikre optimal væskebalance på.
			</p>
		</div>
	</section>

	<Products products={elektrolytterProducts} title="Elektrolytter" />
</main>
