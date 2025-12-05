<script lang="ts">
  import type { Category } from '../types/category';

  export let categories: Category[] = [];
</script>

{#if categories.length}
<section class="relative mx-auto my-4 max-w-5xl px-2 py-2 sm:px-4 lg:px-6">
  <div class="flex flex-wrap justify-center gap-2">
    {#each categories as category}
    <a 
      href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '')}#content`} 
      class="group relative block overflow-hidden rounded-md shadow-sm flex-none w-[48%] sm:w-[32%] md:w-[24%] lg:w-[18%] aspect-square transform transition-transform duration-300 hover:scale-105"
    >
      <!-- Billedet -->
      <img 
        src={"/images/" + category.image} 
        alt={category.name} 
        class="w-full h-full object-cover" 
        loading="lazy" 
      />

      <!-- Overlay for kontrast -->
      <div class="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/20"></div>

      <!-- Tekst-container med baggrund -->
      <div class="absolute bottom-0 left-0 right-0 p-1 flex justify-center bg-black/50">
        <h3 
          class="font-bold text-white text-center uppercase line-clamp-1 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-wider drop-shadow-md"
        >
          {category.name}
        </h3>
      </div>
    </a>
    {/each}
  </div>
</section>
{/if}
