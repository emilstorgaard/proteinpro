<script lang="ts">
	import type { Category } from '../types/category';
	import Categories from './Categories.svelte';

	export let title: string;
	export let text: string;
	export let backgroundImage: string | null = null;
	export let categories: Category[] = [];
</script>

<section class="relative flex flex-col items-center justify-center py-10 text-center">
	<!-- Baggrund / Gradient -->
	{#if backgroundImage}
		<div
			class="absolute inset-0 bg-cover bg-center"
			style="background-image: url({backgroundImage});"
		></div>
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
	{:else}
		<div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"></div>
	{/if}

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
		<h1
			class="text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
		>
			{title}
		</h1>
		<p class="mt-4 text-base text-gray-200 sm:text-lg md:text-xl">
			{text}
		</p>
	</div>

	<!-- Categories Overlay -->
	{#if categories.length > 0}
		<Categories {categories} />
	{/if}
</section>
