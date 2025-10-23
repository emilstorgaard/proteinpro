<script lang="ts">
	import type { Product } from '../types/product';
	import Pagination from './Pagination.svelte';
	import {
		fetchPagedProducts,
		type ProductFilters,
		type ProductSearch,
		type ProductSortOrder
	} from '$lib/api/products';

	export let products: Product[] = [];
	export let brands: string[] = [];
	export let retailers: string[] = [];
	export let totalPages: number = 1;
	export let currentPage: number = 1;
	export let categoryId: number;

	let sortPrice: 'none' | 'price-low' | 'price-high' = 'none';
	let search: string = '';
	let minPrice: number = 0;
	let maxPrice: number = 10000;
	let selectedBrand: string = 'all';
	let selectedRetailer: string = 'all';
	let showFilters: boolean = false;

	// Fetch page from server
	const fetchPage = async (pageNum: number) => {
		// Build filters
		const filters: ProductFilters = {};
		if (minPrice) filters.minPrice = minPrice;
		if (maxPrice) filters.maxPrice = maxPrice;
		if (selectedBrand !== 'all') filters.brand = selectedBrand;
		if (selectedRetailer !== 'all') filters.retailer = selectedRetailer;

		// Search
		const productSearch: ProductSearch = search || "";

		// Sort
		const productSort: ProductSortOrder = {};
		if (sortPrice && sortPrice !== 'none') productSort.price = sortPrice;

		// Fetch products with category
		const data = await fetchPagedProducts(
			fetch,
			pageNum,
			filters,
			productSearch,
			productSort,
			categoryId,
		);

		// Update state
		products = data.products;
		currentPage = data.currentPage;
		totalPages = data.totalPages;
	};

	const handlePageChange = (page: number) => fetchPage(page);

	// Re-fetch whenever filters or search change
	$: {
		search;
		selectedBrand;
		selectedRetailer;
		minPrice;
		maxPrice;
		sortPrice;
		fetchPage(1);
	}
</script>

<section class="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
	<!-- Top controls: filter, søg, sort -->
	<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<!-- Left side: filter + search -->
		<div class="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
			<!-- Filter button -->
			<div class="relative">
				<button
					class="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-sm hover:bg-gray-50 border border-gray-300"
					on:click={() => (showFilters = !showFilters)}
					aria-expanded={showFilters}
					aria-controls="filters-dropdown"
				>
					<svg
						class="h-5 w-5 text-gray-600"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 018 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
						/>
					</svg>
					<span class="font-semibold text-gray-800">Filtre</span>
					<svg
						class={`h-4 w-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
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

				<!-- Dropdown: overlaps products -->
				{#if showFilters}
					<div
						id="filters-dropdown"
						class="absolute left-0 top-12 z-50 w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-xl"
					>
						<!-- Pris -->
						<div class="mb-4">
							<label class="mb-2 block font-medium text-gray-700">Pris</label>
							<div class="flex items-center space-x-2">
								<input
									type="number"
									bind:value={minPrice}
									min="0"
									class="w-1/2 rounded border border-gray-300 px-2 py-1 text-sm"
									placeholder="Min"
								/>
								<span>-</span>
								<input
									type="number"
									bind:value={maxPrice}
									min="0"
									class="w-1/2 rounded border border-gray-300 px-2 py-1 text-sm"
									placeholder="Max"
								/>
							</div>
						</div>

						<!-- Brand -->
						<div class="mb-4">
							<label class="mb-2 block font-medium text-gray-700">Brand</label>
							<select
								bind:value={selectedBrand}
								class="w-full rounded border border-gray-300 px-3 py-2 text-sm"
							>
								<option value="all">Alle brands</option>
								{#each brands as brand}
									<option value={brand}>{brand}</option>
								{/each}
							</select>
						</div>

						<!-- Retailer -->
						<div>
							<label class="mb-2 block font-medium text-gray-700">Forhandler</label>
							<select
								bind:value={selectedRetailer}
								class="w-full rounded border border-gray-300 px-3 py-2 text-sm"
							>
								<option value="all">Alle forhandlere</option>
								{#each retailers as retailer}
									<option value={retailer}>{retailer}</option>
								{/each}
							</select>
						</div>
					</div>
				{/if}
			</div>

			<!-- Search -->
			<input
				type="text"
				bind:value={search}
				placeholder="Søg efter produkter..."
				class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm sm:w-72"
			/>
		</div>

		<!-- Sort dropdown -->
<div class="flex items-center justify-end">
  <select
    bind:value={sortPrice}
    class="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700"
  >
    <option disabled selected>Sorter efter pris</option>
    <option value="none">Ingen</option>
    <option value="price-low">Lav → Høj</option>
    <option value="price-high">Høj → Lav</option>
  </select>
</div>
	</div>

	<!-- Produktgrid -->
  <div class="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 justify-center">
    {#each products as product}
      <a href={'/products/' + product.id} class="group block w-full sm:w-60">
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
            <p class="mt-auto text-lg font-bold text-[#007EE1] sm:text-xl">{product.price} kr</p>
          </div>
        </div>
      </a>
    {/each}
  </div>

	<div class="mt-6">
		<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
	</div>
</section>