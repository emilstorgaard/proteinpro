<script lang="ts">
	export let data;

	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title={data.subCategory.name}
		text={data.subCategory.description}
	/>

	<Products products={data.products} />
</main>

