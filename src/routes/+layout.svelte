<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { Category } from '$lib/types/category';

	const { data, children } = $props();
	const { categories } = data as { categories: Category[] };
</script>

<svelte:head>
	<title>ProteinPro</title>
</svelte:head>

<Header {categories} />
{@render children?.()}
<Footer {categories} />
