<script>
  import { link } from 'svelte-spa-router';

  const items = [
    'Weekly Recurring Lessons',
    'Unified Piper Fleet',
    'Pay As You Fly',
    'Free Training Consultation',
    'Manassas Regional Airport',
    'Private · Instrument · Commercial'
  ];
  const loop = [...items, ...items];
</script>

<section
  class="relative overflow-hidden bg-gradient-to-r from-ink-900/90 via-ink-800/70 to-ink-900/90 py-6"
>
  <div
    class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-50"
  ></div>
  <div class="relative flex whitespace-nowrap animate-marquee">
    {#each loop as item}
      <div
        class="flex items-center gap-8 px-8 font-display text-xl font-medium tracking-tight text-bone-100/72 sm:text-2xl"
      >
        {#if item === 'Manassas Regional Airport'}
          <a href="/manassas-regional-airport-virginia" use:link class="transition-colors hover:text-sky-300">
            {item}
          </a>
        {:else}
          <span>{item}</span>
        {/if}
        <span class="text-sky-400/60 tracking-widest" aria-hidden="true">--</span>
      </div>
    {/each}
  </div>
</section>
