<script lang="ts">
  export let data;
  
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<main class="min-h-screen bg-gray-50">
  <Hero
    title={data.category.name}
    text={""}
		categories={data.categories}
  />

  <Products products={data.products} totalPages={data.totalPages} currentPage={data.currentPage} brands={data.brands} retailers={data.retailers} categoryId={7} />
</main>