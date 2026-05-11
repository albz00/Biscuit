<script>
  import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  let scrolled = false;
  let mobileOpen = false;

  const links = [
    { href: '/', label: 'Home' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/training', label: 'Training' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' }
  ];

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
    <a href="/" use:link class="group flex min-w-0 shrink items-center gap-2.5 sm:gap-3">
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        class="logo-mark h-8 w-auto shrink-0 sm:h-9"
        fetchpriority="high"
        decoding="async"
      />
      <span class="hidden truncate font-display text-[0.78rem] font-medium uppercase tracking-[0.14em] text-bone-50 min-[400px]:inline sm:text-base sm:tracking-[0.22em]">
        Elevation Aviation
      </span>
    </a>

    <nav
      class="btn-clip-sm hidden items-center gap-0.5 border border-white/15 bg-gradient-nav-pill p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:flex"
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
    </nav>

    <div class="flex shrink-0 items-center gap-2 sm:gap-3">
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
