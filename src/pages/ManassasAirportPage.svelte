<script>
  import { link } from '../lib/router.js';
  import DemoCTA from '../lib/DemoCTA.svelte';
  import { reveal } from '../lib/useReveal.js';

  const airportName = 'Manassas Regional Airport (HEF)';
  const airportAddress = 'Elevation Aviation, APP Jet Center, 9998 Wakeman Drive, Suite 204, Manassas, VA 20110';
  const mapsEmbedUrl =
    'https://www.google.com/maps?q=Elevation+Aviation+9998+Wakeman+Drive+Suite+204+Manassas+VA+20110&output=embed';
  const mapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Elevation+Aviation+9998+Wakeman+Drive+Suite+204+Manassas+VA+20110';
</script>

<svelte:head>
  <title>Manassas Regional Airport · Elevation Aviation</title>
  <meta
    name="description"
    content="Flight training at Manassas Regional Airport (HEF) in Northern Virginia—location, operations context, and how Elevation Aviation uses the airport for training."
  />
</svelte:head>

<section class="relative overflow-hidden bg-ink-950 pt-28 pb-24 sm:pt-36 sm:pb-32">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(61,147,227,0.18),transparent_42%)]"></div>
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(42,111,158,0.16),transparent_48%)]"></div>

  <div class="container-x relative">
    <a
      href="/"
      use:link
      class="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/80 transition-colors hover:text-sky-200"
      use:reveal
    >
      Back to home
    </a>

    <div class="mt-6 max-w-4xl">
      <p class="eyebrow mb-6" use:reveal={{ delay: 80 }}>Northern Virginia Flight Training Hub</p>
      <h1
        class="font-display text-4xl font-medium leading-[1.02] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
        use:reveal={{ delay: 140 }}
      >
        {airportName}<br />in Manassas, Virginia
      </h1>
      <p class="mt-6 max-w-3xl text-base leading-relaxed text-bone-200/85 sm:text-lg" use:reveal={{ delay: 220 }}>
        Elevation Aviation trains at Manassas Regional Airport in Northern Virginia. Students get regular exposure to
        real airport operations for private, instrument, and commercial training.
      </p>
      <p class="mt-5 max-w-3xl text-base leading-relaxed text-bone-200/78" use:reveal={{ delay: 280 }}>
        For visiting students and families, this page includes direct directions and airport details.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
      <article
        class="btn-clip border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 sm:p-8 lg:col-span-5"
        use:reveal={{ delay: 340 }}
      >
        <h2 class="font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">Airport Details</h2>
        <p class="mt-4 text-sm uppercase tracking-[0.14em] text-sky-300/80">Elevation Aviation Address</p>
        <p class="mt-1 text-base leading-relaxed text-bone-100/90">{airportAddress}</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-clip-sm border border-sky-700/45 bg-gradient-sky-btn px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-950 transition-transform hover:-translate-y-px"
          >
            Get Directions
          </a>
          <a
            href="https://flyhef.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-clip-sm border border-white/20 bg-white/[0.08] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-bone-50 transition-colors hover:bg-white/[0.15]"
          >
            Visit flyhef.com
          </a>
        </div>
        <p class="mt-6 text-sm leading-relaxed text-bone-200/75">
          For official airport operations, pilot resources, and tenant information, use the airport website.
        </p>
      </article>

      <div
        class="btn-clip overflow-hidden border border-white/10 bg-white/[0.04] shadow-[0_22px_55px_-35px_rgba(0,0,0,0.7)] lg:col-span-7"
        use:reveal={{ delay: 390 }}
      >
        <iframe
          title="Google Maps directions to Manassas Regional Airport"
          src={mapsEmbedUrl}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="h-[420px] w-full"
        ></iframe>
      </div>
    </div>
  </div>
</section>
<DemoCTA />
