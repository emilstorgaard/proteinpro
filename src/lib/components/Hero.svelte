<script lang="ts">
	import type { Category } from '../types/category';
	import Categories from './Categories.svelte';

	export let title: string;
	export let text: string;
	export let categories: Category[] = [];
</script>

<section
  class="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 bg-gray-50"
>
  <h2 class="text-3xl font-extrabold text-blue-600 sm:text-4xl md:text-5xl leading-tight">
    {title}
  </h2>

  <p class="mt-4 max-w-3xl text-base text-gray-700 sm:text-lg md:text-xl">
    {text}
  </p>

  <div class="mt-8 flex flex-wrap justify-center gap-4">
    {#each categories as category}
      <a
        href={category.url}
        class="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-[#0A4B87] hover:scale-105 sm:text-base"
      >
        {category.name}
      </a>
    {/each}
  </div>
</section>
