<script>
  import Philosophy from '../lib/Philosophy.svelte';
  import FAQ from '../lib/FAQ.svelte';
  import { reveal } from '../lib/useReveal.js';

  const galleryImages = [
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/18b1c0a1-bca4-4fad-cc33-60e0d4915400/public',
      alt: 'Cockpit view during flight training'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/bc23448b-c5ab-496c-f3bc-fac0ba9dce00/public',
      alt: 'Elevation Aviation training aircraft in flight above the clouds'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/6de8fa42-06a9-4a60-1f29-fed7e9a40d00/public',
      alt: 'N5295S Piper Cherokee parked on the ramp'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/43627cf3-5e90-4489-8847-8c368f353f00/public',
      alt: 'N5295S cockpit and instrument panel'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/0865ed7c-1e8a-4a2e-74ae-948bbce38600/public',
      alt: 'N8460Y Piper Archer parked on the ramp'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/12841510-680b-467e-4660-60dcb5d5b200/public',
      alt: 'N8460Y cockpit view in flight'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/8fce0f42-92ee-4087-f86e-bfc9c17cb700/public',
      alt: 'Pilot logbook, headset, chart, and flight log paperwork'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/051dca37-74aa-41c4-0b5c-ebbf485f6000/public',
      alt: 'Ian Tracey, flight instructor'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a7faed74-a2b3-4dd7-8348-8407a9752300/public',
      alt: 'Erich Deitsch, flight instructor'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1b4551ab-d14c-43e2-58e0-1b1948db3b00/public',
      alt: 'Keith Teister, flight instructor'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9e190b60-6d7d-4e98-753b-bf7d76682f00/public',
      alt: 'Alexander England, flight instructor'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/e0516ec9-3286-4b3b-2795-900e2a355500/public',
      alt: 'Mitchell Finn, flight instructor'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/851fe212-314f-4f22-7811-9233ed37e600/public',
      alt: 'Mike Esti, flight instructor'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a10c23f3-1536-49e8-d344-9ae82dd60800/public',
      alt: 'Amanda Behrens, flight instructor'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f969c332-edab-437a-65e5-b9e9eb152f00/public',
      alt: 'Instructor and student celebrating a milestone in front of the training aircraft'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/931cdd2a-8c5a-4db3-fdc3-457c27e20200/public',
      alt: 'Pilot preparing for departure in a Piper Cherokee on the ramp'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ce70ce60-eb27-46ee-0a58-485113a04f00/public',
      alt: 'Elevation Aviation aircraft on the ramp at sunset'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ba1aba2b-464a-4580-2db3-7f15fedb9d00/public',
      alt: 'Instructor and student on the ramp ready to fly'
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/43686acf-ac4e-4877-365d-6ac8ca22fa00/public',
      alt: 'N5295S Piper Cherokee taxiing at the airport'
    }
  ];
</script>

<svelte:head>
  <title>About · Elevation Aviation</title>
  <meta
    name="description"
    content="Our student-forward approach to flight training at Manassas Regional Airport—mentorship, clear expectations, and paths for every certificate."
  />
</svelte:head>

<div class="relative">
  <!-- Dark cap: fades over exactly py-28/py-36 so the nav area is dark and page text starts on light background -->
  <div
    class="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-ink-950 to-transparent sm:h-36"
  ></div>
  <Philosophy />
</div>

<section class="relative overflow-hidden bg-bone-50 py-24 text-ink-900 sm:py-32">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_85%_0%,rgba(61,147,227,0.10),transparent_58%)]"></div>
  <div class="container-x relative">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
      <div class="max-w-2xl lg:col-span-5">
        <div class="eyebrow text-sky-700/85" use:reveal>Experience</div>
        <h2
          class="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl"
          use:reveal={{ delay: 80 }}
        >
          Broad aviation experience behind every lesson.
        </h2>
      </div>
      <div
        class="btn-clip border border-ink-900/[0.08] bg-white/80 p-6 shadow-[0_22px_54px_-36px_rgba(7,14,28,0.28)] sm:p-8 lg:col-span-7"
        use:reveal={{ delay: 150 }}
      >
        <p class="text-base leading-relaxed text-ink-700 sm:text-lg">
          Elevation Aviation is built on a strong general aviation background, not a narrow one-size-fits-all training
          track. That experience shapes how we brief, teach, schedule, and help students make practical decisions in
          and around the airplane.
        </p>
        <p class="mt-5 text-sm leading-relaxed text-ink-600 sm:text-base">
          Our instructional approach draws from broad instructional and operational experience, giving students a
          grounded perspective on real-world flying, aircraft care, airport operations, and the habits that support
          safe, confident pilot development.
        </p>
      </div>
    </div>
  </div>
</section>

<section
  class="relative overflow-hidden bg-ink-950 py-28 text-bone-50 sm:py-36"
  aria-labelledby="about-gallery-title"
>
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_15%_0%,rgba(61,147,227,0.16),transparent_60%)]"></div>
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_100%_100%,rgba(176,217,245,0.08),transparent_58%)]"></div>

  <div class="container-x relative">
    <div class="max-w-3xl">
      <div class="eyebrow text-sky-300/85" use:reveal>Gallery</div>
      <h2
        id="about-gallery-title"
        class="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
        use:reveal={{ delay: 80 }}
      >
        A look inside<br />Elevation Aviation.
      </h2>
      <p class="mt-6 max-w-xl text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 160 }}>
        A glimpse into life at Elevation Aviation: our aircraft, our team, and the moments that make flight training unforgettable.
      </p>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each galleryImages as image, i}
        <div
          class="group btn-clip relative overflow-hidden border border-white/[0.07] bg-white/[0.04] shadow-[0_24px_54px_-34px_rgba(0,0,0,0.72)]"
          use:reveal={{ delay: 90 + (i % 6) * 55 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            class="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        </div>
      {/each}
    </div>
  </div>
</section>
<FAQ />
