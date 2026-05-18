<script>
  import { onMount } from 'svelte';
  import { link } from '../lib/router.js';
  import { reveal } from '../lib/useReveal.js';
  import { user, signOut } from '../lib/auth.js';
  import { listPosts, formatPostDate } from '../lib/blogs.js';

  /** @type {import('../lib/blogs.js').BlogPost[]} */
  let posts = [];
  let loading = true;

  async function loadPosts() {
    loading = true;
    try {
      posts = await listPosts(Boolean($user));
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadPosts();
    return user.subscribe(() => loadPosts());
  });

  async function handleSignOut() {
    await signOut();
    posts = await listPosts(false);
  }
</script>

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

      <div class="flex flex-col items-start gap-3 sm:items-end" use:reveal={{ delay: 220 }}>
        {#if $user}
          <a href="/blog/new" use:link class="btn-primary">New post</a>
          <button
            type="button"
            class="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-200/70 transition-colors hover:text-sky-300"
            on:click={handleSignOut}
          >
            Sign out ({$user.email})
          </button>
        {:else}
          <a
            href="/login"
            use:link
            class="self-start text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-200/70 transition-colors hover:text-sky-300 sm:self-end"
          >
            Login
          </a>
        {/if}
      </div>
    </div>

    {#if loading}
      <p class="mt-16 text-sm text-bone-200/65" use:reveal>Loading posts…</p>
    {:else if posts.length === 0}
      <div
        class="mt-16 btn-clip border border-white/[0.055] bg-gradient-to-b from-ink-800/40 to-ink-950/80 p-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.4)] sm:p-16"
        use:reveal={{ delay: 240 }}
      >
        <p class="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">No posts yet</p>
        <h2 class="mt-4 font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">
          There are no posts in the blog.
        </h2>
        <p class="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bone-200/65 sm:text-base">
          {#if $user}
            <a href="/blog/new" use:link class="text-sky-300 hover:underline">Write the first post</a>
          {:else}
            Check back soon for training notes and updates from the team.
          {/if}
        </p>
      </div>
    {:else}
      <ul class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each posts as post (post.slug)}
          <li use:reveal>
            <a
              href="/blog/{post.slug}"
              use:link
              class="group flex h-full flex-col btn-clip border border-white/[0.08] bg-gradient-to-b from-ink-800/50 to-ink-950/90 overflow-hidden transition-colors hover:border-sky-400/25"
            >
              {#if post.coverImageUrl}
                <img
                  src={post.coverImageUrl}
                  alt=""
                  class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              {/if}
              <div class="flex flex-1 flex-col p-6">
                <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300/75">
                  {formatPostDate(post.createdAt)}
                  {#if !post.published}
                    <span class="ml-2 text-amber-300/90">· Draft</span>
                  {/if}
                </p>
                <h2 class="mt-3 font-display text-xl font-medium tracking-tight text-bone-50 group-hover:text-sky-200">
                  {post.title}
                </h2>
                {#if post.excerpt}
                  <p class="mt-3 flex-1 text-sm leading-relaxed text-bone-200/65 line-clamp-3">{post.excerpt}</p>
                {/if}
                <span class="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300/80">Read more</span>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</section>
