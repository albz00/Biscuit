<script>
  import { link } from './router.js';
  import { reveal } from './useReveal.js';

  const destinations = [
    {
      href: '/fleet',
      title: 'Fleet',
      blurb: 'Two PA-28 aircraft with standardized avionics.'
    },
    {
      href: '/training',
      title: 'Training',
      blurb: 'Private, instrument, and commercial training tracks.'
    },
    {
      href: '/instructors',
      title: 'Instructors',
      blurb: 'Meet our instructors and credentials.'
    },
    {
      href: '/faqs',
      title: 'FAQs',
      blurb: 'Answers on scheduling, payments, and intro flights.'
    },
    {
      href: '/about',
      title: 'About',
      blurb: 'Our mission and common student questions.'
    },
    {
      href: '/resources',
      title: 'Resources',
      blurb: 'A full site overview plus useful student links.'
    }
  ];
</script>

<section class="relative py-24 sm:py-32">
  <div class="container-x">
    <div class="max-w-2xl">
      <div class="eyebrow mb-6" use:reveal>Explore</div>
      <h2
        class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl"
        use:reveal={{ delay: 80 }}
      >
        Browse by topic.
      </h2>
      <p class="mt-6 max-w-xl text-base leading-relaxed text-bone-200/72" use:reveal={{ delay: 160 }}>
        Use these pages to quickly find the information you need.
      </p>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each destinations as d, i}
        <a
          href={d.href}
          use:link
          class="group btn-clip-sm flex flex-col border border-white/[0.055] bg-gradient-to-b from-ink-900/70 to-ink-950/95 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-0.5 sm:p-9"
          use:reveal={{ delay: 100 + i * 70 }}
        >
          <span class="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">Section</span>
          <span class="mt-4 font-display text-2xl font-medium tracking-tight text-bone-50">{d.title}</span>
          <p class="mt-4 flex-1 text-sm leading-relaxed text-bone-200/72">
            {#if d.title === 'FAQs'}
              Scheduling, payments, intro flights, and how to find us at
              <span class="inline-block">
                <a href="/manassas-regional-airport-virginia" use:link class="link-underline text-sky-300">
                  Manassas Regional
                </a>,
              </span>
              answered in plain language.
            {:else}
              {d.blurb}
            {/if}
          </p>
          <span
            class="mt-8 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-300 transition-colors group-hover:text-bone-50"
          >
            Open
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>
