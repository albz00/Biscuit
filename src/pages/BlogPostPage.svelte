<script>
  import { onDestroy } from 'svelte';
  import { link, navigate, routeParams } from '../lib/router.js';
  import { reveal } from '../lib/useReveal.js';
  import { user } from '../lib/auth.js';
  import { getPost, canManagePost, deletePost } from '../lib/blogs.js';
  import PostAuthor from '../lib/PostAuthor.svelte';
  import { pageSeoOverride, SITE_NAME } from '../lib/seo.js';

  /** @type {import('../lib/blogs.js').BlogPost | null} */
  let post = null;
  let loading = true;
  let notFound = false;
  let deleting = false;
  let deleteError = '';

  $: slug = $routeParams.slug || '';

  async function loadPostBySlug(currentSlug) {
    if (!currentSlug) {
      notFound = true;
      loading = false;
      return;
    }

    loading = true;
    notFound = false;
    post = null;

    try {
      const data = await getPost(currentSlug);
      if (!data) {
        notFound = true;
        return;
      }
      if (!data.published && !$user) {
        notFound = true;
        return;
      }
      post = data;
      pageSeoOverride.set({
        title: `${post.title} · ${SITE_NAME}`,
        description: post.excerpt || post.title,
        image: post.coverImageUrl || undefined
      });
    } finally {
      loading = false;
    }
  }

  $: if (slug || $user) loadPostBySlug(slug);

  onDestroy(() => {
    pageSeoOverride.set(null);
  });

  async function onDelete() {
    if (!post || !canManagePost(post, $user)) return;
    if (!confirm('Delete this post permanently?')) return;

    deleting = true;
    deleteError = '';
    try {
      await deletePost(post.slug);
      navigate('/blog', { replace: true });
    } catch (e) {
      deleteError = e?.message || 'Could not delete post.';
    } finally {
      deleting = false;
    }
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
    <a
      href="/blog"
      use:link
      class="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-200/70 transition-colors hover:text-sky-300"
      use:reveal
    >
      ← Back to blog
    </a>

    {#if loading}
      <p class="mt-12 text-sm text-bone-200/65" use:reveal>Loading…</p>
    {:else if notFound}
      <div class="mt-12 max-w-xl" use:reveal>
        <h1 class="font-display text-3xl font-medium tracking-tight text-bone-50">Post not found</h1>
        <p class="mt-4 text-sm leading-relaxed text-bone-200/70">
          This article may have been removed or the link is incorrect.
        </p>
      </div>
    {:else if post}
      <article class="mx-auto mt-10 max-w-3xl">
        {#if !post.published}
          <p
            class="mb-6 inline-block border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200/90"
            use:reveal
          >
            Draft
          </p>
        {/if}

        <div class="mt-2" use:reveal>
          <PostAuthor {post} variant="prominent" />
        </div>
        <h1
          class="mt-8 font-display text-4xl font-medium leading-[1.08] tracking-tight text-bone-50 sm:text-5xl"
          use:reveal={{ delay: 80 }}
        >
          {post.title}
        </h1>
        {#if post.excerpt}
          <p class="mt-6 text-lg leading-relaxed text-bone-200/75" use:reveal={{ delay: 140 }}>
            {post.excerpt}
          </p>
        {/if}

        {#if post.coverImageUrl}
          <div class="mt-10 overflow-hidden btn-clip border border-white/[0.08]" use:reveal={{ delay: 180 }}>
            <img
              src={post.coverImageUrl}
              alt=""
              class="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
          </div>
        {/if}

        <div
          class="mt-10 whitespace-pre-wrap text-base leading-relaxed text-bone-100/90"
          use:reveal={{ delay: 220 }}
        >
          {post.body}
        </div>

        {#if $user && canManagePost(post, $user)}
          <div class="mt-12 flex flex-wrap gap-4" use:reveal={{ delay: 260 }}>
            <a href="/blog/edit/{post.slug}" use:link class="btn-primary">Edit post</a>
            <button
              type="button"
              class="border border-red-400/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-200/90 transition-colors hover:bg-red-400/10 btn-clip-sm"
              disabled={deleting}
              on:click={onDelete}
            >
              {deleting ? 'Deleting…' : 'Delete post'}
            </button>
          </div>
          {#if deleteError}
            <p class="mt-4 text-sm text-red-200/90">{deleteError}</p>
          {/if}
        {/if}
      </article>
    {/if}
  </div>
</section>
