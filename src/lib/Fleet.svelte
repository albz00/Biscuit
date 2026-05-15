<script>
  import { link } from './router.js';
  import { reveal } from './useReveal.js';

  const aircraft = [
    {
      id: 'n5295s',
      tail: 'N5295S',
      model: '1971 Piper Cherokee 140',
      blurb:
        'This is our 1971 Piper Cherokee 140, equipped with Dual Garmin G5 flight displays and a touch screen Garmin GPS 175.',
      images: [
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/6de8fa42-06a9-4a60-1f29-fed7e9a40d00/public',
          alt: 'N5295S Piper Cherokee parked on the ramp.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/43627cf3-5e90-4489-8847-8c368f353f00/public',
          alt: 'N5295S cockpit and instrument panel.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/931cdd2a-8c5a-4db3-fdc3-457c27e20200/public',
          alt: 'Piper Cherokee on the ramp at Manassas.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/43686acf-ac4e-4877-365d-6ac8ca22fa00/public',
          alt: 'N5295S Piper Cherokee taxiing at the airport.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f969c332-edab-437a-65e5-b9e9eb152f00/public',
          alt: 'Student milestone in front of the N5295S training aircraft.'
        }
      ],
      avionics: ['Dual Garmin G5 flight displays', 'Touch screen Garmin GPS 175']
    },
    {
      id: 'n8460y',
      tail: 'N8460Y',
      model: 'Piper Archer 181',
      blurb:
        'N8460Y is our Piper Archer 181, equipped with Dual Garmin G5 flight displays, touch screen Garmin GTN650xi, GFC500 autopilot and JPI EDM-830 engine instrument readout.',
      images: [
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/0865ed7c-1e8a-4a2e-74ae-948bbce38600/public',
          alt: 'N8460Y Piper Archer parked on the ramp.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/12841510-680b-467e-4660-60dcb5d5b200/public',
          alt: 'N8460Y cockpit view in flight.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/bc23448b-c5ab-496c-f3bc-fac0ba9dce00/public',
          alt: 'Elevation Aviation Piper Archer in flight above the clouds.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ce70ce60-eb27-46ee-0a58-485113a04f00/public',
          alt: 'Training aircraft on the ramp at sunset.'
        },
        {
          src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ba1aba2b-464a-4580-2db3-7f15fedb9d00/public',
          alt: 'Instructor and student on the ramp with the Archer.'
        }
      ],
      avionics: [
        'Dual Garmin G5 flight displays',
        'Touch screen Garmin GTN650xi',
        'GFC500 autopilot',
        'JPI EDM-830 engine instrument readout'
      ]
    }
  ];

  let selectedImages = aircraft.map(() => 0);

  function selectImage(aircraftIndex, imageIndex) {
    const len = aircraft[aircraftIndex].images.length;
    selectedImages[aircraftIndex] = ((imageIndex % len) + len) % len;
    selectedImages = [...selectedImages];
  }

  function stepImage(aircraftIndex, delta) {
    selectImage(aircraftIndex, selectedImages[aircraftIndex] + delta);
  }

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
    <a
      href="/"
      use:link
      class="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/80 transition-colors hover:text-sky-200"
      use:reveal
    >
      Back to home
    </a>

    <div class="mt-6 max-w-3xl">
      <div class="eyebrow mb-6" use:reveal>Aircraft</div>
      <h2
        class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
        use:reveal={{ delay: 100 }}
      >
        Training aircraft<br />at Elevation Aviation.
      </h2>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 200 }}>
        We operate a PA-28 fleet with consistent handling, checklist flow, and training procedures.
      </p>
      <div class="mt-8 flex flex-wrap gap-3" use:reveal={{ delay: 260 }}>
        {#each aircraft as a}
          <a
            href={`/fleet#${a.id}`}
            use:link
            class="btn-clip-xs border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-100 transition hover:border-sky-400/40 hover:text-sky-300"
          >
            {a.tail}
          </a>
        {/each}
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {#each aircraft as a, i}
        <article
          id={a.id}
          class="group relative btn-clip border border-white/[0.055] bg-gradient-to-b from-ink-900/70 to-ink-950 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-500 sm:p-10"
          use:reveal={{ delay: 150 + i * 150 }}
        >
          <div class="text-[10px] font-semibold uppercase tracking-[0.22em] text-bone-200/60">Tail Number</div>
          <div class="mt-2 break-all font-display text-4xl font-medium tracking-tight text-bone-50 sm:text-6xl">
            {a.tail}
          </div>
          <div class="mt-3 text-base text-bone-200/85">{a.model}</div>

          <div class="mt-8">
            <div class="relative">
              <div
                class="overflow-hidden rounded-lg border border-white/[0.08] bg-ink-950/60 shadow-[0_24px_48px_-30px_rgba(0,0,0,0.65)]"
              >
                <img
                  src={a.images[selectedImages[i]].src}
                  alt={a.images[selectedImages[i]].alt}
                  width="900"
                  height="506"
                  class="aspect-video w-full object-cover transition-opacity duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {#if a.images.length > 1}
                <button
                  type="button"
                  class="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950/80 text-bone-50 shadow-lg backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-ink-900/90 sm:left-3"
                  aria-label={`Previous photo of ${a.tail}`}
                  on:click={() => stepImage(i, -1)}
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950/80 text-bone-50 shadow-lg backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-ink-900/90 sm:right-3"
                  aria-label={`Next photo of ${a.tail}`}
                  on:click={() => stepImage(i, 1)}
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              {/if}
            </div>

            <div class="mt-3 flex justify-center gap-2">
              {#each a.images as image, imageIndex}
                <button
                  type="button"
                  class={`h-2.5 w-2.5 rounded-full border transition-colors ${
                    selectedImages[i] === imageIndex
                      ? 'border-sky-300 bg-sky-300'
                      : 'border-white/25 bg-white/10 hover:border-sky-300/70'
                  }`}
                  aria-label={`Show ${a.tail} image ${imageIndex + 1}`}
                  aria-pressed={selectedImages[i] === imageIndex}
                  on:click={() => selectImage(i, imageIndex)}
                ></button>
              {/each}
            </div>
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

    <div class="mt-20 border-t border-white/[0.06] pt-16" use:reveal={{ delay: 200 }}>
      <h3 class="font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">More from the fleet</h3>
      <p class="mt-3 max-w-2xl text-sm leading-relaxed text-bone-200/70">
        Additional angles of our training aircraft on the ramp and in the air.
      </p>

      <div class="mt-12 grid gap-12 lg:grid-cols-2">
        {#each aircraft as a, i}
          <div use:reveal={{ delay: 120 + i * 80 }}>
            <p class="text-[10px] font-semibold uppercase tracking-[0.22em] text-bone-200/55">Gallery</p>
            <p class="mt-2 font-display text-xl font-medium text-bone-50">{a.tail}</p>
            <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {#each a.images as img, j}
                <button
                  type="button"
                  class="overflow-hidden rounded-md border border-white/[0.08] bg-ink-950/50 ring-1 ring-white/[0.04] transition hover:border-sky-400/35"
                  aria-label={`View ${a.tail} photo ${j + 1} in carousel above`}
                  on:click={() => selectImage(i, j)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width="400"
                    height="225"
                    class="aspect-video h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
