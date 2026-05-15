<script>
  import { link } from '../lib/router.js';
  import DemoCTA from '../lib/DemoCTA.svelte';
  import GoogleReviewLink from '../lib/GoogleReviewLink.svelte';
  import { reveal } from '../lib/useReveal.js';

  const officeEmail = 'elevation@elevationflight.com';
  const officePhone = '5716573847';
  const contactHref = '/contact';

  const team = [
    {
      name: 'Ian Tracey',
      ratings: ['CFI', 'CFII', 'AGI', 'A&P'],
      showContact: true,
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/051dca37-74aa-41c4-0b5c-ebbf485f6000/public'
    },
    {
      name: 'Erich Deitsch',
      ratings: ['CFI', 'CFII', 'AGI', 'ATP'],
      showContact: true,
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a7faed74-a2b3-4dd7-8348-8407a9752300/public'
    },
    {
      name: 'Keith Teister',
      ratings: ['CFI', 'CFII', 'MEI', 'G-CFI', 'ATP'],
      showContact: true,
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1b4551ab-d14c-43e2-58e0-1b1948db3b00/public'
    },
    {
      name: 'Alexander England',
      ratings: ['CFI', 'CFII'],
      showContact: false,
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9e190b60-6d7d-4e98-753b-bf7d76682f00/public'
    },
    {
      name: 'Mitchell Finn',
      ratings: ['CFI', 'CFII'],
      showContact: false,
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/e0516ec9-3286-4b3b-2795-900e2a355500/public'
    },
    {
      name: 'Mike Esti',
      ratings: ['CFI', 'CFII', 'MEI'],
      showContact: false,
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/851fe212-314f-4f22-7811-9233ed37e600/public'
    },
    {
      name: 'Amanda Behrens',
      ratings: ['CFI', 'CFII', 'MEI'],
      showContact: false,
      photo:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a10c23f3-1536-49e8-d344-9ae82dd60800/public'
    }
  ];

  const ratingLegend = [
    { code: 'CFI', title: 'Certified Flight Instructor' },
    { code: 'CFII', title: 'Certified Flight Instructor - Instrument' },
    { code: 'AGI', title: 'Advanced Ground Instructor' },
    { code: 'A&P', title: 'Airframe and Powerplant Mechanic' },
    { code: 'MEI', title: 'Multi-Engine Instructor' },
    { code: 'G-CFI', title: 'Glider Certified Flight Instructor' },
    { code: 'ATP', title: 'Airline Transport Pilot' }
  ];

  const phoneHref = `tel:${officePhone}`;

  function emailHref(memberName) {
    const subject = encodeURIComponent(`Training inquiry for ${memberName}`);
    return `mailto:${officeEmail}?subject=${subject}`;
  }
</script>

<svelte:head>
  <title>Instructors · Elevation Aviation</title>
  <meta
    name="description"
    content="Meet the certificated flight instructors and team guiding private, instrument, and commercial training at Elevation Aviation in Manassas, Virginia."
  />
</svelte:head>

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
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
      <div class="max-w-3xl lg:col-span-7">
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
      </div>
      <div
        class="btn-clip-sm border border-ink-900/[0.08] bg-white/70 p-6 shadow-[0_18px_44px_-32px_rgba(7,14,28,0.35)] backdrop-blur-sm lg:col-span-5"
        use:reveal={{ delay: 170 }}
      >
        <p class="text-base leading-relaxed text-ink-700 sm:text-lg">
          Learn with a credentialed instructor team based at Manassas Regional Airport.
        </p>
        <p class="mt-4 text-sm leading-relaxed text-ink-600">
          Contact buttons are listed under Ian, Erich, and Keith and route through the office channels we can verify.
        </p>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3">
      {#each team as member, i}
        <article
          class="group btn-clip relative overflow-hidden border border-ink-900/[0.07] bg-gradient-to-b from-white via-white to-bone-100 shadow-[0_24px_48px_-28px_rgba(7,14,28,0.28)] transition-all duration-500 hover:-translate-y-0.5 hover:border-sky-700/20 hover:shadow-[0_32px_60px_-28px_rgba(27,103,159,0.32)]"
          use:reveal={{ delay: 120 + (i % 3) * 90 }}
        >
          <div
            class="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></div>
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
          <div class="px-6 py-6 sm:px-7 sm:py-7">
            <p class="num-tag text-sky-700/80">Instructor</p>
            <h3 class="mt-2 font-display text-xl font-medium tracking-tight text-ink-900 sm:text-2xl">
              {member.name}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-ink-700">
              <span class="font-semibold text-ink-900">Credentials:</span>
              {member.ratings.join(', ')}
            </p>
            <div
              class="mt-5 h-px w-0 bg-sky-500 transition-all duration-700 group-hover:w-12"
            ></div>
            {#if member.showContact}
              <div class="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                <a
                  href={contactHref}
                  use:link
                  class="btn-clip-sm inline-flex items-center justify-center border border-ink-900/10 bg-ink-900 px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-bone-50 transition-all hover:-translate-y-px hover:bg-sky-800"
                >
                  Contact
                </a>
                <a
                  href={emailHref(member.name)}
                  class="btn-clip-sm inline-flex items-center justify-center border border-sky-700/20 bg-sky-50 px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-800 transition-all hover:-translate-y-px hover:border-sky-700/35 hover:bg-sky-100"
                >
                  Email
                </a>
                <a
                  href={phoneHref}
                  class="btn-clip-sm inline-flex items-center justify-center border border-ink-900/10 bg-white px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-700 transition-all hover:-translate-y-px hover:border-sky-700/25 hover:text-sky-700"
                >
                  Call
                </a>
              </div>
            {/if}
          </div>
        </article>
      {/each}
    </div>

    <div
      class="mt-14 btn-clip border border-sky-700/25 bg-gradient-to-br from-sky-50/95 via-white to-bone-50 px-6 py-8 shadow-[0_20px_48px_-28px_rgba(27,103,159,0.22)] sm:px-10 sm:py-10"
      use:reveal={{ delay: 180 }}
    >
      <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-xl">
          <p class="num-tag text-sky-700/85">Google reviews</p>
          <h2 class="mt-3 font-display text-2xl font-medium tracking-tight text-ink-900 sm:text-3xl">
            Training with our team?
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">
            If we helped you reach a milestone, consider leaving a Google review. It helps new students choose instruction
            they can trust.
          </p>
        </div>
        <div class="shrink-0">
          <GoogleReviewLink variant="solid" />
        </div>
      </div>
    </div>

    <div
      class="mt-14 grid grid-cols-1 gap-6 border-t border-ink-900/[0.08] pt-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start"
      use:reveal={{ delay: 220 }}
    >
      <div>
        <p class="num-tag text-sky-700/85">Credential legend</p>
        <h2 class="mt-3 font-display text-3xl font-medium tracking-tight text-ink-900">
          What the titles mean.
        </h2>
        <p class="mt-4 max-w-md text-sm leading-relaxed text-ink-600">
          These abbreviations are shown exactly where they are listed for each instructor above.
        </p>
      </div>
      <dl class="space-y-2 text-sm leading-relaxed text-ink-700">
        {#each ratingLegend as item}
          <div class="border-b border-ink-900/[0.07] pb-2 last:border-b-0">
            <dt class="inline font-semibold text-ink-900">{item.code}:</dt>
            <dd class="inline">{item.title}</dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</section>
<DemoCTA />
