<script lang="ts">
	import type { Category } from '../types/category';

	export let categories: Category[] = [];
</script>

<div class="relative z-10 mt-8 w-full max-w-6xl px-3 sm:px-4 lg:px-6">
  <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
    {#each categories as category}
      <a
        href={category.url}
        class="w-full sm:w-48 transform overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
      >
        <div class="relative">
          <img
            src={category.image}
            alt={category.name}
            class="h-24 w-full rounded-t-lg object-contain bg-gray-100 sm:h-32"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
        <div class="p-2 sm:p-4">
          <h3 class="text-sm font-medium text-gray-900 sm:text-lg">
            {category.name}
          </h3>
        </div>
      </a>
    {/each}
  </div>
</div>
