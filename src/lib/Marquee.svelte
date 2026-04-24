<script>
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
  class="relative overflow-hidden border-y border-white/[0.07] bg-gradient-to-r from-ink-900/90 via-ink-800/70 to-ink-900/90 py-6"
>
  <div
    class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-50"
  ></div>
  <div class="relative flex whitespace-nowrap animate-marquee">
    {#each loop as item}
      <div
        class="flex items-center gap-8 px-8 font-display text-xl font-medium tracking-tight text-bone-100/72 sm:text-2xl"
      >
        <span>{item}</span>
        <span class="text-sky-400/70">/</span>
      </div>
    {/each}
  </div>
</section>
