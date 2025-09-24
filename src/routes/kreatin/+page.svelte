<script lang="ts">
	import Products from '$lib/components/Products.svelte';
	import { products } from '$lib/data/products';

	const KreatinSubCategoryId = 2;

	const kreatinProducts = products.filter((p) => p.subCategoryIds.includes(KreatinSubCategoryId));
</script>

<main class="min-h-screen bg-gray-50">
	<!-- Hero Section med Subcategories -->
	<section
		class="relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-center shadow-xl sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
	>
		<!-- Overlay (valgfrit, giver lidt shine-effekt) -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
		></div>

		<!-- Hero Content -->
		<div class="relative z-10 mx-auto max-w-2xl px-6 text-center">
			<h1
				class="text-3xl font-extrabold text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-5xl"
			>
				Kreatin
			</h1>
			<p class="mt-4 leading-relaxed text-gray-100 drop-shadow-sm sm:text-lg md:text-xl lg:text-xl">
				Kreatin er et populært kosttilskud blandt styrketrænere og atleter. Det hjælper med at øge
				styrke, eksplosivitet og muskelmasse ved at give musklerne mere energi under korte, intense
				træningspas. Kreatin findes naturligt i kød og fisk, men som pulver eller kapsler er det en
				praktisk måde at sikre optimal mængde på.
				<br /><br />Det er videnskabeligt dokumenteret, sikkert for de fleste voksne, og kan
				kombineres med proteinpulver for maksimal muskelvækst og restitution.
			</p>
		</div>
	</section>

	<Products products={kreatinProducts} title="Kreatin" />
</main>
