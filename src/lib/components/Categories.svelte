<script lang="ts">
	import type { Category } from '../types/category';

	export let categories: Category[] = [];
</script>

<div class="relative z-10 mt-8 w-full max-w-6xl px-3 sm:px-4 lg:px-6">
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
		{#each categories as category}
			<a
				href={category.url}
				class="transform overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
			>
				<div class="relative">
					<img
						src={category.image}
						alt={category.name}
						class="h-32 w-full object-cover sm:h-36 md:h-40"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
				</div>
				<div class="p-3 sm:p-4">
					<h3 class="text-base font-medium text-gray-900 sm:text-lg">
						{category.name}
					</h3>
				</div>
			</a>
		{/each}
	</div>
</div>
