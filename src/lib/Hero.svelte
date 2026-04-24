<script>
  import { reveal } from './useReveal.js';
</script>

<section id="top" class="relative isolate min-h-[100svh] overflow-x-clip lg:min-h-screen">
  <div class="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="/hero.jpg"
        alt="Elevation Aviation aircraft in flight"
        class="h-full w-full object-cover"
        loading="eager"
      />
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-900/52 to-ink-950/92"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/45 to-transparent"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-tr from-sky-500/8 via-transparent to-sky-300/6"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_30%,rgba(95,168,230,0.1),transparent_60%)]"
    ></div>
    <div class="grain"></div>
  </div>

  <div class="container-x relative flex min-h-[100svh] flex-col justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:min-h-screen lg:pb-20">
    <div
      class="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-16"
    >
      <div class="max-w-5xl lg:col-span-7">
        <div
          class="eyebrow mb-8 text-sky-200 drop-shadow-[0_1px_8px_rgba(7,14,28,0.85)]"
          use:reveal
        >
          Manassas Regional Airport, Virginia
        </div>

        <h1
          class="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-bone-50 drop-shadow-[0_2px_24px_rgba(7,14,28,0.45),0_1px_2px_rgba(7,14,28,0.5)] sm:text-7xl sm:leading-[0.98] lg:text-[7.5rem]"
          use:reveal={{ delay: 100 }}
        >
          Helping pilots<br class="hidden sm:inline" />
          achieve their<br class="hidden sm:inline" />
          aviation goals.
        </h1>

        <p
          class="mt-8 max-w-xl text-base font-normal leading-relaxed text-bone-100/95 sm:mt-10 sm:text-lg drop-shadow-[0_1px_12px_rgba(7,14,28,0.5)]"
          use:reveal={{ delay: 250 }}
        >
          Personalized flight training at Manassas Regional Airport. Weekly recurring lessons, a unified Piper fleet, and billing that happens after you fly, not before.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4" use:reveal={{ delay: 400 }}>
          <a href="#contact" class="btn-primary">
            <span>Schedule a Demo Flight</span>
            <span aria-hidden="true" class="opacity-90">→</span>
          </a>
          <a href="#program" class="btn-ghost">Explore the Program</a>
          <a
            href="tel:5716573847"
            class="ml-2 hidden text-sm font-medium tabular-nums tracking-wide text-bone-100/90 drop-shadow-[0_1px_6px_rgba(7,14,28,0.6)] hover:text-sky-200 md:inline"
          >
            or call · 571 657 3847
          </a>
        </div>
      </div>

      <div
        class="w-full min-w-0 max-w-[14rem] sm:max-w-xs max-lg:mx-auto lg:max-w-none lg:col-span-5"
        use:reveal={{ delay: 200 }}
      >
        <div
          class="hero-logo-dock relative z-0 mx-auto flex w-full min-w-0 max-w-xs items-center justify-center overflow-visible lg:max-w-sm lg:justify-end"
        >
          <svg
            class="hero-flight-routes pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[min(132%,26rem)] max-w-[min(98vw,26rem)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
            viewBox="-118 -118 236 236"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g
              class="r1"
              transform="rotate(-20)"
            >
              <circle
                cx="0"
                cy="0"
                r="100"
                class="ring-stroke"
                pathLength="100"
                stroke-dasharray="0.5 8.5"
                stroke-linecap="round"
              />
            </g>
            <g
              class="r2"
              transform="rotate(128)"
            >
              <circle
                cx="0"
                cy="0"
                r="115"
                class="ring-stroke"
                pathLength="100"
                stroke-dasharray="0.45 7.2"
                stroke-linecap="round"
              />
            </g>
          </svg>

          <a
            href="#top"
            class="hero-logo-halo group relative z-10 block w-full"
            aria-label="Elevation Aviation — top of page"
          >
            <img
              src="/logo.png"
              alt=""
              class="hero-logo-img h-auto w-full max-h-40 object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:max-h-48 lg:max-h-56"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Glow on the <a> so drop-shadow is not eaten by the img’s own filter. */
  .hero-logo-halo {
    -webkit-tap-highlight-color: transparent;
    filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))
      drop-shadow(0 0 14px rgba(255, 255, 255, 0.12));
  }

  .hero-logo-img {
    display: block;
    filter: brightness(0) invert(1);
  }

  .ring-stroke {
    fill: none;
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 0.75;
    vector-effect: non-scaling-stroke;
  }

  .r1 .ring-stroke {
    animation: route-tick 16s linear infinite;
  }
  .r2 .ring-stroke {
    animation: route-tick 20s linear reverse infinite;
    animation-delay: -5s;
  }

  @keyframes route-tick {
    to {
      stroke-dashoffset: -100;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .r1 .ring-stroke,
    .r2 .ring-stroke {
      animation: none;
    }
  }
</style>
