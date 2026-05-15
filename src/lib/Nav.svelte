<script>
  import { onMount } from 'svelte';
  import { active, link } from './router.js';

  let scrolled = false;
  let mobileOpen = false;

  const resourceLinks = [
    { href: '/resources', label: 'Resource hub', description: 'Site map and student links' },
    {
      href: 'https://forms.gle/4yXK1m6m4o7BcrZj8',
      label: 'Open Dispatch',
      description: 'Aircraft dispatch form'
    },
    { href: '/blog', label: 'Blog', description: 'Training notes and updates' }
  ];

  const links = [
    { href: '/', label: 'Home' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/training', label: 'Training' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/about', label: 'About' }
  ];

  const brandLogo =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cc79ee1b-e321-4111-3de5-8a0eb77b5000/public';

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });

  function close() {
    mobileOpen = false;
  }
</script>

<header
  class="fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-500 ease-out {scrolled
    ? 'bg-ink-950/70 backdrop-blur-xl'
    : 'bg-gradient-to-b from-ink-950/80 via-ink-950/45 to-transparent'}"
>
  <div
    class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent transition-opacity duration-500"
    class:opacity-100={scrolled}
    class:opacity-60={!scrolled}
  ></div>

  <div
    class="container-x relative flex h-20 items-center justify-between gap-4 transition-[height] duration-500"
    class:h-16={scrolled}
  >
    <a href="/" use:link class="group flex min-w-0 shrink items-center gap-2.5 sm:gap-3 lg:z-10">
      <img
        src={brandLogo}
        alt="Elevation Aviation"
        class="h-8 w-auto max-w-[10.5rem] shrink-0 brightness-0 invert sm:h-10 sm:max-w-[13rem]"
        fetchpriority="high"
        decoding="async"
      />
    </a>

    <nav
      class="btn-clip-sm hidden items-center gap-0.5 border border-white/15 bg-gradient-nav-pill p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2"
      aria-label="Primary"
    >
      {#each links as item}
        <a
          href={item.href}
          use:link
          use:active={{ className: 'bg-white/[0.1] text-bone-50' }}
          class="btn-clip-xs px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-bone-200/82 transition-colors duration-200 hover:bg-white/[0.08] hover:text-bone-50 xl:px-2.5 xl:text-[11px]"
        >
          {item.label}
        </a>
      {/each}
      <div class="group relative">
        <a
          href="/resources"
          use:link
          use:active={{ className: 'bg-white/[0.1] text-bone-50' }}
          class="btn-clip-xs inline-flex items-center gap-1.5 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-bone-200/82 transition-colors duration-200 hover:bg-white/[0.08] hover:text-bone-50 xl:px-2.5 xl:text-[11px]"
        >
          Resources
          <span
            class="inline-flex text-bone-200/60 transition-transform duration-200 group-hover:rotate-180"
            aria-hidden="true"
          >
            <svg class="h-2.5 w-2.5 shrink-0" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 4.25L6 7.75L9.5 4.25"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </a>
        <div
          class="invisible absolute right-0 top-full z-50 mt-2 w-64 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
        >
          <div
            class="btn-clip-sm border border-white/12 bg-ink-950/95 p-2 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
          >
            {#each resourceLinks as item}
              <a
                href={item.href}
                use:link
                use:active={{ className: 'bg-white/[0.08] text-bone-50' }}
                class="btn-clip-xs block px-3 py-3 text-left transition-colors hover:bg-white/[0.06]"
              >
                <span class="block text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-100">
                  {item.label}
                </span>
                <span class="mt-1 block text-xs leading-relaxed text-bone-200/65">
                  {item.description}
                </span>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </nav>

    <div class="flex shrink-0 items-center gap-2 sm:gap-3 lg:z-10">
      <a
        href="tel:5716573847"
        class="hidden text-sm font-semibold tabular-nums tracking-[0.06em] text-bone-200/85 transition-colors hover:text-sky-300 xl:inline"
      >
        571-657-3847
      </a>
      <a
        href="/contact"
        use:link
        class="btn-clip-sm border border-sky-800/40 bg-gradient-sky-btn px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 hover:bg-gradient-sky-btn-hover hover:-translate-y-px sm:px-5 sm:py-3 sm:text-xs"
      >
        Contact
      </a>
      <button
        type="button"
        class="btn-clip-xs flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:hidden"
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
        on:click={() => (mobileOpen = !mobileOpen)}
      >
        <span
          class="block h-px w-5 bg-bone-200/90 transition-transform duration-200"
          class:translate-y-[5px]={mobileOpen}
          class:rotate-45={mobileOpen}
        ></span>
        <span
          class="block h-px w-5 bg-bone-200/90 transition-opacity duration-200"
          class:opacity-0={mobileOpen}
        ></span>
        <span
          class="block h-px w-5 bg-bone-200/90 transition-transform duration-200"
          class:-translate-y-[5px]={mobileOpen}
          class:-rotate-45={mobileOpen}
        ></span>
      </button>
    </div>
  </div>

  {#if mobileOpen}
    <div
      class="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto border-t border-white/12 bg-ink-950/95 backdrop-blur-xl lg:hidden"
    >
      <div class="container-x flex flex-col gap-1 py-4">
        {#each links as item}
          <a
            href={item.href}
            use:link
            on:click={close}
            class="btn-clip-xs border border-transparent px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-bone-200/90 transition-colors hover:border-white/10 hover:bg-white/[0.06] hover:text-sky-300"
          >
            {item.label}
          </a>
        {/each}
        <div class="mt-1 border border-white/10 bg-white/[0.035] p-2 btn-clip-sm">
          <p class="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/55">Resources</p>
          {#each resourceLinks as item}
            <a
              href={item.href}
              use:link
              on:click={close}
              class="btn-clip-xs block px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-bone-200/90 transition-colors hover:bg-white/[0.06] hover:text-sky-300"
            >
              {item.label}
            </a>
          {/each}
        </div>
        <div class="mt-3 border border-white/12 bg-white/[0.04] px-3 py-4 btn-clip-sm">
          <a
            href="tel:5716573847"
            on:click={close}
            class="text-xs font-semibold tabular-nums tracking-wide text-sky-300/80"
          >
            571-657-3847
          </a>
        </div>
      </div>
    </div>
  {/if}
</header>
