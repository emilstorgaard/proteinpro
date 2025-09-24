<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const preWorkoutSubCategoryId = 4;

	const preWorkoutProducts = products.filter((p) =>
		p.subCategoryIds.includes(preWorkoutSubCategoryId)
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Pre workout"
		text="Pre-Workout er et kosttilskud, der tages inden træning for at booste energi, fokus og udholdenhed.
                Det indeholder typisk koffein, aminosyrer og andre ingredienser, som hjælper dig med at yde dit bedste under intense træningspas.
                Pre-Workout er perfekt til dem, der vil have mere kraft, bedre koncentration og højere intensitet i deres træning.
                Det kan blandes med vand som en shake og tages ca. 20–30 minutter før træning."
		backgroundImage="/pre-workout.jpg"
	/>

	<Products products={preWorkoutProducts} title="Pre workout" />
</main>
