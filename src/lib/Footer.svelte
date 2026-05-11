<script>
  import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import GoogleReviewLink from './GoogleReviewLink.svelte';

  let copyrightYear = new Date().getFullYear();

  onMount(() => {
    const syncYear = () => {
      copyrightYear = new Date().getFullYear();
    };
    const onVisibility = () => {
      if (document.visibilityState === 'visible') syncYear();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  });

  const explore = [
    { href: '/', label: 'Home' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/training', label: 'Training' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' }
  ];
</script>

<footer class="relative bg-ink-950/70">
  <div
    class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
  ></div>

  <div class="container-x py-16">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
      <div class="md:col-span-5">
        <div class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            class="logo-mark h-10 w-auto"
          />
          <span class="font-display text-base font-medium uppercase tracking-[0.22em] text-bone-50">
            Elevation Aviation
          </span>
        </div>
        <p class="mt-5 max-w-sm text-sm leading-relaxed text-bone-200/68">
          Flight training at
          <a href="/manassas-regional-airport-virginia" use:link class="link-underline text-bone-100 hover:text-sky-300">
            Manassas Regional Airport
          </a>.
          Student-focused scheduling, a unified Piper fleet, and clear billing.
        </p>
        <p class="mt-4 text-sm leading-relaxed text-bone-200/50">
          APP Jet Center, 9998 Wakeman Drive, Suite 204,
          <a href="/manassas-regional-airport-virginia" use:link class="link-underline text-bone-100 hover:text-sky-300">
            Manassas, VA 20110
          </a>
        </p>
      </div>

      <div class="md:col-span-3">
        <div class="num-tag">Explore</div>
        <ul class="mt-4 space-y-2 text-sm text-bone-200/78">
          {#each explore as item}
            <li>
              <a href={item.href} use:link class="transition-colors hover:text-sky-300">{item.label}</a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="md:col-span-4">
        <div class="num-tag">Contact</div>
        <ul class="mt-4 space-y-3 text-sm">
          <li>
            <a href="tel:5716573847" class="font-display text-lg tabular-nums text-bone-50 transition-colors hover:text-sky-300 sm:text-xl">571 · 657 · 3847</a>
            <span class="mt-1 block text-xs text-bone-200/55">Office, Mon to Sun, 8 to 6</span>
          </li>
          <li>
            <a href="tel:7036253517" class="text-bone-200/80 transition-colors hover:text-sky-300">After hours: 703 · 625 · 3517</a>
          </li>
          <li>
            <a href="mailto:elevation@elevationflight.com" class="text-bone-200/80 transition-colors hover:text-sky-300">elevation@elevationflight.com</a>
          </li>
          <li>
            <a href="https://forms.gle/4yXK1m6m4o7BcrZj8" target="_blank" rel="noopener" class="text-bone-200/80 transition-colors hover:text-sky-300">Dispatch form</a>
          </li>
          <li class="pt-2">
            <GoogleReviewLink variant="on-dark" />
          </li>
          <li class="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-bone-200/80">
            <a
              href="https://www.facebook.com/p/Elevation-Aviation-61574436880131/"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-colors hover:text-sky-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/elevationaviation/"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-colors hover:text-sky-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="mt-16 flex flex-col gap-3 bg-white/[0.03] px-4 py-6 text-xs text-bone-200/45 btn-clip-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <span>© {copyrightYear} Elevation Aviation. All rights reserved.</span>
      <span class="text-bone-200/55">
        Created by
        <a
          href="https://hostverna.com"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-1 text-bone-200/80 transition-colors hover:text-sky-300"
        >
          HostVerna
        </a>
      </span>
    </div>
  </div>
</footer>
