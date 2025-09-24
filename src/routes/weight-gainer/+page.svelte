<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';

	const weightGainerSubCategoryId = 3;

	const weightGainerProducts = products.filter((p) =>
		p.subCategoryIds.includes(weightGainerSubCategoryId)
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
				Weight gainer
			</h1>
			<p class="mt-4 leading-relaxed text-gray-100 drop-shadow-sm sm:text-lg md:text-xl lg:text-xl">
				Weight Gainer er et kosttilskud designet til at hjælpe med at tage på i vægt og opbygge
				muskelmasse. Det indeholder typisk en kombination af protein, kulhydrater og sunde
				fedtstoffer, som giver kroppen ekstra kalorier til at understøtte muskelvækst.
				<br /><br />Det er ideelt for personer, der har svært ved at spise nok gennem almindelig
				mad, f.eks. hurtigt stofskifte eller intensiv træning. Weight Gainer kan blandes i shakes,
				smoothies eller endda i madopskrifter, så det bliver nemt at få de nødvendige kalorier og
				proteiner.
			</p>
		</div>
	</section>

	<Products products={weightGainerProducts} title="Weight gainer" />
</main>
