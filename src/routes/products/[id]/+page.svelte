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

			<!-- Product info -->
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
						class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
					>
						Køb nu
					</a>
				</div>

				<div
					class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16"
				>
					<div>
						<h3 class="sr-only">Beskrivelse</h3>

						<div class="space-y-6">
							<p class="text-base text-gray-900">{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<p class="text-center text-gray-500">Produktet blev ikke fundet.</p>
		{/if}
	</section>
</main>
