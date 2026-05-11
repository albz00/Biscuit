<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from './useReveal.js';
  import GoogleReviewLink from './GoogleReviewLink.svelte';

  const pillars = [
    {
      tag: 'Scheduling',
      title: 'Weekly, Recurring Lessons',
      body:
        'We work with you to build a weekly schedule that repeats until you finish your rating, and can continue if you add another. You are not constantly fighting for reservations, and it is easier to plan the rest of your life around consistent lesson times.'
    },
    {
      tag: 'Aircraft',
      title: 'Unified PA-28 Fleet',
      body:
        'Every aircraft in our fleet is a Piper PA-28. One cockpit, one checklist, one procedure. Fewer maintenance surprises and training that carries over cleanly from lesson to lesson.'
    },
    {
      tag: 'Pricing',
      title: 'Pay As You Fly',
      body:
        'No block purchases and no upfront deposits. After each lesson we invoice through our scheduling software: e-check with no fee, or credit card with a 2.5% fee. Monthly payment plans are also available through Flight Training Finance.'
    }
  ];
</script>

<section id="program" class="relative py-28 sm:py-36">
  <div class="container-x relative">
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <div class="eyebrow mb-6" use:reveal>The Program</div>
        <h2 class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl" use:reveal={{ delay: 100 }}>
          Training built around<br />your schedule.
        </h2>
        <p class="mt-8 max-w-md text-base leading-relaxed text-bone-200/72" use:reveal={{ delay: 200 }}>
          Student experience and mentorship first, with clear expectations for scheduling, aircraft, and how you pay.
        </p>
        <div class="mt-10 flex flex-col items-start gap-4" use:reveal={{ delay: 300 }}>
          <a
            href="/contact"
            use:link
            class="inline-block link-underline font-sans text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
          >
            Request a consultation
          </a>
          <GoogleReviewLink variant="on-dark" />
        </div>
        <img
          src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/4fa0708f-d384-43b9-7601-2f57df788c00/public"
          alt=""
          width="280"
          height="280"
          class="mt-10 block w-full max-w-[13rem] object-contain sm:max-w-[15rem]"
          loading="lazy"
          decoding="async"
          use:reveal={{ delay: 350 }}
        />
      </div>

      <div class="lg:col-span-8">
        <div class="flex flex-col gap-10 sm:gap-12">
          {#each pillars as p, i}
            <div class="w-full" use:reveal={{ delay: 150 + i * 120 }}>
              <article
                class="group relative btn-clip w-full max-w-2xl border border-white/[0.055] bg-gradient-to-b from-ink-900/80 to-ink-950 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_40px_-24px_rgba(0,0,0,0.4)] transition-all duration-500 sm:p-10 {i % 2 === 0
                  ? 'mr-auto -translate-x-2 pr-3 sm:-translate-x-5 sm:pr-5 md:-translate-x-8 lg:-translate-x-10'
                  : 'ml-auto translate-x-2 pl-3 sm:translate-x-5 sm:pl-5 md:translate-x-8 lg:translate-x-10'}"
              >
                <span
                  class="pillar-check pointer-events-none absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border border-sky-300/45 bg-sky-300/18 text-sm leading-none text-sky-200"
                  style={`--check-delay:${220 + i * 140}ms;`}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div class="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">
                  {p.tag}
                </div>
                <h3 class="mt-4 font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">
                  {p.title}
                </h3>
                <p class="mt-4 max-w-2xl text-sm leading-relaxed text-bone-200/75 sm:text-base">
                  {p.body}
                </p>
                {#if p.tag === 'Pricing'}
                  <p class="mt-4 text-sm text-bone-200/60">
                    <a
                      href="https://www.flighttrainingfinancellc.com"
                      target="_blank"
                      rel="noopener"
                      class="link-underline text-sky-300"
                    >Flight Training Finance</a>
                    <span class="text-bone-200/50">, financing details on their website.</span>
                  </p>
                {/if}
                <div class="mt-6 h-px w-0 bg-sky-400 transition-all duration-700 group-hover:w-16"></div>
              </article>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  :global(.reveal) .pillar-check {
    opacity: 0;
    transform: translateY(8px) scale(0.72);
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease-out;
    transition-delay: var(--check-delay, 220ms);
  }

  :global(.reveal.in) .pillar-check {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
</style>
