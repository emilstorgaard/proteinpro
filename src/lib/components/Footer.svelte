<script lang="ts">
	import { onMount } from 'svelte';

	import { fetchAllCategories } from '$lib/api/categories';
	import type { Category } from '$lib/types/category';

	let categories: Category[] = [];

	onMount(async () => {
		categories = await fetchAllCategories();
	});

	const socialLinks = [
		{ name: 'Instagram', url: 'https://www.instagram.com/proteinpro.dk', icon: '/icons/instagram.png' },
		{ name: 'TikTok', url: 'https://www.tiktok.com/@proteinpro.dk', icon: '/icons/tiktok.png' }
	];
</script>

<footer class="bg-gray-900 text-gray-300">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
		<div>
			<p class="mt-3 text-sm text-gray-400">
				Din partner indenfor kosttilskud, energi og sundhed. Kvalitet og resultater til dig.
			</p>
		</div>

		<div>
			<h3 class="mb-3 text-sm font-semibold text-white uppercase">Kategorier</h3>
			<ul class="space-y-2">
				{#each categories as category}
					<li>
						<a href={`/categories/${category.id}`} class="transition hover:text-blue-400">{category.name}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<a href="/about" class="mb-3 text-sm font-semibold text-white uppercase">Om os</a>
		</div>
	</div>

	<div class="border-t border-gray-700">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 sm:px-6 md:flex-row lg:px-8"
		>
			<div class="mb-3 flex space-x-4 md:mb-0">
				{#each socialLinks as social}
					<a
						href={social.url}
						class="text-gray-400 hover:text-blue-400"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="sr-only">{social.name}</span>
						<img src={social.icon} alt={social.name} class="h-6 w-6" />
					</a>
				{/each}
			</div>

			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} ProteinPro. Alle rettigheder forbeholdes.
			</p>
		</div>
	</div>
</footer>
