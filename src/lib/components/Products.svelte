<script lang="ts">
	import type { Product } from '../types/product';

	export let products: Product[] = [];
	export let title: string | undefined = undefined;
</script>

<section class="mx-auto max-w-6xl px-3 py-8 sm:px-4 lg:px-6">
	<h2 class="mb-6 text-2xl font-bold text-gray-900">{title}</h2>

	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
		{#each products as product}
			<a href={'/products/' + product.id} class="h-full">
				<div
					class="flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
				>
					<div class="flex items-center justify-center bg-gray-50 p-4">
						<img src={product.image} alt={product.name} class="h-32 w-32 object-contain" />
					</div>

					<div class="flex flex-grow flex-col p-4 text-center">
						<h3 class="mb-2 line-clamp-2 text-sm font-medium text-gray-900 sm:text-base">
							{product.name}
						</h3>
						<p class="mt-auto text-lg font-semibold text-blue-600">{product.price} kr</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
