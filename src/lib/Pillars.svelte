<script>
  import { reveal } from './useReveal.js';

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
  <div class="container-x">
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <div class="eyebrow mb-6" use:reveal>The Program</div>
        <h2 class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl" use:reveal={{ delay: 100 }}>
          Training built around<br />your schedule.
        </h2>
        <p class="mt-8 max-w-md text-base leading-relaxed text-bone-200/72" use:reveal={{ delay: 200 }}>
          Student experience and mentorship first, with clear expectations for scheduling, aircraft, and how you pay.
        </p>
        <a
          href="#contact"
          class="mt-10 inline-block link-underline font-sans text-xs font-semibold tracking-widest text-sky-300"
          use:reveal={{ delay: 300 }}
        >
          REQUEST A CONSULTATION →
        </a>
      </div>

      <div class="lg:col-span-8">
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-1">
          {#each pillars as p, i}
            <article
              class="group relative rounded-sm border border-white/[0.06] bg-gradient-to-b from-ink-900/80 to-ink-950 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-500 hover:border-sky-400/20 sm:p-10"
              use:reveal={{ delay: 150 + i * 120 }}
            >
              <div class="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-400">
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
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
