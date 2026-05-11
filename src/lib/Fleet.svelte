<script>
  import { reveal } from './useReveal.js';

  const aircraft = [
    {
      tail: 'N5295S',
      model: '1971 Piper Cherokee 140',
      blurb:
        'This is our 1971 Piper Cherokee 140, equipped with Dual Garmin G5 flight displays and a touch screen Garmin GPS 175.',
      avionics: ['Dual Garmin G5 flight displays', 'Touch screen Garmin GPS 175']
    },
    {
      tail: 'N8460Y',
      model: 'Piper Archer 181',
      blurb:
        'N8460Y is our Piper Archer 181, equipped with Dual Garmin G5 flight displays, touch screen Garmin GTN650xi, GFC500 autopilot and JPI EDM-830 engine instrument readout.',
      avionics: [
        'Dual Garmin G5 flight displays',
        'Touch screen Garmin GTN650xi',
        'GFC500 autopilot',
        'JPI EDM-830 engine instrument readout'
      ]
    }
  ];
</script>

<section id="fleet" class="relative overflow-hidden bg-ink-900">
  <div class="absolute inset-0 -z-10">
    <img
      src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/18b1c0a1-bca4-4fad-cc33-60e0d4915400/public"
      alt=""
      aria-hidden="true"
      class="h-full w-full object-cover opacity-20"
      loading="lazy"
      fetchpriority="low"
      decoding="async"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950"></div>
  </div>

  <div class="container-x relative py-28 sm:py-36">
    <div class="max-w-3xl">
      <div class="eyebrow mb-6" use:reveal>Aircraft</div>
      <h2
        class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
        use:reveal={{ delay: 100 }}
      >
        Training aircraft<br />at Elevation Aviation.
      </h2>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 200 }}>
        We operate a unified PA-28 fleet.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {#each aircraft as a, i}
        <article
          class="group relative btn-clip border border-white/[0.055] bg-gradient-to-b from-ink-900/70 to-ink-950 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-500 sm:p-10"
          use:reveal={{ delay: 150 + i * 150 }}
        >
          <div class="flex items-start justify-between">
            <span class="kicker">Tail Number</span>
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
      class="mt-12 flex flex-wrap items-center justify-between gap-4 border border-white/[0.04] bg-white/[0.03] px-4 py-8 btn-clip-sm"
      use:reveal={{ delay: 300 }}
    >
      <p class="text-sm text-bone-200/65">Reserve an aircraft through our dispatch form.</p>
      <a
        href="https://forms.gle/4yXK1m6m4o7BcrZj8"
        target="_blank"
        rel="noopener"
        class="link-underline font-sans text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
      >
        Open dispatch form
      </a>
    </div>
  </div>
</section>
