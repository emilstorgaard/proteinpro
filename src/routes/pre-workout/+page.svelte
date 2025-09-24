
<script lang="ts">
    import Products from "$lib/components/Products.svelte";
import { products } from "$lib/data/products";

      const preWorkoutSubCategoryId = 4;

  const preWorkoutProducts = products.filter((p) => p.subCategoryIds.includes(preWorkoutSubCategoryId));
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
				Pre workout
			</h1>
			<p class="mt-4 leading-relaxed text-gray-100 drop-shadow-sm sm:text-lg md:text-xl lg:text-xl">
                Pre-Workout er et kosttilskud, der tages inden træning for at booste energi, fokus og udholdenhed.
                Det indeholder typisk koffein, aminosyrer og andre ingredienser, som hjælper dig med at yde dit bedste under intense træningspas.
                <br><br>Pre-Workout er perfekt til dem, der vil have mere kraft, bedre koncentration og højere intensitet i deres træning.
                Det kan blandes med vand som en shake og tages ca. 20–30 minutter før træning.
			</p>
		</div>
	</section>

    <Products products={preWorkoutProducts} title="Pre workout" />
</main>