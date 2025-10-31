<script lang="ts">
	export let data;
	const { product } = data;
</script>

<main class="min-h-screen flex items-center justify-center py-10 px-4">
	<section class="w-full max-w-4xl">
		{#if product}
			<div class="flex flex-col lg:flex-row gap-8">
				<div class="flex-1 flex items-center justify-center p-6">
					<img
						src={product.image}
						alt={`Billede af ${product.name}`}
						class="h-[230px] sm:h-[300px] lg:h-[340px] object-contain"
						loading="lazy"
					/>
				</div>

				<div class="flex-1 flex flex-col justify-between p-7 lg:p-9">
					<div>
						<h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							{product.name}
						</h1>

						<div class="mt-4">
							{#if product.originalPrice && Number(product.originalPrice) > Number(product.price)}
								<p class="text-sm text-gray-500 line-through">{product.originalPrice} kr</p>
							{/if}
							<p class="text-3xl font-extrabold text-[#007EE1]">{product.price} kr</p>
						</div>

						<a
							href={product.url}
							target="_blank"
							rel="nofollow noopener"
							class="group mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-[#007EE1] px-7 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0065B5] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#007EE1]/30"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18m-6-6 6 6-6 6" />
							</svg>
							Til Produkt
						</a>

						<p class="mt-3 text-sm text-gray-600">
							<span class="italic">Tryg handel via</span>
							<a
								href={product.url}
								target="_blank"
								rel="nofollow noopener"
								class="ml-1 font-medium text-[#007EE1] hover:text-[#0065B5] underline underline-offset-2"
							>
								{product.retailer}
							</a>
						</p>
					</div>

					<div class="mt-8 border-t border-gray-200 pt-5">
						<h2 class="text-lg font-semibold text-gray-900 mb-2">Produktbeskrivelse</h2>
						<p class="text-sm leading-relaxed text-gray-700 overflow-auto max-h-[400px]">
							{product.description}
						</p>
						<p class="mt-3 text-xs text-gray-500">
							<span class="italic">Flere informationer hos</span>
							<a
								href={product.url}
								target="_blank"
								rel="nofollow noopener"
								class="ml-1 font-medium text-[#007EE1] hover:text-[#0065B5] underline underline-offset-2"
							>
								{product.retailer}
							</a>
						</p>
					</div>
				</div>
			</div>
		{:else}
			<p class="text-center text-gray-500 text-lg mt-20">Produktet blev ikke fundet.</p>
		{/if}
	</section>
</main>