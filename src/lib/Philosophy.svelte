<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from './useReveal.js';
</script>

<section
  id="philosophy"
  class="relative overflow-hidden bg-gradient-to-b from-bone-100 via-bone-50 to-bone-100 py-28 text-ink-900 sm:py-36"
>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,rgba(61,147,227,0.10),transparent_55%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(27,103,159,0.08),transparent_55%)]"
  ></div>

  <div class="container-x relative">
    <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
      <div class="relative lg:col-span-6" use:reveal>
        <div class="btn-clip relative aspect-[4/5] w-full overflow-hidden border border-ink-900/[0.07] shadow-[0_30px_60px_-30px_rgba(7,14,28,0.35)]">
          <img
            src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/18b1c0a1-bca4-4fad-cc33-60e0d4915400/public"
            alt="Cockpit view during flight training"
            class="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
            loading="lazy"
            fetchpriority="low"
            decoding="async"
          />
        </div>
      </div>

      <div class="lg:col-span-6">
        <div class="eyebrow mb-0 text-sky-700/85" use:reveal>About Us</div>

        <h2
          class="mt-6 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
          use:reveal={{ delay: 60 }}
        >
          Our Mission
        </h2>
        <p class="mt-6 text-base leading-relaxed text-ink-700" use:reveal={{ delay: 80 }}>
          We are founded by three aviation professionals that are in love with aviation, and are looking to give a quality flight training experience focused on student experience and mentorship with the purpose of students achieving their goals.
        </p>

        <h2
          class="mt-10 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
          use:reveal={{ delay: 120 }}
        >
          About Elevation Aviation
        </h2>

        <div class="mt-10 space-y-5 text-base leading-relaxed text-ink-700" use:reveal={{ delay: 240 }}>
          <p>
            We train pilots at Manassas Regional Airport with recurring weekly lessons, an all PA-28 fleet, and pay-as-you-fly billing.
          </p>
          <p>
            Our focus is clear scheduling, consistent aircraft, and direct instruction that helps students move toward each rating goal.
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-4" use:reveal={{ delay: 360 }}>
          <a href="/contact" use:link class="btn-primary">Book a Free Consultation</a>
          <a
            href="tel:5716573847"
            class="btn border border-ink-900/15 bg-white/75 text-ink-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_12px_32px_-16px_rgba(7,14,28,0.2)] hover:bg-white/90 hover:text-sky-700"
          >
            Call 571 657 3847
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
