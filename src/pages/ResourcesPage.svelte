<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from '../lib/useReveal.js';

  const links = [
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
        Pilot resources.
      </h1>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 170 }}>
        Dispatch, financing, and office contact links in one place.
      </p>
    </div>

    <ul class="mt-14 space-y-4" role="list">
      {#each links as item, i}
        <li
          class="btn-clip border border-white/[0.055] bg-gradient-to-b from-ink-800/50 to-ink-950/90 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.4)] sm:p-10"
          use:reveal={{ delay: 120 + i * 80 }}
        >
          {#if item.external}
            <a
              href={item.href}
              target="_blank"
              rel="noopener"
              class="font-display text-2xl font-medium tracking-tight text-bone-50 transition-colors hover:text-sky-300"
            >
              {item.title}
            </a>
          {:else}
            <a
              href={item.href}
              use:link
              class="font-display text-2xl font-medium tracking-tight text-bone-50 transition-colors hover:text-sky-300"
            >
              {item.title}
            </a>
          {/if}
          <p class="mt-4 text-sm leading-relaxed text-bone-200/75 sm:text-base">{item.body}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>
