<script>
  import { link } from '../lib/router.js';
  import { reveal } from '../lib/useReveal.js';
</script>

<svelte:head>
  <title>Blog · Elevation Aviation</title>
  <meta
    name="description"
    content="Training articles and updates from Elevation Aviation. Check back for new posts from the flight line."
  />
</svelte:head>

<section class="relative overflow-hidden bg-ink-900 py-28 sm:py-36">
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_85%_8%,rgba(176,217,245,0.10),transparent_58%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_0%_100%,rgba(61,147,227,0.08),transparent_55%)]"
  ></div>

  <div class="container-x">
    <div class="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
      <div class="max-w-2xl">
        <div class="eyebrow mb-6" use:reveal>Blog</div>
        <h1
          class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 90 }}
        >
          Notes from the flight line.
        </h1>
        <p class="mt-8 max-w-xl text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 170 }}>
          Training articles, student updates, and practical guidance from Elevation Aviation.
        </p>
      </div>

      <a
        href="/login"
        use:link
        class="self-start text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-200/70 transition-colors hover:text-sky-300 sm:self-end"
        use:reveal={{ delay: 220 }}
      >
        Login
      </a>
    </div>

    <div
      class="mt-16 btn-clip border border-white/[0.055] bg-gradient-to-b from-ink-800/40 to-ink-950/80 p-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.4)] sm:p-16"
      use:reveal={{ delay: 240 }}
    >
      <p class="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">No posts yet</p>
      <h2 class="mt-4 font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">
        There are no posts in the blog.
      </h2>
      <p class="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bone-200/65 sm:text-base">
        Check back soon for training notes and updates from the team.
      </p>
    </div>
  </div>
</section>
