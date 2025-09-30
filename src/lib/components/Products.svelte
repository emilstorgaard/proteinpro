<script lang="ts">
	import type { Product } from '../types/product';

	export let products: Product[] = [];
	export let title: string | undefined = undefined;
</script>

<section class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
  <h2 class="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>

  <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
    {#each products as product}
      <a href={'/products/' + product.id} class="group h-full">
        <div
          class="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
          <div class="flex items-center justify-center bg-gray-50 p-6">
            <img 
              src={product.image} 
              alt={product.name} 
              class="h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div class="flex flex-grow flex-col p-4 text-center">
            <h3 class="mb-2 line-clamp-2 text-sm font-semibold text-gray-900 sm:text-base">
              {product.name}
            </h3>
            <p class="mt-auto text-lg font-bold text-blue-600 sm:text-xl">
              {product.price} kr
            </p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>
