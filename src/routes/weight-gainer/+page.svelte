<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const weightGainerSubCategoryId = 3;

	const weightGainerProducts = products.filter((p) =>
		p.subCategoryIds.includes(weightGainerSubCategoryId)
	);
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Weight gainer"
		text="Weight Gainer er et kosttilskud designet til at hjælpe med at tage på i vægt og opbygge
				muskelmasse. Det indeholder typisk en kombination af protein, kulhydrater og sunde
				fedtstoffer, som giver kroppen ekstra kalorier til at understøtte muskelvækst.
				Det er ideelt for personer, der har svært ved at spise nok gennem almindelig
				mad, f.eks. hurtigt stofskifte eller intensiv træning. Weight Gainer kan blandes i shakes,
				smoothies eller endda i madopskrifter, så det bliver nemt at få de nødvendige kalorier og
				proteiner."
	/>

	<Products products={weightGainerProducts} />
</main>
