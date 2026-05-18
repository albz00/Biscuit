<script>
  import { link } from './router.js';
  import { reveal } from './useReveal.js';

  /** @type {string} */
  export let title;
  /** @type {string} */
  export let subtitle;
  /** @type {string} */
  export let effectiveDate;
  /** @type {{ id: string; heading: string; paragraphs: string[] }[]} */
  export let sections = [];
</script>

<section class="relative bg-ink-900 pt-28 pb-24 sm:pt-36 sm:pb-32">
  <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-page"></div>
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(61,147,227,0.16),transparent_55%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_100%_100%,rgba(42,111,158,0.14),transparent_50%)]"
  ></div>

  <div class="container-x relative">
    <a
      href="/"
      use:link
      class="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/80 transition-colors hover:text-sky-200"
      use:reveal
    >
      Back to home
    </a>

    <div class="mt-6 max-w-3xl">
      <p class="eyebrow mb-6" use:reveal={{ delay: 80 }}>Legal</p>
      <h1
        class="font-display text-4xl font-medium leading-[1.02] tracking-tight text-bone-50 sm:text-5xl"
        use:reveal={{ delay: 140 }}
      >
        {title}
      </h1>
      <p class="mt-5 text-sm text-bone-200/65" use:reveal={{ delay: 200 }}>
        Effective {effectiveDate}
      </p>
      <p class="mt-6 text-base leading-relaxed text-bone-200/85 sm:text-lg" use:reveal={{ delay: 260 }}>
        {subtitle}
      </p>
    </div>

    <article
      class="btn-clip mx-auto mt-14 max-w-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-10 sm:mt-16 sm:px-10 sm:py-12"
    >
      <div class="space-y-12">
        {#each sections as section, i}
          <section id={section.id} use:reveal={{ delay: 80 + i * 40 }}>
            <h2 class="font-display text-xl font-medium tracking-tight text-bone-50 sm:text-2xl">
              {section.heading}
            </h2>
            <div class="mt-4 space-y-4 text-sm leading-relaxed text-bone-200/80 sm:text-base">
              {#each section.paragraphs as paragraph}
                <p>{paragraph}</p>
              {/each}
            </div>
          </section>
        {/each}
      </div>

      <p class="mt-12 border-t border-white/10 pt-8 text-sm leading-relaxed text-bone-200/65" use:reveal>
        Questions about this page? Contact us at
        <a href="mailto:elevation@elevationflight.com" class="link-underline text-bone-100 hover:text-sky-300">
          elevation@elevationflight.com
        </a>
        or
        <a href="tel:5716573847" class="link-underline text-bone-100 hover:text-sky-300">571-657-3847</a>.
      </p>
    </article>
  </div>
</section>
