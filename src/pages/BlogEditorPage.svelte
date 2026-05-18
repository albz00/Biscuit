<script>
  import { onMount } from 'svelte';
  import { link, navigate, routeParams } from '../lib/router.js';
  import { reveal } from '../lib/useReveal.js';
  import { user, authReady } from '../lib/auth.js';
  import {
    getPost,
    savePost,
    deletePost,
    uploadCoverImage,
    slugFromTitle,
    canManagePost
  } from '../lib/blogs.js';
  import { slugify, isValidSlug } from '../lib/slug.js';

  let title = '';
  let excerpt = '';
  let body = '';
  let slug = '';
  let slugTouched = false;
  let published = false;
  let coverImageUrl = '';
  let coverFile = null;
  let authorEmail = '';
  let authorName = '';
  let loading = true;
  let saving = false;
  let deleting = false;
  let error = '';

  $: mode = $routeParams.mode === 'edit' ? 'edit' : 'new';
  $: editSlug = $routeParams.slug || '';
  $: previousSlug = mode === 'edit' ? editSlug : '';

  let initialized = false;

  onMount(() => {
    const unsub = authReady.subscribe(async (ready) => {
      if (!ready || initialized) return;
      if (!$user) {
        navigate('/login', { replace: true });
        return;
      }
      initialized = true;
      await loadPost();
    });
    return unsub;
  });

  async function loadPost() {
    if (mode === 'edit' && editSlug) {
      const existing = await getPost(editSlug);
      if (!existing) {
        error = 'Post not found.';
        loading = false;
        return;
      }
      if (!canManagePost(existing, $user)) {
        error = 'You can only edit your own posts.';
        loading = false;
        return;
      }
      authorEmail = existing.authorEmail || $user?.email || '';
      authorName = existing.authorName || $user?.displayName || '';
      title = existing.title;
      excerpt = existing.excerpt;
      body = existing.body;
      slug = existing.slug;
      published = existing.published;
      coverImageUrl = existing.coverImageUrl || '';
    } else {
      authorEmail = $user?.email || '';
      authorName = $user?.displayName || '';
    }
    loading = false;
  }

  function onTitleInput() {
    if (!slugTouched && mode === 'new') {
      slug = slugify(title);
    }
  }

  async function onSubmit() {
    error = '';
    if (!title.trim()) {
      error = 'Title is required.';
      return;
    }

    saving = true;
    try {
      let finalSlug = slug.trim() || slugify(title);
      if (!isValidSlug(finalSlug)) {
        finalSlug = await slugFromTitle(title, previousSlug || undefined);
      } else if (mode === 'new') {
        finalSlug = await slugFromTitle(finalSlug, undefined);
      } else if (finalSlug !== previousSlug) {
        finalSlug = await slugFromTitle(finalSlug, previousSlug || undefined);
      }

      if (coverFile) {
        coverImageUrl = await uploadCoverImage(coverFile, finalSlug);
      }

      await savePost(
        {
          slug: finalSlug,
          title: title.trim(),
          excerpt: excerpt.trim(),
          body: body.trim(),
          coverImageUrl,
          published,
          authorEmail,
          authorName
        },
        previousSlug || undefined
      );

      navigate(`/blog/${finalSlug}`, { replace: true });
    } catch (e) {
      error = e?.message || 'Could not save post. Check your connection and try again.';
    } finally {
      saving = false;
    }
  }

  async function onDelete() {
    if (mode !== 'edit' || !editSlug) return;
    if (!confirm('Delete this post permanently?')) return;

    deleting = true;
    error = '';
    try {
      await deletePost(editSlug);
      navigate('/blog', { replace: true });
    } catch (e) {
      error = e?.message || 'Could not delete post.';
    } finally {
      deleting = false;
    }
  }

  function onCoverChange(event) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    coverFile = file;
    coverImageUrl = URL.createObjectURL(file);
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
    <div class="mx-auto max-w-2xl">
      <a
        href="/blog"
        use:link
        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-200/70 transition-colors hover:text-sky-300"
      >
        ← Back to blog
      </a>

      {#if loading}
        <p class="mt-10 text-sm text-bone-200/65">Loading editor…</p>
      {:else}
        <div class="mt-8">
          <div class="eyebrow mb-4">{mode === 'edit' ? 'Edit post' : 'New post'}</div>
          <h1 class="font-display text-3xl font-medium tracking-tight text-bone-50 sm:text-4xl">
            {mode === 'edit' ? 'Update article' : 'Write a new article'}
          </h1>
        </div>

        <form
          on:submit|preventDefault={onSubmit}
          class="mt-10 space-y-6 btn-clip border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7 sm:p-8"
        >
          {#if error}
            <p class="border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">{error}</p>
          {/if}

          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Title</span>
            <input
              type="text"
              bind:value={title}
              on:input={onTitleInput}
              required
              class="mt-2 w-full border border-white/12 bg-ink-950/60 px-3 py-3 text-base text-bone-50 outline-none btn-clip-xs focus:border-sky-300/50"
            />
          </label>

          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">URL slug</span>
            <input
              type="text"
              bind:value={slug}
              on:input={() => (slugTouched = true)}
              placeholder="auto-from-title"
              class="mt-2 w-full border border-white/12 bg-ink-950/60 px-3 py-3 font-mono text-sm text-bone-50 outline-none btn-clip-xs focus:border-sky-300/50"
            />
            <span class="mt-2 block text-xs text-bone-200/50">/blog/{slug || 'your-slug'}</span>
          </label>

          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Excerpt</span>
            <textarea
              bind:value={excerpt}
              rows="2"
              class="mt-2 w-full resize-y border border-white/12 bg-ink-950/60 px-3 py-3 text-base text-bone-50 outline-none btn-clip-xs focus:border-sky-300/50"
            ></textarea>
          </label>

          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Body</span>
            <textarea
              bind:value={body}
              rows="14"
              required
              class="mt-2 w-full resize-y border border-white/12 bg-ink-950/60 px-3 py-3 text-base leading-relaxed text-bone-50 outline-none btn-clip-xs focus:border-sky-300/50"
            ></textarea>
          </label>

          <div>
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Cover image</span>
            {#if coverImageUrl}
              <img src={coverImageUrl} alt="" class="mt-3 aspect-[16/9] w-full object-cover btn-clip border border-white/10" />
            {/if}
            <input type="file" accept="image/*" on:change={onCoverChange} class="mt-3 block w-full text-sm text-bone-200/70" />
          </div>

          <label class="flex cursor-pointer items-center gap-3">
            <input type="checkbox" bind:checked={published} class="h-4 w-4 accent-sky-400" />
            <span class="text-sm text-bone-100">Publish (visible on the public blog)</span>
          </label>

          <div class="flex flex-wrap gap-3 pt-2">
            <button type="submit" class="btn-primary" disabled={saving}>
              {saving ? 'Saving…' : 'Save post'}
            </button>
            {#if mode === 'edit'}
              <button
                type="button"
                class="border border-red-400/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-200/90 transition-colors hover:bg-red-400/10 btn-clip-sm"
                disabled={deleting}
                on:click={onDelete}
              >
                {deleting ? 'Deleting…' : 'Delete'}
              </button>
            {/if}
          </div>
        </form>
      {/if}
    </div>
  </div>
</section>
