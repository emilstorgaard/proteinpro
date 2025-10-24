<script lang="ts">
  export let data;
  
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CategoryList from '$lib/components/CategoryList.svelte';
</script>

<main class="min-h-screen bg-gray-50">
  <Hero
    title={data.category.name}
    text={""}
  />

  <CategoryList categories={data.categories} />

  <Products products={data.products} totalPages={data.totalPages} currentPage={data.currentPage} brands={data.brands} retailers={data.retailers} categoryId={8} />
</main>