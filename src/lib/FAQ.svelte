<script>
  import { link } from './router.js';
  import { reveal } from './useReveal.js';

  const faqs = [
    {
      q: 'How does scheduling work?',
      a:
        'We sit with each student and create a recurring scheduling that works for them. This schedule recurs each week until they achieve their rating, and can continue after they plan on training for additional ratings. This way our students never have to worry about constantly trying to get reservations to fly, and it makes it easier to schedule their life and work around their lessons. This also allows for students to fly as much as possible, increasing learning retention.'
    },
    {
      q: 'Do you offer demo flights?',
      a:
        'We offer a one hour instructional demo flight billed at the same rate as a regular instructional flight. This is a perfect opportunity to see our operations, aircraft, and staff as well as what it is like to train out of Manassas Airport.'
    },
    {
      q: 'Can international students train with Elevation Aviation?',
      a:
        'Many international students inquire about training with us. International students may be subject to Transportation Security Administration (TSA) requirements before beginning flight training. These requirements are federal rules, not policies created or controlled by Elevation Aviation, and students are responsible for completing any required TSA process before eligible training can begin.'
    },
    {
      q: 'What are the payment options?',
      a:
        'We offer two ways to pay.<br><br>First being pay as you go, at the end of your lesson we invoice through our scheduling software with either an E-Check (no fee) or credit card (2.5% fee).<br><br>The other option if for you to get a financing loan through Flight Training Finance and have monthly payments for your training. You can learn more about Flight Training Finance on their website: <a href="https://www.flighttrainingfinancellc.com/" target="_blank" rel="noopener" class="link-underline text-sky-300">https://www.flighttrainingfinancellc.com</a>'
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
  <div class="pointer-events-none absolute inset-0 bg-ink-950"></div>
  <div
    class="pointer-events-none absolute inset-0 opacity-40"
    style="background-image: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(130, 210, 255, 0.22), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(45, 115, 185, 0.35), transparent);"
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
        <div class="eyebrow mb-8" use:reveal>Frequently Asked Questions</div>

        <div class="relative" use:reveal={{ delay: 80 }}>
          <h2 class="faq-display font-display font-medium tracking-tight text-bone-50">
            <span class="block text-[clamp(3.5rem,12vw,7.5rem)] leading-[0.85]">Ask</span>
            <span
              class="block bg-gradient-to-br from-bone-100/45 via-bone-100/20 to-bone-100/5 bg-clip-text text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] text-transparent"
            >
              anything.
            </span>
          </h2>
          <div class="faq-rule mt-10 h-px max-w-[12rem] bg-gradient-to-r from-sky-400 via-sky-400/40 to-transparent"></div>
          <p class="mt-8 max-w-sm text-sm leading-relaxed text-bone-200/65">
            Answers from the office on scheduling, demo flights, and payment options.
          </p>
          <a
            href="/contact"
            use:link
            class="btn-clip-sm mt-10 inline-block border border-white/15 bg-gradient-to-b from-white/[0.1] to-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-bone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors hover:text-sky-300 sm:px-6 sm:py-3.5"
          >
            Information request
          </a>
        </div>

        <div
          class="mt-12 hidden font-sans text-[10px] font-semibold uppercase tracking-widest text-bone-200/35 lg:block"
          use:reveal={{ delay: 200 }}
        >
          {faqs.length} answers from the office.
        </div>
      </aside>

      <!-- Accordion -->
      <div class="lg:col-span-8">
        <ul class="space-y-3" role="list">
          {#each faqs as item, i}
            <li use:reveal={{ delay: 60 + i * 70 }}>
              <div
                class="faq-item btn-clip-sm transition-[box-shadow,background-color] duration-500 ease-out"
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
                    class="faq-caret shrink-0 self-start pt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-300/85"
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
                    <div class="bg-white/[0.02] px-5 pb-6 sm:px-7 sm:pb-7">
                      <p class="faq-answer max-w-2xl pt-5 text-sm leading-relaxed text-bone-200/80 sm:text-base sm:leading-relaxed">
                        {@html item.a}
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

    <div
      class="mt-16 flex flex-col gap-6 border border-white/[0.06] bg-white/[0.035] px-5 py-8 btn-clip-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-10 lg:mt-20"
      use:reveal={{ delay: 140 }}
    >
      <div class="max-w-xl">
        <p class="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-300/85">Next step</p>
        <p class="mt-3 font-display text-xl font-medium tracking-tight text-bone-50 sm:text-2xl">Talk with the office</p>
        <p class="mt-2 text-sm leading-relaxed text-bone-200/65">
          Send a message or call for scheduling, intro flights, or anything we didn't cover above.
        </p>
      </div>
      <div class="flex flex-wrap gap-3 sm:shrink-0">
        <a
          href="/contact"
          use:link
          class="btn-clip-sm border border-sky-800/40 bg-gradient-sky-btn px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 hover:bg-gradient-sky-btn-hover hover:-translate-y-px sm:px-5 sm:py-3 sm:text-xs"
        >
          Contact
        </a>
        <a
          href="tel:5716573847"
          class="btn-clip-sm border border-white/20 bg-white/[0.08] px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-50 transition-colors hover:bg-white/[0.15] sm:px-5 sm:py-3 sm:text-xs"
        >
          Call 571-657-3847
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .faq-item {
    background: rgba(10, 15, 28, 0.45);
    box-shadow:
      0 12px 40px -28px rgba(0, 0, 0, 0.55),
      inset 0 0 0 1px rgba(255, 255, 255, 0.045);
  }

  .faq-item-open {
    background: rgba(10, 15, 28, 0.85);
    box-shadow:
      0 24px 48px -20px rgba(0, 0, 0, 0.65),
      inset 0 0 0 1px rgba(255, 255, 255, 0.055);
  }

  .faq-trigger {
    outline: none;
  }

  .faq-trigger:focus-visible {
    background-color: rgba(176, 217, 245, 0.08);
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
