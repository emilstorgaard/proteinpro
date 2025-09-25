<script lang="ts">
	import { categories } from '$lib/data/categories';
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="BodyUp"
		text="Din partner indenfor kosttilskud, energi og sundhed. Kvalitet og resultater til dig."
		backgroundImage="/background.jpg"
		{categories}
	/>

	<Products {products} title="Alle Produkter" />
</main>
