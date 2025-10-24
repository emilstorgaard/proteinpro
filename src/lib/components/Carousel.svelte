<script lang="ts">
  import type { Slide } from '$lib/types/slide';
  export let slides: Slide[] = [];

  let current: number = 0;

  const next = (): void => {
    current = (current + 1) % slides.length;
  };

  const prev = (): void => {
    current = (current - 1 + slides.length) % slides.length;
  };

  const goTo = (index: number) => {
    current = index;
  };
</script>

  <div class="relative max-w-5xl mx-auto px-6 py-20">
    <div class="overflow-hidden rounded-3xl shadow-lg border border-[#E6F3FD] bg-white p-10 transition-shadow duration-300 hover:shadow-xl">
      
  {#each slides as slide, index}
    <div class="transition-all duration-500" style="display: {index === current ? 'block' : 'none'}">
      <header class="mb-6 text-center">
        <h2 class="text-4xl font-extrabold text-slate-900">
          {@html slide.title}
        </h2>
        <p class="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
          {slide.intro}
        </p>
      </header>

      <div class="prose prose-lg prose-slate max-w-none mb-8">
        {@html slide.content}
      </div>

      <ul class="mt-12 grid sm:grid-cols-3 gap-6 text-center">
        {#each slide.items as item}
          <li class="p-6 rounded-2xl bg-[#E6F3FD] border border-[#E6F3FD] hover:bg-[#1596EC]/10 transition">
            <span class="block text-3xl mb-2 text-[#007EE1]">{item.icon}</span>
            <p class="font-medium text-slate-700">{@html item.text}</p>
          </li>
        {/each}
      </ul>
    </div>
  {/each}

      <!-- Navigation -->
      <button
        class="absolute top-1/2 left-4 -translate-y-1/2 bg-[#007EE1] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#005bb5]"
        on:click={prev}
      >
        ‹
      </button>
      <button
        class="absolute top-1/2 right-4 -translate-y-1/2 bg-[#007EE1] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#005bb5]"
        on:click={next}
      >
        ›
      </button>

      <!-- Dots -->
      <div class="flex justify-center mt-6 space-x-2">
        {#each slides as _, i}
          <span 
          on:click={() => goTo(i)}
          class="w-3 h-3 rounded-full cursor-pointer {i === current ? 'bg-[#007EE1]' : 'bg-gray-300'}"
          ></span>
        {/each}
      </div>
    </div>
  </div>