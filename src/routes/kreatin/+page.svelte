<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';
	import Hero from '$lib/components/Hero.svelte';

	const KreatinSubCategoryId = 2;

	const kreatinProducts = products.filter((p) => p.subCategoryIds.includes(KreatinSubCategoryId));
</script>

<main class="min-h-screen bg-gray-50">
	<Hero
		title="Kreatin"
		text="Kreatin er et populært kosttilskud blandt styrketrænere og atleter. Det hjælper med at øge
				styrke, eksplosivitet og muskelmasse ved at give musklerne mere energi under korte, intense
				træningspas. Kreatin findes naturligt i kød og fisk, men som pulver eller kapsler er det en
				praktisk måde at sikre optimal mængde på.
				Det er videnskabeligt dokumenteret, sikkert for de fleste voksne, og kan
				kombineres med proteinpulver for maksimal muskelvækst og restitution."
	/>

	<Products products={kreatinProducts} />
</main>
