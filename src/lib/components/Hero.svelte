<script lang="ts">
	import type { Category } from '../types/category';
	import Categories from './Categories.svelte';

	export let title: string;
	export let text: string;
	export let categories: Category[] = [];
</script>

<section
	class="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-3 py-8 text-center sm:px-4 lg:px-6"
>
	<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
		{title}
	</h2>

	<p class="mt-4 text-base text-gray-600 sm:text-lg md:text-xl">
		{text}
	</p>

	<div class="mt-8 flex flex-wrap justify-center gap-4">
		{#each categories as category}
			<a
				href={category.url}
				class="rounded-md bg-gray-100 px-6 py-3 text-sm font-medium text-gray-800 shadow transition hover:bg-gray-200 sm:text-base"
			>
				{category.name}
			</a>
		{/each}
	</div>
</section>
