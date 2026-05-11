<script>
  import { link } from 'svelte-spa-router';
  import DemoCTA from '../lib/DemoCTA.svelte';
  import { reveal } from '../lib/useReveal.js';

  const siteLinks = [
    {
      title: 'Home',
      href: '/',
      body: 'Start with the big picture: who we are, what we offer, and how to begin.'
    },
    {
      title: 'Fleet',
      href: '/fleet',
      body: 'See the training aircraft and avionics students use at Elevation.'
    },
    {
      title: 'Training',
      href: '/training',
      body: 'Compare private, instrument, and commercial training paths.'
    },
    {
      title: 'Instructors',
      href: '/instructors',
      body: 'Meet the people teaching, scheduling, and guiding each lesson.'
    },
    {
      title: 'FAQs',
      href: '/faqs',
      body: 'Get quick answers on scheduling, intro flights, payments, and expectations.'
    },
    {
      title: 'About',
      href: '/about',
      body: 'Learn the mission and training philosophy behind Elevation Aviation.'
    },
    {
      title: 'Blog',
      href: '/blog',
      body: 'Read training notes, student updates, and access the portal-style login page.'
    },
    {
      title: 'Manassas Regional Airport',
      href: '/manassas-regional-airport-virginia',
      body: 'Find airport details, location context, and how to get to the school.'
    },
    {
      title: 'Contact',
      href: '/contact',
      body: 'Call, text, email, or ask the office for help with your next step.'
    }
  ];

  const practicalLinks = [
    {
      title: 'Aircraft dispatch',
      href: 'https://forms.gle/4yXK1m6m4o7BcrZj8',
      external: true,
      body: 'Reserve training aircraft through our dispatch form.'
    },
    {
      title: 'Flight Training Finance',
      href: 'https://www.flighttrainingfinancellc.com',
      external: true,
      body: 'Monthly payment options for flight training. Terms and applications are handled on their site.'
    },
    {
      title: 'Contact the office',
      href: '/contact',
      external: false,
      body: 'Call, text, or email for scheduling and general questions.'
    }
  ];

  /** @param {string} href */
  function indexLabel(href) {
    try {
      const u = new URL(href, 'https://example.com');
      if (u.origin === 'https://example.com') return u.pathname || '/';
      return u.hostname.replace(/^www\./, '');
    } catch {
      return href;
    }
  }
</script>

<section class="relative overflow-hidden bg-ink-900 py-28 sm:py-36">
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_85%_10%,rgba(176,217,245,0.08),transparent_55%)]"
  ></div>

  <div class="container-x">
    <div class="max-w-3xl">
      <div class="eyebrow mb-6" use:reveal>Resources</div>
      <h1
        class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
        use:reveal={{ delay: 90 }}
      >
        Everything in one place.
      </h1>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 170 }}>
        This page is an index of the site and the outside links students use most often. Use the
        contents list to jump, or scan the entries in order.
      </p>
    </div>

    <nav
      class="mt-12 max-w-2xl border border-white/10 bg-ink-950/40 px-6 py-5 sm:px-8 sm:py-6"
      aria-label="Page contents"
      use:reveal={{ delay: 200 }}
    >
      <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/55">Contents</p>
      <ol class="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-bone-200/90 marker:text-sky-300/70">
        <li>
          <a href="#quick-actions" class="text-bone-100 underline decoration-white/20 underline-offset-4 transition hover:text-sky-300 hover:decoration-sky-300/50">
            Quick actions and external links
          </a>
        </li>
        <li>
          <a href="#site-pages" class="text-bone-100 underline decoration-white/20 underline-offset-4 transition hover:text-sky-300 hover:decoration-sky-300/50">
            Pages on this site
          </a>
        </li>
      </ol>
    </nav>

    <section id="quick-actions" class="mt-16 scroll-mt-28">
      <h2
        class="font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl"
        use:reveal={{ delay: 80 }}
      >
        Quick actions
      </h2>
      <p class="mt-3 max-w-2xl text-sm leading-relaxed text-bone-200/72 sm:text-base" use:reveal={{ delay: 140 }}>
        Forms, financing, and the office. Same index layout as below.
      </p>

      <div
        class="mt-8 max-w-3xl border border-white/[0.08] bg-ink-950/30"
        role="list"
        aria-label="Quick actions"
      >
        {#each practicalLinks as item, i}
          <div
            class="border-b border-white/[0.06] last:border-b-0"
            role="listitem"
            use:reveal={{ delay: 100 + i * 45 }}
          >
            {#if item.external}
              <a
                href={item.href}
                target="_blank"
                rel="noopener"
                class="group flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400/50 sm:flex-row sm:items-start sm:gap-6 sm:px-6 sm:py-5"
              >
                <span class="min-w-0 flex-1">
                  <span class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span class="font-display text-lg font-medium tracking-tight text-bone-50 group-hover:text-sky-300 sm:text-xl">
                      {item.title}
                    </span>
                    <span class="font-mono text-[11px] text-bone-200/40 sm:text-xs">{indexLabel(item.href)}</span>
                    <span class="rounded border border-white/10 px-1.5 py-px text-[9px] font-semibold uppercase tracking-wider text-bone-200/55">
                      External
                    </span>
                  </span>
                  <span class="mt-1 block text-sm leading-relaxed text-bone-200/65">{item.body}</span>
                </span>
                <span
                  class="shrink-0 self-end font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-300/70 transition group-hover:text-sky-300 sm:self-center sm:pt-0.5"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </a>
            {:else}
              <a
                href={item.href}
                use:link
                class="group flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400/50 sm:flex-row sm:items-start sm:gap-6 sm:px-6 sm:py-5"
              >
                <span class="min-w-0 flex-1">
                  <span class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span class="font-display text-lg font-medium tracking-tight text-bone-50 group-hover:text-sky-300 sm:text-xl">
                      {item.title}
                    </span>
                    <span class="font-mono text-[11px] text-bone-200/40 sm:text-xs">{indexLabel(item.href)}</span>
                  </span>
                  <span class="mt-1 block text-sm leading-relaxed text-bone-200/65">{item.body}</span>
                </span>
                <span
                  class="shrink-0 self-end font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-300/70 transition group-hover:text-sky-300 sm:self-center sm:pt-0.5"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </a>
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <section id="site-pages" class="mt-20 scroll-mt-28">
      <h2
        class="font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl"
        use:reveal={{ delay: 80 }}
      >
        Pages on this site
      </h2>
      <p class="mt-3 max-w-2xl text-sm leading-relaxed text-bone-200/72 sm:text-base" use:reveal={{ delay: 140 }}>
        Internal destinations in the order they appear in the main navigation flow.
      </p>

      <div
        class="mt-8 max-w-3xl border border-white/[0.08] bg-ink-950/30"
        role="list"
        aria-label="Site pages"
      >
        {#each siteLinks as item, i}
          <div
            class="border-b border-white/[0.06] last:border-b-0"
            role="listitem"
            use:reveal={{ delay: 100 + i * 35 }}
          >
            <a
              href={item.href}
              use:link
              class="group flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400/50 sm:flex-row sm:items-start sm:gap-6 sm:px-6 sm:py-5"
            >
              <span class="min-w-0 flex-1">
                <span class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span class="font-display text-lg font-medium tracking-tight text-bone-50 group-hover:text-sky-300 sm:text-xl">
                    {item.title}
                  </span>
                  <span class="font-mono text-[11px] text-bone-200/40 sm:text-xs">{indexLabel(item.href)}</span>
                </span>
                <span class="mt-1 block text-sm leading-relaxed text-bone-200/65">{item.body}</span>
              </span>
              <span
                class="shrink-0 self-end font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-300/70 transition group-hover:text-sky-300 sm:self-center sm:pt-0.5"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </a>
          </div>
        {/each}
      </div>
    </section>
  </div>
</section>
<DemoCTA />
