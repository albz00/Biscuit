<script>
  import { reveal } from './useReveal.js';
</script>

<section
  id="philosophy"
  class="relative overflow-hidden bg-gradient-to-b from-bone-100 via-bone-50 to-bone-100 py-28 text-ink-900 sm:py-36"
>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,rgba(95,168,230,0.18),transparent_55%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(31,99,163,0.08),transparent_55%)]"
  ></div>

  <div class="container-x relative">
    <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
      <div class="relative lg:col-span-6" use:reveal>
        <div class="btn-clip relative aspect-[4/5] w-full overflow-hidden border border-ink-900/10 shadow-[0_30px_60px_-30px_rgba(7,14,28,0.35)]">
          <img
            src="/hero.jpg"
            alt="Elevation Aviation aircraft at Manassas Regional"
            class="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
            loading="lazy"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/25 via-transparent to-transparent"
          ></div>
          <div
            class="absolute bottom-5 left-5 btn-clip-sm border border-white/30 bg-ink-950/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone-50 backdrop-blur-md"
          >
            Manassas Regional Airport
          </div>
        </div>
      </div>

      <div class="lg:col-span-6">
        <div class="eyebrow mb-0" use:reveal>About Us</div>

        <p class="mt-6 text-base leading-relaxed text-ink-700" use:reveal={{ delay: 80 }}>
          Elevation Aviation was founded by three aviation professionals who love flying and want to offer a quality training experience centered on student support and mentorship, so you can reach the goals you set for yourself.
        </p>

        <h2
          class="mt-10 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
          use:reveal={{ delay: 120 }}
        >
          A grand journey, with many paths and options.
        </h2>

        <div class="mt-10 space-y-5 text-base leading-relaxed text-ink-700" use:reveal={{ delay: 240 }}>
          <p>
            Flight training can at first feel intimidating. We treat it as a long-term journey with more than one route to the finish line. Everyone has different schedules, priorities, and dreams, so we do not believe in a single cookie-cutter syllabus for every person.
          </p>
          <p>
            New students start with a free consultation. It is a chance to talk through your first steps and sketch a plan that fits you, not a template.
          </p>
          <p class="text-ink-900">
            We stay intentionally small so we can stay focused on students who are serious about learning to fly.
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-4" use:reveal={{ delay: 360 }}>
          <a href="#contact" class="btn-primary">Book a Free Consultation</a>
          <a
            href="tel:5716573847"
            class="btn border border-ink-900/25 bg-white/70 text-ink-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:border-sky-500/60 hover:text-sky-600"
          >
            Call 571 657 3847
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
