<script>
  import { reveal } from './useReveal.js';

  const faqs = [
    {
      q: 'How does scheduling work?',
      a:
        'We sit down with each student and set up a recurring weekly schedule that works for you. It repeats every week until you earn your rating, and can continue if you plan to train for additional ratings. You are not constantly trying to grab reservations. It is easier to plan work and life around your lessons, and you can fly often enough to keep what you learn fresh.'
    },
    {
      q: 'Do you offer introductory flights?',
      a:
        'Yes. We offer a one-hour instructional demo flight. It is a good way to see our operations, aircraft, and instructors, and to get a feel for training out of Manassas Regional Airport.'
    },
    {
      q: 'What are the payment options?',
      a:
        'Pay as you go: after each lesson we invoice through our scheduling software with either an e-check (no fee) or a credit card (2.5% fee). Alternatively, you can finance training through Flight Training Finance and make monthly payments. See flighttrainingfinancellc.com. Rates are charged as you fly; no upfront deposits.'
    },
    {
      q: 'Where is the school located?',
      a:
        'We are at APP Jet Center, 9998 Wakeman Drive, Suite 204, Manassas, VA 20110. We train at Manassas Regional Airport. If you are visiting: take the lobby elevator up to the mezzanine, then turn left to find our office.'
    },
    {
      q: 'What does “KHEF” mean?',
      a:
        'KHEF is the four-letter FAA location identifier for Manassas Regional Airport. You will see it on charts and in flight plans. You do not need to know it to train with us; we list our full street address and airport name everywhere else on this page.'
    }
  ];

  /** @type {number | null} */
  let openIndex = 0;

  function toggle(i) {
    openIndex = openIndex === i ? null : i;
  }

  function onKeydown(e, i) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(i);
    }
  }
</script>

<section id="faq" class="faq-shell relative overflow-hidden py-28 sm:py-36">
  <!-- Background stack -->
  <div class="pointer-events-none absolute inset-0 bg-[#060a14]"></div>
  <div
    class="pointer-events-none absolute inset-0 opacity-40"
    style="background-image: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(95, 168, 230, 0.22), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(30, 43, 79, 0.5), transparent);"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 opacity-[0.07]"
    style="background-image: linear-gradient(rgba(245,243,236,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,236,0.5) 1px, transparent 1px); background-size: 48px 48px;"
  ></div>
  <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950"></div>
  <div class="grain pointer-events-none absolute inset-0 opacity-[0.06]"></div>

  <div class="container-x relative">
    <div class="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
      <!-- Sticky intro column -->
      <aside class="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
        <div class="eyebrow mb-8" use:reveal>Questions</div>

        <div class="relative" use:reveal={{ delay: 80 }}>
          <p class="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-400/90">
            Elevation Aviation
          </p>
          <h2 class="faq-display mt-4 font-display font-medium tracking-tight text-bone-50">
            <span class="block text-[clamp(3.5rem,12vw,7.5rem)] leading-[0.85]">Ask</span>
            <span
              class="block bg-gradient-to-br from-bone-100/45 via-bone-100/20 to-bone-100/5 bg-clip-text text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] text-transparent"
            >
              anything.
            </span>
          </h2>
          <div class="faq-rule mt-10 h-px max-w-[12rem] bg-gradient-to-r from-sky-400 via-sky-400/40 to-transparent"></div>
          <p class="mt-8 max-w-sm text-sm leading-relaxed text-bone-200/65">
            Straight answers on scheduling, payments, intro flights, and finding us at Manassas Regional. Tap a question to expand.
          </p>
          <a
            href="#contact"
            class="btn-clip-sm mt-10 inline-block border border-white/[0.1] bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-bone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-sky-400/45 hover:text-sky-300"
          >
            Information request →
          </a>
        </div>

        <div
          class="mt-12 hidden font-sans text-[10px] font-semibold uppercase tracking-widest text-bone-200/35 lg:block"
          use:reveal={{ delay: 200 }}
        >
          {faqs.length} answers, straight from the office.
        </div>
      </aside>

      <!-- Accordion -->
      <div class="lg:col-span-8">
        <ul class="space-y-3" role="list">
          {#each faqs as item, i}
            <li use:reveal={{ delay: 60 + i * 70 }}>
              <div
                class="faq-item rounded-sm border transition-[border-color,box-shadow,background-color] duration-500 ease-out"
                class:faq-item-open={openIndex === i}
              >
                <button
                  type="button"
                  id="faq-btn-{i}"
                  class="faq-trigger flex w-full items-start gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
                  aria-expanded={openIndex === i}
                  aria-controls="faq-panel-{i}"
                  on:click={() => toggle(i)}
                  on:keydown={(e) => onKeydown(e, i)}
                >
                  <span class="min-w-0 flex-1">
                    <span class="block font-display text-lg font-medium leading-snug text-bone-50 sm:text-xl">
                      {item.q}
                    </span>
                  </span>
                  <span
                    class="faq-caret shrink-0 self-start pt-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-sky-400/90"
                  >
                    {openIndex === i ? 'Close' : 'Read'}
                  </span>
                </button>

                <div
                  id="faq-panel-{i}"
                  role="region"
                  aria-labelledby="faq-btn-{i}"
                  class="faq-panel grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  class:faq-panel-expanded={openIndex === i}
                >
                  <div class="overflow-hidden">
                    <div class="border-t border-bone-100/10 px-5 pb-6 sm:px-7 sm:pb-7">
                      <p class="faq-answer max-w-2xl pt-5 text-sm leading-relaxed text-bone-200/80 sm:text-base sm:leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .faq-shell {
    border-top: 1px solid rgba(245, 243, 236, 0.08);
    border-bottom: 1px solid rgba(245, 243, 236, 0.08);
  }

  .faq-item {
    border-color: rgba(245, 243, 236, 0.08);
    background: rgba(10, 15, 28, 0.45);
    box-shadow: 0 0 0 0 rgba(95, 168, 230, 0);
  }

  .faq-item-open {
    border-color: rgba(95, 168, 230, 0.45);
    background: rgba(10, 15, 28, 0.85);
    box-shadow:
      0 0 0 1px rgba(95, 168, 230, 0.12),
      0 24px 48px -24px rgba(0, 0, 0, 0.65);
  }

  .faq-trigger {
    outline: none;
  }

  .faq-trigger:focus-visible {
    box-shadow: inset 0 0 0 2px rgba(95, 168, 230, 0.55);
  }

  .faq-panel {
    grid-template-rows: 0fr;
  }

  .faq-panel-expanded {
    grid-template-rows: 1fr;
  }

  .faq-answer {
    opacity: 0;
    transform: translateY(6px);
    transition:
      opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.05s,
      transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.05s;
  }

  .faq-panel-expanded .faq-answer {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .faq-panel,
    .faq-item,
    .faq-answer {
      transition: none;
    }
    .faq-answer {
      opacity: 1;
      transform: none;
    }
  }
</style>
