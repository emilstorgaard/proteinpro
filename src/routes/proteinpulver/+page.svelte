<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const proteinpulverSubCategoryId = 1;

	const proteinpulverProducts = products.filter((p) =>
		p.subCategoryIds.includes(proteinpulverSubCategoryId)
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Proteinpulver"
		text="Proteinpulver er et kosttilskud, der hjælper med muskelopbygning, restitution og at dække
				dit daglige proteinbehov. Perfekt til alle, der træner, vil optimere deres resultater eller
				har brug for ekstra protein i hverdagen."
	/>

	<Products products={proteinpulverProducts} title="Proteinpulver" />
</main>
