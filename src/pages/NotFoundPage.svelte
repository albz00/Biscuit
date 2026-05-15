<script>
  import { link } from '../lib/router.js';
  import { reveal } from '../lib/useReveal.js';
</script>

<svelte:head>
  <title>Page not found · Elevation Aviation</title>
  <meta
    name="description"
    content="We could not find that page. Return to Elevation Aviation for flight training at Manassas Regional Airport."
  />
</svelte:head>

<section class="relative overflow-hidden bg-ink-950 py-28 sm:py-36">
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(61,147,227,0.14),transparent_50%)]"
  ></div>
  <div class="container-x relative text-center">
    <p class="eyebrow mb-6 justify-center" use:reveal>Error 404</p>
    <h1
      class="font-display text-4xl font-medium tracking-tight text-bone-50 sm:text-5xl"
      use:reveal={{ delay: 80 }}
    >
      This page is not on our chart.
    </h1>
    <p class="mx-auto mt-6 max-w-md text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 160 }}>
      The link may be outdated or the address was mistyped. Try the home page or contact the office for help.
    </p>
    <div class="mt-10 flex flex-wrap items-center justify-center gap-4" use:reveal={{ delay: 220 }}>
      <a href="/" use:link class="btn-primary">Back to home</a>
      <a href="/contact" use:link class="btn-ghost">Contact</a>
    </div>
  </div>
</section>
