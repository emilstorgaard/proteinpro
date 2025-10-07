<script lang="ts">
	import { onMount } from 'svelte';
	let mobileMenuOpen = false;
	let activeDropdown: string | null = null;

	import { fetchAllCategories } from '$lib/api/categories';
	import type { Category } from '$lib/types/category';

	let categories: Category[] = [];

	onMount(async () => {
		categories = await fetchAllCategories();
	});

	function toggleDropdown(name: string) {
		activeDropdown = activeDropdown === name ? null : name;
	}
</script>

<header class="sticky top-0 z-50 bg-white/80 shadow-md backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<div class="flex-shrink-0">
				<a href="/">
					<img src="/favicon.png" alt="ProteinPro Logo" class="h-30 w-auto" />
				</a>
			</div>

			<nav class="hidden space-x-8 md:flex">
				{#each categories as category, i}
					<div class="group relative">
						<a
							href={`/categories/${category.id}`}
							class="relative font-medium text-gray-700 transition hover:text-blue-600"
						>
							{category.name}
							<span
								class="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
							></span>
						</a>

						<div
							class="invisible absolute z-20 mt-3 w-56 origin-top rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-1 group-hover:opacity-100
          {i > categories.length - 3 ? 'right-0 left-auto' : 'left-0'}"
						>
							{#each category.subCategories as subCategory}
								<a
									href={"/subcategory/" + subCategory.id}
									class="block rounded-lg px-4 py-2 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
								>
									{subCategory.name}
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</nav>

			<div class="md:hidden">
				<button
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="text-2xl text-gray-700 hover:text-blue-600 focus:outline-none"
				>
					{#if mobileMenuOpen}
						✖
					{:else}
						☰
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<nav class="border-t bg-white/95 shadow-lg backdrop-blur-md md:hidden">
			{#each categories as category}
				<div class="border-b">
					<button
						on:click={() => toggleDropdown(category.name)}
						class="w-full px-5 py-4 text-left font-semibold text-gray-700 transition hover:bg-gray-50"
					>
						{category.name}
					</button>
					{#if activeDropdown === category.name}
						<div class="bg-gray-50 pl-6">
							{#each category.subCategories as subCategory}
								<a
									href={"/subcategory/" + subCategory.id}
									class="block rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200"
									on:click={() => {
										mobileMenuOpen = false;
										activeDropdown = null;
									}}
								>
									{subCategory.name}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</nav>
	{/if}
</header>
