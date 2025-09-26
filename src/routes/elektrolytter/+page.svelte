<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const elektrolytterSubCategoryId = 6;

	const elektrolytterProducts = products.filter((p) =>
		p.subCategoryIds.includes(elektrolytterSubCategoryId)
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Elektrolytter"
		text="Elektrolytter er essentielle mineraler som natrium, kalium og magnesium, der hjælper kroppen
				med at opretholde væskebalance, nervefunktion og muskelsammentrækning.
				De er især vigtige under og efter træning, når du sveder og mister salte, og kan
				hjælpe med at forebygge kramper, træthed og dehydrering. Elektrolytter fås som pulver,
				tabletter eller drikke, og er en enkel måde at sikre optimal væskebalance på."
	/>

	<Products products={elektrolytterProducts} title="Elektrolytter" />
</main>
