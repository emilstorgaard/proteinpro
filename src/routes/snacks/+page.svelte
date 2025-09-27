<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const snacksSubCategoryId = 10;

	const snacksProducts = products.filter((p) => p.subCategoryIds.includes(snacksSubCategoryId));
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Snacks"
		text="Proteinbarer er praktiske snacks, der hjælper dig med at få ekstra protein på farten. De er
				perfekte før eller efter træning, eller som et mellemmåltid, når du har brug for en hurtig
				energikilde.
				Proteinbarer indeholder typisk en blanding af protein, kulhydrater og lidt fedt,
				og findes i mange smagsvarianter, så det bliver både sundt og lækkert. De understøtter
				muskelopbygning, restitution og hjælper dig med at nå dit daglige proteinbehov."
	/>

	<Products products={snacksProducts} />
</main>
