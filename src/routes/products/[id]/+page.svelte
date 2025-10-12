<script lang="ts">
	export let data;
	const { product } = data;
</script>

<main class="min-h-screen bg-gray-50">
	<section class="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
		{#if product}
			<img
				src={product.image}
				alt={product.name}
				class="h-[250px] w-full object-contain sm:h-[300px] lg:h-[350px]"
			/>

			<div
				class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
			>
				<div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
					<h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
						{product.name}
					</h1>
				</div>

				<div class="mt-4 lg:row-span-3 lg:mt-0">
					<h2 class="sr-only">Produkt information</h2>
					<p class="text-3xl tracking-tight text-gray-900">{product.price} kr</p>

					<a
						href={product.url}
						target="_blank"
						rel="nofollow noopener"
						class="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-[#007EE1] px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:shadow-lg focus:ring-4 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none active:scale-95"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-4 w-4"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18m-6-6 6 6-6 6" />
						</svg>
						Køb nu
					</a>
				</div>

				<div
					class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16"
				>
					<div>
						<h3 class="sr-only">Beskrivelse</h3>

						<div class="space-y-4">
							<p class="text-lg leading-relaxed text-gray-800">
								{product.description}...
							</p>
							<p class="text-sm text-gray-600">
								Flere informationer hos:
								<a
									href={product.url}
									target="_blank"
									rel="noopener noreferrer"
									class="font-medium text-[#007EE1] underline underline-offset-2 hover:text-[#0065B5]"
								>
									{product.retailer}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<p class="text-center text-gray-500">Produktet blev ikke fundet.</p>
		{/if}
	</section>
</main>
