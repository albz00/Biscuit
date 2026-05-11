<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from './useReveal.js';
  import GoogleReviewLink from './GoogleReviewLink.svelte';
</script>

<section
  class="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-ink-900 text-bone-50"
>
  <div
    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-white/10"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_100%,rgba(255,255,255,0.18),transparent_55%)]"
  ></div>

  <div class="container-x relative py-20 sm:py-28">
    <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <div class="text-[11px] font-semibold uppercase tracking-mega text-bone-50/90" use:reveal>
          Introductory flight
        </div>
        <h2
          class="mt-6 font-display text-4xl font-medium leading-[1] tracking-tight sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 100 }}
        >
          One hour instructional<br />demo flight.
        </h2>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-bone-50/92 sm:text-lg" use:reveal={{ delay: 200 }}>
          See our operations, aircraft, and instructors, and get a feel for training at
          <a href="/manassas-regional-airport-virginia" use:link class="link-underline text-bone-50 hover:text-sky-100">
            Manassas Regional Airport
          </a>.
          Please call us at 571-657-3847 to set up a time to stop in and fly.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-4" use:reveal={{ delay: 280 }}>
          <GoogleReviewLink variant="on-dark" />
          <p class="max-w-xs text-sm leading-relaxed text-bone-100/75">
            Trained with us? Share your experience on Google.
          </p>
        </div>
      </div>

      <div class="lg:col-span-5" use:reveal={{ delay: 250 }}>
        <div
          class="btn-clip border border-white/[0.09] bg-gradient-to-b from-white/25 to-white/5 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_24px_48px_-28px_rgba(0,0,0,0.45)] backdrop-blur-sm"
        >
          <div class="flex items-center justify-between gap-4">
            <div class="text-[10px] font-semibold uppercase tracking-mega text-bone-50/80">Office</div>
            <img
              src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1a329d48-8a89-41d6-f1c7-bd2374466d00/public"
              alt=""
              aria-hidden="true"
              width="40"
              height="40"
              class="h-8 w-8 shrink-0 object-contain icon-white sm:h-10 sm:w-10"
              loading="lazy"
              decoding="async"
            />
          </div>
          <a
            href="tel:5716573847"
            class="mt-3 block font-display text-[1.75rem] font-medium tabular-nums tracking-tight text-bone-50 transition-colors hover:text-sky-100 sm:text-5xl"
          >
            571-657-3847
          </a>
          <div class="mt-6 flex flex-wrap gap-2">
            <a
              href="tel:5716573847"
              class="btn-clip-sm border border-white/15 bg-gradient-to-b from-ink-900 to-ink-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-bone-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-px sm:py-3"
            >
              Call
            </a>
            <a
              href="sms:5716573847"
              class="btn-clip-sm border border-white/25 bg-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-bone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-colors hover:bg-ink-950 hover:text-bone-50 sm:py-3"
            >
              Text
            </a>
            <a
              href="mailto:elevation@elevationflight.com"
              class="btn-clip-sm border border-white/25 bg-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-bone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-colors hover:bg-ink-950 hover:text-bone-50 sm:py-3"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .icon-white {
    filter: brightness(0) invert(1);
  }
</style>
