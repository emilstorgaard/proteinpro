<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const shakerSubCategoryId = 8;

	const shakkerProducts = products.filter((p) => p.subCategoryIds.includes(shakerSubCategoryId));
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Shaker"
		text="Shakers er uundværlige redskaber til at blande proteinpulver, kosttilskud og drikkevarer hurtigt og effektivt. De er designet med en tæt lukning og en indbygget si eller kugle, der hjælper med at nedbryde klumper og sikre en jævn konsistens. Shakers er ideelle til folk på farten, der ønsker en nem måde at forberede deres ernæringsdrikke på, hvad enten det er før eller efter træning. De fås i forskellige størrelser, materialer og designs, så du kan finde en, der passer til dine behov og stil."
	/>

	<Products products={shakkerProducts} />
</main>
