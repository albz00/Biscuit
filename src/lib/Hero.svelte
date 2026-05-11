<script>
  import { onDestroy, onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import { reveal } from './useReveal.js';
  import GoogleReviewLink from './GoogleReviewLink.svelte';

  const heroBackgrounds = [
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/18b1c0a1-bca4-4fad-cc33-60e0d4915400/public',
      alt: 'Flight training view from the cockpit over northern Virginia',
    },
    {
      src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/bc23448b-c5ab-496c-f3bc-fac0ba9dce00/public',
      alt: 'Elevation Aviation training aircraft in flight above the clouds',
    },
  ];

  const ROTATE_MS = 9000;

  /** @type {0 | 1} */
  let activeBg = 0;
  /** @type {ReturnType<typeof setInterval> | undefined} */
  let rotateTimer;

  onMount(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    rotateTimer = setInterval(() => {
      activeBg = activeBg === 0 ? 1 : 0;
    }, ROTATE_MS);
  });

  onDestroy(() => {
    if (rotateTimer) clearInterval(rotateTimer);
  });
</script>

<section id="top" class="relative isolate min-h-[100svh] overflow-x-clip lg:min-h-screen">
  <div class="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
    <div class="absolute inset-0">
      {#each heroBackgrounds as bg, i}
        <img
          src={bg.src}
          alt={bg.alt}
          class="hero-bg-img h-full w-full object-cover motion-safe:transition-opacity motion-safe:duration-[1.4s] motion-safe:ease-in-out"
          class:hero-bg-img--active={activeBg === i}
          loading={i === 0 ? 'eager' : 'eager'}
          fetchpriority={i === 0 ? 'high' : 'low'}
          decoding="async"
        />
      {/each}
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-900/52 to-ink-950/92"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/45 to-transparent"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-tr from-sky-500/[0.08] via-transparent to-sky-300/[0.06]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_30%,rgba(176,217,245,0.10),transparent_60%)]"
    ></div>
    <div class="grain"></div>
  </div>

  <div class="container-x relative flex min-h-[100svh] flex-col justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:min-h-screen lg:pb-20">
    <div
      class="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-16"
    >
      <div class="max-w-5xl lg:col-span-7">
        <a
          href="/manassas-regional-airport-virginia"
          use:link
          class="eyebrow mb-8 inline-flex text-sky-200 drop-shadow-[0_1px_8px_rgba(7,14,28,0.85)] transition-colors hover:text-sky-100"
          use:reveal
        >
          Manassas Regional Airport, Virginia
        </a>

        <h1
          class="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-bone-50 drop-shadow-[0_2px_24px_rgba(7,14,28,0.45),0_1px_2px_rgba(7,14,28,0.5)] sm:text-7xl sm:leading-[0.98] lg:text-[7.5rem]"
          use:reveal={{ delay: 100 }}
        >
          helping pilots<br class="hidden sm:inline" />
          achieve their<br class="hidden sm:inline" />
          aviation goals
        </h1>

        <p
          class="mt-8 max-w-xl text-base font-normal leading-relaxed text-bone-100/95 sm:mt-10 sm:text-lg drop-shadow-[0_1px_12px_rgba(7,14,28,0.5)]"
          use:reveal={{ delay: 250 }}
        >
          Personalized, student-forward flight training services at
          <a href="/manassas-regional-airport-virginia" use:link class="link-underline text-sky-200 hover:text-sky-100">
            Manassas Regional Airport
          </a>
          with consistent instruction, clear scheduling, and a path built around your goals.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4" use:reveal={{ delay: 400 }}>
          <a href="/contact" use:link class="btn-primary">Schedule a demo flight</a>
          <a href="/training" use:link class="btn-ghost">View training tracks</a>
          <a
            href="tel:5716573847"
            class="ml-2 hidden text-sm font-medium tabular-nums tracking-wide text-bone-100/90 drop-shadow-[0_1px_6px_rgba(7,14,28,0.6)] hover:text-sky-300 md:inline"
          >
            please call 571-657-3847
          </a>
        </div>
        <div class="mt-5 flex flex-wrap items-center gap-3" use:reveal={{ delay: 480 }}>
          <GoogleReviewLink variant="on-dark" />
        </div>
      </div>

      <div
        class="w-full min-w-0 max-w-[14rem] sm:max-w-xs max-lg:mx-auto lg:max-w-none lg:col-span-5"
        use:reveal={{ delay: 200 }}
      >
        <div
          class="hero-logo-dock relative z-0 mx-auto flex w-full min-w-0 max-w-xs items-center justify-center lg:max-w-sm lg:justify-end"
        >
          <a
            href="/"
            use:link
            class="hero-logo-link relative z-10 block w-full"
            aria-label="Elevation Aviation home"
          >
            <img
              src="/logo.png"
              alt=""
              class="hero-logo-img h-auto w-full max-h-40 object-contain sm:max-h-48 lg:max-h-56"
              aria-hidden="true"
              fetchpriority="high"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-bg-img {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  .hero-bg-img--active {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-bg-img:first-child {
      opacity: 1;
    }

    .hero-bg-img:not(:first-child) {
      display: none;
    }
  }

  .hero-logo-link {
    -webkit-tap-highlight-color: transparent;
  }

  .hero-logo-img {
    display: block;
    filter: brightness(0) invert(1);
  }
</style>
