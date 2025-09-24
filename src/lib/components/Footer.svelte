<script lang="ts">
	import { categories } from '$lib/data/categories';

	const socialLinks = [
		{ name: 'Instagram', url: '#', icon: '/icons/instagram.png' },
		{ name: 'TikTok', url: '#', icon: '/icons/tiktok.png' }
	];
</script>

<footer class="bg-gray-900 text-gray-300">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
		<!-- Logo & description -->
		<div>
			<p class="mt-3 text-sm text-gray-400">
				Din partner indenfor kosttilskud, energi og sundhed. Kvalitet og resultater til dig.
			</p>
		</div>

		<!-- Link columns -->
		<div>
			<h3 class="mb-3 text-sm font-semibold text-white uppercase">Kategorier</h3>
			<ul class="space-y-2">
				{#each categories as category}
					<li>
						<a href={category.url} class="transition hover:text-blue-400">{category.name}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<a href="/about" class="mb-3 text-sm font-semibold text-white uppercase">Om os</a>
		</div>
	</div>

	<!-- Bottom bar -->
	<div class="border-t border-gray-700">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 sm:px-6 md:flex-row lg:px-8"
		>
			<!-- Socials -->
			<div class="mb-3 flex space-x-4 md:mb-0">
				{#each socialLinks as social}
					<a href={social.url} class="text-gray-400 hover:text-blue-400">
						<span class="sr-only">{social.name}</span>
						<img src={social.icon} alt={social.name} class="h-6 w-6" />
					</a>
				{/each}
			</div>

			<!-- Copyright -->
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Bodyup. Alle rettigheder forbeholdes.
			</p>
		</div>
	</div>
</footer>
