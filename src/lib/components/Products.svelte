<script lang="ts">
	import type { Product } from '../types/product';

	export let products: Product[] = [];
	export let title: string;
</script>

<section class="mx-auto max-w-6xl px-3 py-8 sm:px-4 lg:px-6">
  <h2 class="mb-6 text-2xl font-bold text-gray-900">{title}</h2>

  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {#each products as product}
      <div
        class="transform rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col"
      >
        <div class="relative">
          <img
            src={product.image}
            alt={product.name}
            class="h-32 w-full rounded-t-lg object-contain bg-gray-100"
          />
          <div
            class="absolute inset-0 rounded-t-lg bg-gradient-to-t from-black/10 to-transparent"
          ></div>
        </div>

        <!-- flex-grow her holder tekstdelen fleksibel -->
        <div class="p-4 flex flex-col flex-grow">
          <h3 class="text-base font-medium text-gray-900">{product.name}</h3>
          <p class="mt-1 font-semibold text-blue-600">{product.price} kr</p>

          <!-- mt-auto sikrer at knappen bliver presset til bunden -->
          <a
            href={"/products/" + product.id}
            class="mt-auto w-full rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700 inline-block text-center no-underline"
          >
            Køb
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>
