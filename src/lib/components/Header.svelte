<script lang="ts">
	let mobileMenuOpen = false;

	import type { Category } from '$lib/types/category';
	export let categories: Category[] = [];
</script>

<header class="sticky top-0 z-50 bg-white/80 shadow-md backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/">
					<img src="/favicon.png" alt="ProteinPro Logo" class="h-30 w-auto" />
				</a>
			</div>

			<!-- Desktop navigation -->
			<nav class="hidden space-x-8 md:flex">
				{#each categories as category}
					<a
						href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '')}#content`}
						class="group relative font-medium text-gray-700 transition hover:text-[#007EE1]"
					>
						{category.name}
						<span
							class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#007EE1] transition-all duration-300 group-hover:w-full"
						></span>
					</a>
				{/each}
			</nav>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="text-2xl text-gray-700 hover:text-[#007EE1] focus:outline-none"
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

	<!-- Mobile navigation -->
	{#if mobileMenuOpen}
		<nav class="border-t bg-white/95 shadow-lg backdrop-blur-md md:hidden">
			{#each categories as category}
				<a
					href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '')}#content`}
					class="block border-b px-5 py-4 font-semibold text-gray-700 transition hover:bg-gray-50"
					on:click={() => (mobileMenuOpen = false)}
				>
					{category.name}
				</a>
			{/each}
		</nav>
	{/if}
</header>