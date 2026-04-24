<script>
  import { reveal } from './useReveal.js';

  const tracks = [
    {
      short: 'PPL',
      name: 'Private Pilot',
      summary:
        'Your gateway to aviation. Learn to safely command a single-engine aircraft in day VFR conditions, and open the door to everything that follows.',
      points: ['Discovery & ground school', 'Solo & cross-country', 'FAA practical exam prep']
    },
    {
      short: 'IR',
      name: 'Instrument Rating',
      summary:
        'Fly confidently through weather and low visibility. Master IFR procedures, enroute navigation, and precision approaches with focused training.',
      points: ['Procedure-based training', 'Real-world IFR flying', 'Approach proficiency']
    },
    {
      short: 'CPL',
      name: 'Commercial Certificate',
      summary:
        'Turn your passion into a career. Develop the precision, maneuvers, and decision-making required to fly for compensation or hire.',
      points: ['Complex maneuvers', 'Commercial standards', 'Career pathway guidance']
    }
  ];
</script>

<section id="training" class="relative bg-ink-900 py-28 sm:py-36">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,95,0.06),transparent_50%)]"></div>

  <div class="container-x">
    <div class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
      <div class="max-w-2xl">
        <div class="eyebrow mb-6" use:reveal>Training Tracks</div>
        <h2
          class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 100 }}
        >
          From first lesson<br />to checkride.
        </h2>
      </div>
      <p class="max-w-md text-sm leading-relaxed text-bone-200/72 sm:text-base" use:reveal={{ delay: 200 }}>
        Three certifications. One approach. Whether you are flying for fun or building hours toward a career, we will plot a course that fits your life.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
      {#each tracks as t, i}
        <article
          class="group relative flex flex-col justify-between rounded-sm border border-white/[0.08] bg-gradient-to-b from-ink-800/60 to-ink-950/90 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-sky-400/35"
          use:reveal={{ delay: 150 + i * 120 }}
        >
          <div>
            <div class="flex items-baseline justify-between">
              <span class="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-400">
                Track
              </span>
              <span
                class="bg-gradient-to-br from-bone-100/30 via-bone-100/15 to-bone-100/5 bg-clip-text font-display text-4xl font-medium tracking-tight text-transparent transition-colors group-hover:from-sky-300/60 group-hover:via-sky-400/35 group-hover:to-sky-500/15"
              >
                {t.short}
              </span>
            </div>

            <h3 class="mt-6 font-display text-3xl font-medium tracking-tight text-bone-50">
              {t.name}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-bone-200/72">
              {t.summary}
            </p>

            <ul class="mt-6 space-y-2 border-t border-white/10 pt-6">
              {#each t.points as point}
                <li class="flex items-baseline gap-3 text-sm text-bone-200/82">
                  <span class="mt-[1px] h-1 w-1 shrink-0 rounded-full bg-sky-400/80"></span>
                  <span>{point}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="mt-8 flex items-center justify-end border-t border-white/10 pt-5">
            <a href="#contact" class="link-underline font-sans text-xs font-semibold tracking-widest text-sky-300">
              INQUIRE →
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
