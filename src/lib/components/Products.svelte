<script lang="ts">
	import type { Product } from '../types/product';

	export let products: Product[] = [];
	export let title: string;
</script>

<section class="mx-auto max-w-6xl px-3 py-8 sm:px-4 lg:px-6">
	<h2 class="mb-6 text-2xl font-bold text-gray-900">{title}</h2>

	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
		{#each products as product}
			<a href={'/products/' + product.id} class="h-full">
				<div
					class="flex h-full flex-col rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
				>
					<div class="relative">
						<img
							src={product.image}
							alt={product.name}
							class="h-32 w-full rounded-t-lg bg-gray-100 object-contain"
						/>
						<div
							class="absolute inset-0 rounded-t-lg bg-gradient-to-t from-black/10 to-transparent"
						></div>
					</div>

					<div class="flex flex-grow flex-col p-4">
						<h3 class="text-base font-medium text-gray-900 line-clamp-2">{product.name}</h3>
						<p class="mt-auto font-semibold text-blue-600">{product.price} kr</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
