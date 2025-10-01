<script lang="ts">
  export let data;
  
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<main class="min-h-screen bg-gray-50">
  <Hero
    title={data.category.name}
    text={data.category.description}
    subCategories={data.subCategories}
  />

  <Products products={data.products} />
</main>