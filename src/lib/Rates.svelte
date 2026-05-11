<script>
  import { reveal } from './useReveal.js';
</script>

<section
  id="rates"
  class="relative overflow-hidden bg-gradient-to-b from-bone-50 via-bone-100 to-bone-50 py-28 text-ink-900 sm:py-36"
>
  <div
    class="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.52]"
    style="background-image: url('https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cffa5942-19d2-419c-1f7e-a0a22adcd900/public');"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgba(61,147,227,0.10),transparent_55%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(27,103,159,0.08),transparent_55%)]"
  ></div>

  <div class="container-x relative z-10">
    <div class="max-w-3xl">
      <div class="eyebrow text-sky-700/85" use:reveal>Rates</div>
      <h2
        class="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl"
        use:reveal={{ delay: 100 }}
      >
        Straightforward pricing.
      </h2>
      <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-700" use:reveal={{ delay: 200 }}>
        You are charged for Hobbs time on the aircraft and instruction time on the ground and in the air. No upfront deposits.
      </p>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" use:reveal={{ delay: 250 }}>
      <div
        class="btn-clip relative overflow-hidden border border-ink-900/[0.07] bg-gradient-to-b from-white to-bone-100 p-8 shadow-[0_20px_40px_-24px_rgba(7,14,28,0.22)] sm:p-10"
      >
        <div
          class="pointer-events-none absolute inset-0 bg-cover bg-right-bottom bg-no-repeat opacity-[0.44]"
          style="background-image: url('https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/75030cef-4815-4ca4-28af-bf3942ea5400/public');"
          aria-hidden="true"
        ></div>
        <div class="relative z-10">
          <div class="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700/85">Aircraft</div>
          <div class="mt-4 flex items-start justify-between gap-5">
            <div class="min-w-0 flex-1">
              <div class="font-display text-2xl font-medium text-ink-900">Piper PA-28</div>
              <div class="mt-4 flex items-baseline gap-2">
                <span
                  class="bg-gradient-to-br from-ink-900 via-ink-700 to-sky-700 bg-clip-text font-display text-5xl font-medium tabular-nums text-transparent sm:text-6xl"
                >
                  $190
                </span>
                <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-700">/ hr</span>
              </div>
              <div class="mt-2 text-sm text-ink-700">per Hobbs hour, wet (fuel included)</div>
            </div>
            <img
              src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/bbb3c87e-5eeb-48b5-39f2-8f9823057500/public"
              alt=""
              width="280"
              height="160"
              class="h-32 w-auto max-w-[min(100%,12rem)] shrink-0 object-contain sm:h-40 sm:max-w-[min(100%,15rem)]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
      <div
        class="btn-clip relative overflow-hidden border border-ink-900/[0.07] bg-gradient-to-b from-white to-bone-100 p-8 shadow-[0_20px_40px_-24px_rgba(7,14,28,0.22)] sm:p-10"
      >
        <div
          class="pointer-events-none absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-[0.44]"
          style="background-image: url('https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9ba14484-d8b4-4be2-9c47-4dc8a8d88800/public');"
          aria-hidden="true"
        ></div>
        <div class="relative z-10">
          <div class="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700/85">Instruction</div>
          <div class="mt-4 flex items-start justify-between gap-5">
            <div class="min-w-0 flex-1">
              <div class="font-display text-2xl font-medium text-ink-900">CFI time</div>
              <div class="mt-4 flex items-baseline gap-2">
                <span
                  class="bg-gradient-to-br from-ink-900 via-ink-700 to-sky-700 bg-clip-text font-display text-5xl font-medium tabular-nums text-transparent sm:text-6xl"
                >
                  $80
                </span>
                <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-700">/ hr</span>
              </div>
              <div class="mt-2 text-sm text-ink-700">per hour</div>
            </div>
            <img
              src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/3c9d2dad-6e15-4582-1cd9-ba4ed4f6ef00/public"
              alt=""
              width="160"
              height="160"
              class="h-32 w-32 shrink-0 object-contain sm:h-40 sm:w-40"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-12 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-700"
      use:reveal={{ delay: 300 }}
    >
      <p>
        After each lesson we invoice through our scheduling software. Pay with an e-check (no fee) or a credit card (2.5% processing fee).
      </p>
      <p>
        Prefer monthly payments? Financing is available through
        <a
          href="https://www.flighttrainingfinancellc.com"
          target="_blank"
          rel="noopener"
          class="link-underline-dark font-medium text-sky-700"
        >Flight Training Finance</a>.
        Visit their site for details and application information.
      </p>
    </div>
  </div>
</section>
