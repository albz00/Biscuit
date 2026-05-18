<script>
  import { reveal } from './useReveal.js';
  import GoogleGIcon from './GoogleGIcon.svelte';

  const leaveReviewUrl = 'https://share.google/ZkXvK29oHBL8Ot2nI';

  const items = [
    {
      name: 'Jake Ascari',
      quote:
        'Great flight training you can go along at your own pace. Very knowledgeable instructors and staff.',
      reviewUrl: 'https://share.google/MSFh66smMO2ALPQMT'
    },
    {
      name: 'EBike Connections',
      quote: 'Excellent, patient and knowledgeable Flight Instructors.',
      reviewUrl: 'https://share.google/UYRVgUxo06xLbhhnp'
    },
    {
      name: 'Ben Newbold',
      quote:
        'The instructors are incredibly knowledgeable and truly invested in their students\' success. One of the best parts about training here is how they structure a dedicated block with a specific plane reserved for each student, which makes a huge difference in consistency and overall learning quality. Compared to other programs, the organization and professionalism at Elevation set them apart. Highly recommend for anyone serious about flight training!',
      reviewUrl: 'https://share.google/kCNRbA4ydYKa5vlHj'
    }
  ];
</script>

<section
  id="testimonials"
  class="relative overflow-hidden border-y border-ink-900/[0.08] bg-gradient-to-b from-bone-50 via-white to-bone-50 py-28 text-ink-900 sm:py-36"
>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_10%_0%,rgba(61,147,227,0.10),transparent_55%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_100%_100%,rgba(27,103,159,0.06),transparent_55%)]"
  ></div>

  <div class="container-x relative">
    <div class="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
      <div class="max-w-2xl">
        <div class="eyebrow text-sky-700/85" use:reveal>Google reviews</div>
        <h2
          class="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 90 }}
        >
          What students are<br />
          <span
            class="bg-gradient-to-br from-ink-900 via-ink-700 to-sky-700 bg-clip-text text-transparent"
          >
            saying
          </span>
        </h2>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-600" use:reveal={{ delay: 170 }}>
          Real feedback from Google. Tap a name to open the full review.
        </p>
      </div>
      <div class="shrink-0" use:reveal={{ delay: 200 }}>
        <a
          href={leaveReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="group btn-clip-sm inline-flex items-center gap-3 border border-ink-900/10 bg-white px-5 py-3 text-sm font-semibold text-ink-800 shadow-[0_16px_40px_-24px_rgba(7,14,28,0.35)] transition-all hover:border-sky-500/35 hover:bg-sky-50/80"
        >
          <GoogleGIcon size={24} title="Google" />
          <span>Leave us a review</span>
        </a>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
      {#each items as t, i}
        <article
          class="btn-clip flex h-full flex-col border border-ink-900/[0.07] bg-gradient-to-b from-white to-bone-50/95 p-7 shadow-[0_24px_48px_-28px_rgba(7,14,28,0.18)] sm:p-8"
          use:reveal={{ delay: 140 + i * 90 }}
        >
          <header class="flex gap-4">
            <svg
              class="h-12 w-12 shrink-0 text-ink-300"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="24" cy="16" r="9" stroke="currentColor" stroke-width="1.75" />
              <path
                d="M12 41c0-6.6 5.4-12 12-12s12 5.4 12 12"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
              />
            </svg>
            <div class="min-w-0 flex-1">
              <a
                href={t.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="font-display text-lg font-medium text-ink-900 transition-colors hover:text-sky-700"
              >
                {t.name}
              </a>
              <div class="mt-1.5 flex gap-0.5 text-amber-500" aria-label="5 out of 5 stars">
                {#each [1, 2, 3, 4, 5] as _}
                  <span aria-hidden="true">★</span>
                {/each}
              </div>
            </div>
          </header>
          <blockquote class="mt-5 flex-1 text-base leading-relaxed text-ink-800">
            <p>“{t.quote}”</p>
          </blockquote>
          <footer class="mt-8 border-t border-ink-900/[0.06] pt-6">
            <p class="text-xs text-ink-500">Verified on Google</p>
          </footer>
        </article>
      {/each}
    </div>
  </div>
</section>
