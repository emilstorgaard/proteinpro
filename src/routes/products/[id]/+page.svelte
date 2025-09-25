<script lang="ts">
	export let data;
	const { product } = data;
</script>

<main class="bg-gray-50">
		<div class="relative z-10 mx-auto max-w-3xl text-center">
			<div class="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
				{#if product}
				<div class="flex flex-col gap-8 lg:flex-row lg:items-start">
					
					<figure class="flex-1">
						<img
							src={product.image}
							alt={product.name}
							class="w-full rounded-xl object-cover shadow-lg"
							loading="lazy"
						/>
					</figure>

					<div class="flex flex-1 flex-col justify-between">
						<header>
							<h1 class="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{product.name}</h1>
							<p class="mb-4 text-gray-700 leading-relaxed">{product.description}</p>
							<p class="mb-6 text-2xl font-semibold text-gray-900">{product.price.toFixed(2)} kr.</p>
						</header>

						<div>
							<a
								href={product.url}
								target="_blank"
								rel="nofollow noopener"
								class="inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Køb nu
							</a>
						</div>
					</div>
				</div>
			{:else}
				<p class="text-center text-gray-500">Produktet blev ikke fundet.</p>
			{/if}
			</div>
		</div>
</main>