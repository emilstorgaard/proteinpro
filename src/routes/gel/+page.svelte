<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const gelSubCategoryId = 7;

	const gelProducts = products.filter((p) => p.subCategoryIds.includes(gelSubCategoryId));
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Gel"
		text="Energigel er et hurtigtoptageligt kosttilskud, der typisk anvendes under løb, cykling og andre udholdenhedssportsgrene. Gelen indeholder primært kulhydrater, som giver hurtig energi til musklerne og hjælper med at opretholde blodsukkeret under længerevarende træning eller konkurrence. Nogle gels indeholder også elektrolytter for at modvirke væsketab, eller koffein for at give ekstra fokus og energi."
	/>

	<Products products={gelProducts} />
</main>
