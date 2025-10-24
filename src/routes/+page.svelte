<script lang="ts">
	export let data;

	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CategoryList from '$lib/components/CategoryList.svelte';
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="ProteinPro"
		text="Find de bedste kosttilskud og fitnessprodukter samlet ét sted. Vi guider dig til de bedste valg – baseret på kvalitet, pris og anmeldelser."
	/>

	<CategoryList categories={data.categories} />

	<Products products={data.products} brands={data.brands} retailers={data.retailers} />
</main>