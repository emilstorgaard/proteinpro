<script lang="ts">
	export let data;

	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="ProteinPro"
		text="Din partner indenfor kosttilskud, energi og sundhed. Kvalitet og resultater til dig."
		categories={data.categories}
	/>

	<Products products={data.products} title="Alle Produkter" />
</main>