<script lang="ts">
	export let currentPage: number = 1;
	export let totalPages: number = 1;
	export let onPageChange: (page: number) => void;

	const goPrev = () => currentPage > 1 && onPageChange(currentPage - 1);
	const goNext = () => currentPage < totalPages && onPageChange(currentPage + 1);

	// Smart pagination with ellipses
	$: pages = (() => {
		const delta = 2;
		const range: (number | string)[] = [];
		let l: number | undefined = undefined;

		for (let i = 1; i <= totalPages; i++) {
			if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
				if (l !== undefined && i - l > 1) range.push('...');
				range.push(i);
				l = i;
			}
		}
		return range;
	})();
</script>

{#if totalPages > 1}
	<div class="mt-6 flex flex-wrap justify-center items-center gap-2">
		<!-- Prev button -->
		<button
			class="px-2 sm:px-3 py-1 rounded bg-gray-200 disabled:opacity-50 text-sm sm:text-base"
			on:click={goPrev}
			disabled={currentPage === 1}
		>
			Forgående
		</button>

		<!-- Page numbers -->
		{#each pages as page}
			{#if page === '...'}
				<span class="px-2 py-1 text-gray-500 text-sm sm:text-base">…</span>
			{:else}
				<button
					class="px-2 sm:px-3 py-1 rounded text-sm sm:text-base {currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}"
					on:click={() => onPageChange(page as number)}
				>
					{page}
				</button>
			{/if}
		{/each}

		<!-- Next button -->
		<button
			class="px-2 sm:px-3 py-1 rounded bg-gray-200 disabled:opacity-50 text-sm sm:text-base"
			on:click={goNext}
			disabled={currentPage === totalPages}
		>
			Næste
		</button>
	</div>
{/if}
