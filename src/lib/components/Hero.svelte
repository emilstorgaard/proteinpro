<script lang="ts">
  export let title: string;
  export let text: string;
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