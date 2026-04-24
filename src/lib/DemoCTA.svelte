<script>
  import { reveal } from './useReveal.js';
</script>

<section
  class="relative overflow-hidden bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 text-bone-50"
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
        <div
          class="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-mega text-bone-50/90"
          use:reveal
        >
          <span class="h-px w-8 bg-gradient-to-r from-bone-50/70 to-transparent"></span>
          Introductory flight
        </div>
        <h2
          class="mt-6 font-display text-4xl font-medium leading-[1] tracking-tight sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 100 }}
        >
          One-hour instructional<br />demo flight.
        </h2>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-bone-50/92 sm:text-lg" use:reveal={{ delay: 200 }}>
          See our operations, aircraft, and instructors, and get a feel for training at Manassas Regional Airport. Call to schedule a time to stop in and fly.
        </p>
      </div>

      <div class="lg:col-span-5" use:reveal={{ delay: 250 }}>
        <div
          class="btn-clip border border-white/30 bg-gradient-to-b from-white/25 to-white/5 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-sm"
        >
          <div class="text-[10px] font-semibold uppercase tracking-mega text-bone-50/80">Office</div>
          <a
            href="tel:5716573847"
            class="mt-3 block font-display text-[1.75rem] font-medium tabular-nums tracking-tight text-bone-50 transition-colors hover:text-sky-100 sm:text-5xl"
          >
            571 · 657 · 3847
          </a>
          <div class="mt-6 flex flex-wrap gap-2">
            <a
              href="tel:5716573847"
              class="btn-clip-sm bg-gradient-to-b from-ink-900 to-ink-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-bone-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-px"
            >
              Call
            </a>
            <a
              href="sms:5716573847"
              class="btn-clip-sm border border-white/50 bg-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-bone-50 transition-colors hover:bg-ink-950 hover:text-bone-50"
            >
              Text
            </a>
            <a
              href="mailto:elevation@elevationflight.com"
              class="btn-clip-sm border border-white/50 bg-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-bone-50 transition-colors hover:bg-ink-950 hover:text-bone-50"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
