<script lang="ts">
	import type { Product } from '../types/product';

	export let products: Product[] = [];
	export let title: string | undefined = undefined;

	// states
	let sortOrder: 'none' | 'asc' | 'desc' = 'none';
	let query: string = '';

	let minPrice: number = 0;
	let maxPrice: number = 10000;

	let selectedBrand: string = 'all';
	let selectedRetailer: string = 'all';

	// toggling filter section
	let showFilters: boolean = false;

	// unikke brands & retailers fra produktdata
	$: brands = Array.from(new Set(products.map((p) => p.brand))).sort();
	$: retailers = Array.from(new Set(products.map((p) => p.retailer))).sort();

	// filtrering
	$: filteredProducts = products.filter((p) => {
		const q = query.toLowerCase();
		const price = parseFloat(p.price);

		return (
			price >= minPrice &&
			price <= maxPrice &&
			(selectedBrand === 'all' || p.brand === selectedBrand) &&
			(selectedRetailer === 'all' || p.retailer === selectedRetailer) &&
			(p.name.toLowerCase().includes(q) ||
				p.brand.toLowerCase().includes(q) ||
				p.retailer.toLowerCase().includes(q) ||
				p.description.toLowerCase().includes(q))
		);
	});

	// sortering
	$: displayedProducts =
		sortOrder === 'asc'
			? [...filteredProducts].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
			: sortOrder === 'desc'
				? [...filteredProducts].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
				: filteredProducts;
</script>

<section class="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
	<h2 class="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
		<!-- VENSTRE SIDE: Filters -->
		<aside class="md:col-span-1">
			<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
				<!-- Filter header -->
				<button
					class="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gray-50"
					on:click={() => (showFilters = !showFilters)}
				>
					<span>Filtre</span>
					<svg
						class={`h-5 w-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>

				{#if showFilters}
					<div class="space-y-6 border-t border-gray-200 p-4">
						<!-- Prisfilter -->
						<div>
							<label class="mb-2 block font-medium text-gray-700">Pris</label>
							<div class="flex items-center space-x-2">
								<input
									type="number"
									bind:value={minPrice}
									min="0"
									class="w-1/2 rounded border-gray-300 px-2 py-1 text-sm"
									placeholder="Min"
									on:keydown={(e) => e.key === 'Enter' && (e.target as HTMLInputElement).blur()}
								/>
								<span>-</span>
								<input
									type="number"
									bind:value={maxPrice}
									min="0"
									class="w-1/2 rounded border-gray-300 px-2 py-1 text-sm"
									placeholder="Max"
									on:keydown={(e) => e.key === 'Enter' && (e.target as HTMLInputElement).blur()}
								/>
							</div>
						</div>

						<!-- Brand filter -->
						<div>
							<label class="mb-2 block font-medium text-gray-700">Brand</label>
							<div class="relative">
								<select
									bind:value={selectedBrand}
									class="w-full appearance-none rounded border border-gray-300 px-3 py-2 pr-8 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
								>
									<option value="all">Alle brands</option>
									{#each brands as brand}
										<option value={brand}>{brand}</option>
									{/each}
								</select>
							</div>
						</div>

						<!-- Retailer filter -->
						<div>
							<label class="mb-2 block font-medium text-gray-700">Forhandler</label>
							<div class="relative">
								<select
									bind:value={selectedRetailer}
									class="w-full appearance-none rounded border border-gray-300 px-3 py-2 pr-8 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
								>
									<option value="all">Alle forhandlere</option>
									{#each retailers as retailer}
										<option value={retailer}>{retailer}</option>
									{/each}
								</select>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</aside>

		<!-- HØJRE SIDE: Produkter -->
		<div class="md:col-span-3">
			<!-- Topbar -->
			<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<input
					type="text"
					bind:value={query}
					placeholder="Søg efter produkter..."
					class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:w-1/2"
					on:keydown={(e) => e.key === 'Enter' && (e.target as HTMLInputElement).blur()}
				/>

				<div class="flex items-center justify-end">
					<label class="mr-2 font-medium text-gray-700">Sorter efter pris:</label>
					<div class="relative">
						<select
							bind:value={sortOrder}
							class="rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm font-medium text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
						>
							<option value="none">Ingen</option>
							<option value="asc">Lav</option>
							<option value="desc">Høj</option>
						</select>
					</div>
				</div>
			</div>

			<!-- Produktgrid -->
			<div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
				{#each displayedProducts as product}
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
		</div>
	</div>
</section>
