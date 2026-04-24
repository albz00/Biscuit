<script>
  import { reveal } from './useReveal.js';

  const aircraft = [
    {
      tail: 'N5295S',
      model: '1971 Piper Cherokee 140',
      blurb:
        'A classic, reliable trainer. Ideal for your first hours in the cockpit and earning your Private Pilot certificate.',
      avionics: ['Dual Garmin G5 flight displays', 'Touchscreen Garmin GPS 175']
    },
    {
      tail: 'N8460Y',
      model: 'Piper Archer 181',
      blurb:
        'A fully equipped step-up aircraft. Well suited for instrument training, cross-country flying, and commercial work.',
      avionics: [
        'Dual Garmin G5 flight displays',
        'Touchscreen Garmin GTN 650xi',
        'GFC 500 autopilot',
        'JPI EDM-830 engine monitor'
      ]
    }
  ];
</script>

<section id="fleet" class="relative overflow-hidden bg-ink-900">
  <div class="absolute inset-0 -z-10">
    <img
      src="/hero.jpg"
      alt=""
      aria-hidden="true"
      class="h-full w-full object-cover opacity-20"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950"></div>
  </div>

  <div class="container-x relative py-28 sm:py-36">
    <div class="max-w-3xl">
      <div class="eyebrow mb-6" use:reveal>The Fleet</div>
      <h2
        class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
        use:reveal={{ delay: 100 }}
      >
        Two Pipers.<br />One cockpit philosophy.
      </h2>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 200 }}>
        A unified Piper fleet means fewer maintenance delays and training that transfers seamlessly between aircraft. You learn one cockpit, thoroughly.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {#each aircraft as a, i}
        <article
          class="group relative rounded-sm border border-white/[0.08] bg-gradient-to-b from-ink-900/70 to-ink-950 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:border-sky-400/35 sm:p-10"
          use:reveal={{ delay: 150 + i * 150 }}
        >
          <div class="flex items-start justify-between">
            <span class="kicker">Aircraft</span>
            <span class="text-[10px] font-semibold uppercase tracking-[0.22em] text-bone-200/45">
              Training
            </span>
          </div>

          <div class="mt-6">
            <div class="text-[10px] font-semibold uppercase tracking-[0.22em] text-bone-200/60">Tail Number</div>
            <div class="mt-2 break-all font-display text-4xl font-medium tracking-tight text-bone-50 sm:text-6xl">
              {a.tail}
            </div>
            <div class="mt-3 text-base text-bone-200/85">{a.model}</div>
          </div>

          <p class="mt-6 max-w-md text-sm leading-relaxed text-bone-200/75">
            {a.blurb}
          </p>

          <div class="mt-8 chart-rule"></div>
          <div class="pt-6">
            <div class="kicker">Avionics</div>
            <ul class="mt-3 space-y-2">
              {#each a.avionics as item}
                <li class="flex items-baseline gap-3 text-sm text-bone-100">
                  <span class="mt-[1px] h-1 w-1 shrink-0 rounded-full bg-sky-400/80"></span>
                  <span>{item}</span>
                </li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>

    <div
      class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"
      use:reveal={{ delay: 300 }}
    >
      <p class="text-sm text-bone-200/65">
        Ready to fly? Reserve an aircraft through our dispatch form.
      </p>
      <a
        href="https://forms.gle/4yXK1m6m4o7BcrZj8"
        target="_blank"
        rel="noopener"
        class="link-underline font-sans text-xs font-semibold tracking-widest text-sky-300"
      >
        OPEN DISPATCH FORM →
      </a>
    </div>
  </div>
</section>
