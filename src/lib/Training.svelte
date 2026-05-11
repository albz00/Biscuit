<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from './useReveal.js';

  /** `'none'` (default) | `'contact'` — training page uses contact. */
  export let endCta = 'none';

  const tracks = [
    {
      label: 'Start here',
      title: 'Private Pilot Certificate',
      blurb: 'Learn to fly safely in visual conditions, complete solo work, cross-country planning, and checkride prep.',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/013ebb49-b674-475c-3d5a-1cf8f4daa800/public',
      imageAlt: 'Example FAA private pilot certificate layout (sample fields).'
    },
    {
      label: 'Next rating',
      title: 'Instrument Rating',
      blurb: 'Build precision with IFR procedures, approaches, weather decisions, and cockpit workflow.',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/12841510-680b-467e-4660-60dcb5d5b200/public',
      imageAlt: 'Instrument panel view in flight.'
    },
    {
      label: 'Career step',
      title: 'Commercial Certificate',
      blurb: 'Refine aircraft control, judgment, and ACS standards for professional-level flying.',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/8fce0f42-92ee-4087-f86e-bfc9c17cb700/public',
      imageAlt: 'Pilot logbook, headset, chart, and flight log paperwork.'
    }
  ];
</script>

<section id="training" class="relative bg-ink-900 py-28 sm:py-36">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(61,147,227,0.08),transparent_55%)]"></div>

  <div class="container-x">
    <div class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
      <div class="max-w-2xl">
        <div class="eyebrow mb-6" use:reveal>Training</div>
        <h2
          class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 100 }}
        >
          Paths to your<br />next certificate.
        </h2>
      </div>
      <p class="max-w-md text-sm leading-relaxed text-bone-200/72 sm:text-base" use:reveal={{ delay: 200 }}>
        Private, instrument, and commercial training with recurring weekly scheduling.
      </p>
    </div>

    <div class="relative mx-auto mt-16 max-w-6xl border-y border-white/[0.07] py-12 sm:py-14">
      <div
        class="pointer-events-none absolute left-[16.66%] right-[16.66%] hidden h-px translate-y-6 bg-gradient-to-r from-transparent via-sky-300/35 to-transparent md:block"
        aria-hidden="true"
      ></div>
      <ol class="relative grid list-none gap-12 p-0 text-center md:grid-cols-3 md:gap-8">
        {#each tracks as track, i}
          <li class="group relative" use:reveal={{ delay: 150 + i * 100 }}>
            <div
              class="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/25 bg-ink-900 font-display text-xl font-light text-bone-50 shadow-[0_0_0_8px_rgba(20,38,66,0.95)] transition-colors duration-500 group-hover:border-sky-300/45"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <p class="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/75">
              {track.label}
            </p>
            <h3 class="font-display mt-3 text-2xl font-medium leading-tight tracking-tight text-bone-50 sm:text-3xl">
              {track.title}
            </h3>
            <p class="mx-auto mt-4 max-w-[18rem] text-sm leading-relaxed text-bone-200/70">
              {track.blurb}
            </p>

            {#if track.image}
              <figure class="mx-auto mt-7 w-full max-w-[18rem]">
                <div
                  class="overflow-hidden rounded-lg border border-white/[0.08] bg-ink-950/40 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04]"
                >
                  <img
                    src={track.image}
                    alt={track.imageAlt ?? ''}
                    width="560"
                    height="352"
                    class="block h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            {/if}
          </li>
        {/each}
      </ol>
    </div>

    <div class="mt-12 max-w-4xl border border-white/[0.05] bg-white/[0.03] p-6 text-sm leading-relaxed text-bone-200/75 btn-clip-sm sm:p-8" use:reveal={{ delay: 300 }}>
      Flight training may at first appear to be an intimidating and overwhelming endeavor. We see it as a grand
      journey with many different paths and options. For this reason, we offer free flight training consultations with
      a member of our staff. Every individual has unique life-dynamics, desires, and aspirations; therefore, there is
      no "one size fits all" solution, or path. We would be honored to be apart of your journey. We are happy to help
      anyone explore their first steps and plot your unique initial course. Feel free to call and stop in for more
      information on how we might help you start your journey! Please call first before you stop by - we are by design
      a small, intimate family to help keep focused on people just like you who are chasing their dreams!
    </div>
    <div class="mt-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8" use:reveal={{ delay: 340 }}>
      <a
        href="https://forms.gle/4yXK1m6m4o7BcrZj8"
        target="_blank"
        rel="noopener"
        class="inline-block link-underline font-sans text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
      >
        Open dispatch form
      </a>
      {#if endCta === 'contact'}
        <a
          href="/contact"
          use:link
          class="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-ink-950/35 px-4 py-2.5 text-sm font-medium text-bone-100/95 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:border-sky-400/35 hover:bg-ink-950/55 hover:text-bone-50"
        >
          Get in contact
        </a>
      {/if}
    </div>
  </div>
</section>
