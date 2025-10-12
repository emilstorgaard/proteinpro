<script lang="ts">
	import type { Product } from '../types/product';
	import Pagination from './Pagination.svelte';
	import {
		fetchPagedProducts,
		type ProductFilters,
		type ProductSearch,
		type ProductSortOrder
	} from '$lib/api/products';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';


	export let products: Product[] = [];
	export let totalPages: number = 1;
	export let currentPage: number = 1;

	let sortPrice: 'none' | 'price-low' | 'price-high' = 'none';
	let search: string = '';
	let minPrice: number = 0;
	let maxPrice: number = 10000;
	let selectedBrand: string = 'all';
	let selectedRetailer: string = 'all';
	let showFilters: boolean = false;

	const itemsPerPage = 20;

	// Unique brands & retailers (from currently loaded page)
	$: brands = Array.from(new Set(products.map((p) => p.brand))).sort();
	$: retailers = Array.from(new Set(products.map((p) => p.retailer))).sort();

	// Fetch page from server
	const fetchPage = async (pageNum: number) => {
		// Get the current route params dynamically
		const params = get(page).params;
		const categoryId = params.categoryid ? Number(params.categoryid) : undefined;
		const subCategoryId = params.subcategoryid ? Number(params.subcategoryid) : undefined;

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

		// Fetch products with category/subcategory
		const data = await fetchPagedProducts(
			fetch,
			pageNum,
			filters,
			productSearch,
			productSort,
			categoryId,
			subCategoryId
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

<section class="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
		<!-- Filters -->
		<aside class="md:col-span-1">
			<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
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
						<!-- Price filter -->
						<div>
							<label class="mb-2 block font-medium text-gray-700">Pris</label>
							<div class="flex items-center space-x-2">
								<input
									type="number"
									bind:value={minPrice}
									min="0"
									class="w-1/2 rounded border-gray-300 px-2 py-1 text-sm"
									placeholder="Min"
								/>
								<span>-</span>
								<input
									type="number"
									bind:value={maxPrice}
									min="0"
									class="w-1/2 rounded border-gray-300 px-2 py-1 text-sm"
									placeholder="Max"
								/>
							</div>
						</div>

						<!-- Brand filter -->
						<div>
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

						<!-- Retailer filter -->
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
		</aside>

		<!-- Products grid -->
		<div class="md:col-span-3">
			<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<input
					type="text"
					bind:value={search}
					placeholder="Søg efter produkter..."
					class="py- w-full rounded-lg border border-gray-300 px-4 shadow-sm sm:w-1/2"
				/>

				<div class="flex items-center justify-end gap-2">
					<label class="font-medium text-gray-700">Sorter efter pris:</label>
					<select
						bind:value={sortPrice}
						class="min-w-[120px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm"
					>
						<option value="none">Ingen</option>
						<option value="price-low">Lav</option>
						<option value="price-high">Høj</option>
					</select>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
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
								<p class="mt-auto text-lg font-bold text-[#007EE1] sm:text-xl">{product.price} kr</p>
							</div>
						</div>
					</a>
				{/each}
			</div>

			<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
		</div>
	</div>
</section>
