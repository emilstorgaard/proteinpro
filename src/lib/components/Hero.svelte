<script lang="ts">
  import type { Category } from '../types/category';

  export let title: string;
  export let text: string;
  export let categories: Category[] = [];
</script>

<!-- HERO SECTION -->
<section
  class="relative flex flex-col items-center justify-center px-4 py-20 sm:py-24 lg:py-32 text-center sm:px-6 lg:px-8 overflow-hidden"
>
  <!-- Baggrundsbillede -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/hero.jpg');"
  ></div>

  <!-- Mørkt overlay -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- Tekstindhold -->
  <div class="relative z-10 max-w-4xl mx-auto px-4">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
      {title}
    </h1>
    <p class="mt-4 text-base sm:text-lg md:text-xl text-gray-100 drop-shadow">
      {text}
    </p>
  </div>
</section>

<!-- CATEGORY GRID SECTION -->
{#if categories.length}
<section class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {#each categories as category}
      <a 
        href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '')}`} 
        class="group relative block overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      >
        <!-- Billede fylder hele kortet, mindre højde -->
        <div class="w-full h-32 sm:h-40 lg:h-44 overflow-hidden">
          <img 
            src={"/images/" + category.image} 
            alt={category.name} 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            loading="lazy" 
          />
        </div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40"></div>

        <!-- Tekst -->
        <div class="absolute bottom-0 left-0 right-0 p-2">
          <h3 class="text-sm font-bold text-white tracking-wide drop-shadow-lg text-center uppercase">
            {category.name}
          </h3>
        </div>
      </a>
    {/each}
  </div>
</section>
{/if}

