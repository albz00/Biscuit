<script>
  import { reveal } from '../lib/useReveal.js';

  const team = [
    {
      name: 'Ian Tracey',
      ratings: ['CFI', 'CFII', 'AGI', 'A&P'],
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/051dca37-74aa-41c4-0b5c-ebbf485f6000/public'
    },
    {
      name: 'Erich Deitsch',
      ratings: ['CFI', 'CFII', 'AGI', 'ATP'],
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a7faed74-a2b3-4dd7-8348-8407a9752300/public'
    },
    {
      name: 'Keith Teister',
      ratings: ['CFI', 'CFII', 'MEI', 'G-CFI', 'ATP'],
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1b4551ab-d14c-43e2-58e0-1b1948db3b00/public'
    },
    {
      name: 'Alexander England',
      ratings: ['CFI', 'CFII'],
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9e190b60-6d7d-4e98-753b-bf7d76682f00/public'
    },
    {
      name: 'Mitchell Finn',
      ratings: ['CFI', 'CFII'],
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/e0516ec9-3286-4b3b-2795-900e2a355500/public'
    },
    {
      name: 'Mike Esti',
      ratings: ['CFI', 'CFII', 'MEI'],
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/851fe212-314f-4f22-7811-9233ed37e600/public'
    },
    {
      name: 'Amanda Behrens',
      ratings: ['CFI', 'CFII', 'MEI'],
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a10c23f3-1536-49e8-d344-9ae82dd60800/public'
    }
  ];

</script>

<section
  class="relative overflow-hidden bg-gradient-to-b from-bone-50 via-bone-100 to-bone-50 pt-28 pb-24 text-ink-900 sm:pt-36 sm:pb-32"
>
  <!-- Dark cap: fades out over exactly pt-28/pt-36, matching the top padding so nav area is dark and text starts on light background -->
  <div
    class="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-ink-950 to-transparent sm:h-36"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_0%,rgba(61,147,227,0.10),transparent_60%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(27,103,159,0.08),transparent_60%)]"
  ></div>

  <div class="container-x relative">
    <div class="max-w-3xl">
      <div class="eyebrow text-sky-700/85" use:reveal>Our instructors</div>
      <h1
        class="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl"
        use:reveal={{ delay: 90 }}
      >
        Meet our<br />
        <span class="bg-gradient-to-br from-ink-900 via-ink-700 to-sky-700 bg-clip-text text-transparent">
          Team!
        </span>
      </h1>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg" use:reveal={{ delay: 180 }}>
        CFI team and credentials.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3">
      {#each team as member, i}
        <article
          class="group btn-clip relative overflow-hidden border border-ink-900/[0.07] bg-gradient-to-b from-white to-bone-100 shadow-[0_24px_48px_-28px_rgba(7,14,28,0.28)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_32px_60px_-28px_rgba(27,103,159,0.32)]"
          use:reveal={{ delay: 120 + (i % 3) * 90 }}
        >
          <div class="relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
            <img
              src={member.photo}
              alt={`${member.name}, flight instructor`}
              class="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-ink-950/5 to-transparent"
            ></div>
            <div
              class="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></div>
          </div>
          <div class="px-7 py-6 sm:px-8 sm:py-7">
            <h3 class="font-display text-xl font-medium tracking-tight text-ink-900 sm:text-2xl">
              {member.name}
            </h3>
            <div class="mt-3 flex flex-wrap gap-1.5">
              {#each member.ratings as rating}
                <span
                  class="btn-clip-xs inline-flex items-center border border-sky-700/15 bg-sky-50 px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-700"
                >
                  {rating}
                </span>
              {/each}
            </div>
            <div
              class="mt-5 h-px w-0 bg-sky-500 transition-all duration-700 group-hover:w-12"
            ></div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
