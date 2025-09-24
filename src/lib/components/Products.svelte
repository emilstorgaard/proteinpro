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
				class="transform rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
			>
				<div class="relative">
					<img
						src={product.image}
						alt={product.name}
						class="h-32 w-full rounded-t-lg object-cover"
					/>
					<div
						class="absolute inset-0 rounded-t-lg bg-gradient-to-t from-black/10 to-transparent"
					></div>
				</div>
				<div class="p-4">
					<h3 class="text-base font-medium text-gray-900">{product.name}</h3>
					<p class="mt-1 font-semibold text-blue-600">{product.price} kr</p>
					<button
						class="mt-3 w-full rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700"
					>
						Køb
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>
