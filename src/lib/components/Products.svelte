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

	let sortPrice: 'none' | 'price-low' | 'price-high' | 'savings' = 'none';
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

<section class="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8" id="content">
	<!-- Top controls: filter, søg, sort -->
	<div class="mb-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
  <!-- Left side: filter + search -->
  <div class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
    <!-- Filter button -->
    <div class="relative w-full sm:w-auto">
  <button
    class="w-full sm:w-auto flex items-center justify-between gap-2 rounded-lg bg-white px-4 py-2 shadow-md hover:bg-gray-50 border border-gray-300 text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    on:click={() => (showFilters = !showFilters)}
    aria-expanded={showFilters}
    aria-controls="filters-dropdown"
  >
    <div class="flex items-center gap-2">
      <svg
        class="h-5 w-5"
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
      <span class="font-semibold">Filtre</span>
    </div>
    <svg
      class={`h-4 w-4 transform transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>

  <!-- Dropdown -->
  {#if showFilters}
    <div
      id="filters-dropdown"
      class="absolute left-0 top-full mt-2 z-50 w-full sm:w-64 rounded-xl border border-gray-200 bg-white p-5 shadow-lg"
    >
      <!-- Pris -->
      <div class="mb-4">
        <label class="mb-2 block font-medium text-gray-700">Pris</label>
        <div class="flex items-center gap-2">
          <input
            type="number"
            bind:value={minPrice}
            min="0"
            class="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
            placeholder="Min"
          />
          <span class="text-gray-500">-</span>
          <input
            type="number"
            bind:value={maxPrice}
            min="0"
            class="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
            placeholder="Max"
          />
        </div>
      </div>

      <!-- Brand -->
      <div class="mb-4">
        <label class="mb-2 block font-medium text-gray-700">Brand</label>
        <select
          bind:value={selectedBrand}
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
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
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
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
      class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none sm:w-72 transition"
    />
  </div>

  <!-- Sort dropdown -->
  <div class="flex items-center justify-end mt-4 sm:mt-0">
    <label for="sortPrice" class="mr-2 text-sm font-medium text-gray-700">Sorter efter pris:</label>
    <select
      id="sortPrice"
      bind:value={sortPrice}
      class="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none transition"
    >
      <option value="none">Ingen</option>
      <option value="price-low">Lav → Høj</option>
      <option value="price-high">Høj → Lav</option>
      <option value="savings">Største besparelse</option>
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
        <div class="flex items-center justify-center bg-black/10 p-6">
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

        <!-- Priser -->
        <div class="mt-auto">
          {#if product.originalPrice && Number(product.originalPrice) > Number(product.price)}
            <p class="text-sm text-gray-400 line-through">{product.originalPrice} kr</p>
          {/if}
          <p class="text-lg font-bold text-[#007EE1] sm:text-xl">{product.price} kr</p>
        </div>

        </div>
      </div>
    </a>
  {/each}
</div>

	<div class="mt-6">
		<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
	</div>
</section>