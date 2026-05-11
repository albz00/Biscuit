<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from './useReveal.js';

  const tracks = ['Private Pilot Certificate', 'Instrument Rating', 'Commercial Certificate'];
</script>

<section id="training" class="relative bg-ink-900 py-28 sm:py-36">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(61,147,227,0.08),transparent_55%)]"></div>

  <div class="container-x">
    <div class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
      <div class="max-w-2xl">
        <div class="eyebrow mb-6" use:reveal>Training</div>
        <h2
          class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 100 }}
        >
          Paths to your<br />next certificate.
        </h2>
      </div>
      <p class="max-w-md text-sm leading-relaxed text-bone-200/72 sm:text-base" use:reveal={{ delay: 200 }}>
        Private, instrument, and commercial training with recurring weekly scheduling.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
      {#each tracks as track, i}
        <article
          class="group relative flex flex-col justify-between btn-clip border border-white/[0.055] bg-gradient-to-b from-ink-800/60 to-ink-950/90 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5"
          use:reveal={{ delay: 150 + i * 120 }}
        >
          <div class="flex items-center justify-between gap-4">
            <h3 class="font-display text-3xl font-medium tracking-tight text-bone-50">{track}</h3>
            <span class="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              Track
            </span>
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-12 max-w-4xl border border-white/[0.05] bg-white/[0.03] p-6 text-sm leading-relaxed text-bone-200/75 btn-clip-sm sm:p-8" use:reveal={{ delay: 300 }}>
      Flight training may at first appear to be an intimidating and overwhelming endeavor. We see it as a grand
      journey with many different paths and options. For this reason, we offer free flight training consultations with
      a member of our staff. Every individual has unique life-dynamics, desires, and aspirations; therefore, there is
      no "one size fits all" solution, or path. We would be honored to be apart of your journey. We are happy to help
      anyone explore their first steps and plot your unique initial course. Feel free to call and stop in for more
      information on how we might help you start your journey! Please call first before you stop by - we are by design
      a small, intimate family to help keep focused on people just like you who are chasing their dreams!
    </div>
    <a
      href="https://forms.gle/4yXK1m6m4o7BcrZj8"
      target="_blank"
      rel="noopener"
      class="mt-8 inline-block link-underline font-sans text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
      use:reveal={{ delay: 340 }}
    >
      Open dispatch form
    </a>
  </div>
</section>
