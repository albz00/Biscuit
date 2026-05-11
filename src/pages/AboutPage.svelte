<script>
  import Philosophy from '../lib/Philosophy.svelte';
  import FAQ from '../lib/FAQ.svelte';
</script>

<div class="relative">
  <!-- Dark cap: fades over exactly py-28/py-36 so the nav area is dark and page text starts on light background -->
  <div
    class="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-ink-950 to-transparent sm:h-36"
  ></div>
  <Philosophy />
</div>
<FAQ />
