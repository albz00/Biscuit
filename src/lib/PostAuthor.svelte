<script>
  import { formatAuthorName, formatPostDate } from './blogs.js';

  /** @type {import('./blogs.js').BlogPost} */
  export let post;
  /** @type {'compact' | 'prominent'} */
  export let variant = 'compact';

  $: name = formatAuthorName(post);
  $: date = formatPostDate(post.createdAt);
  $: initial = name.charAt(0).toUpperCase();
</script>

{#if variant === 'prominent'}
  <!-- prominent author block -->
  <div class="flex items-center gap-4 border border-white/[0.08] bg-gradient-to-r from-ink-800/50 to-ink-950/60 p-4 btn-clip sm:gap-5 sm:p-5">
    {#if post.authorPhotoUrl}
      <img
        src={post.authorPhotoUrl}
        alt=""
        class="h-16 w-16 shrink-0 rounded-full border-2 border-sky-400/25 object-cover shadow-[0_8px_24px_-8px_rgba(61,147,227,0.35)] sm:h-20 sm:w-20"
      />
    {:else}
      <div
        class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-sky-400/20 bg-ink-950/80 font-display text-2xl font-medium text-sky-200/90 sm:h-20 sm:w-20 sm:text-3xl"
        aria-hidden="true"
      >
        {initial}
      </div>
    {/if}
    <div class="min-w-0">
      <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300/75">Written by</p>
      <p class="mt-1 font-display text-2xl font-medium tracking-tight text-bone-50 sm:text-3xl">{name}</p>
      {#if date}
        <p class="mt-1.5 text-sm text-bone-200/65">{date}</p>
      {/if}
    </div>
  </div>
{:else}
  <div class="flex items-center gap-3">
    {#if post.authorPhotoUrl}
      <img
        src={post.authorPhotoUrl}
        alt=""
        class="h-10 w-10 shrink-0 rounded-full border border-white/15 object-cover"
      />
    {:else}
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink-950/70 text-sm font-semibold text-sky-200/85"
        aria-hidden="true"
      >
        {initial}
      </div>
    {/if}
    <div class="min-w-0">
      <p class="truncate text-sm font-semibold text-bone-50">{name}</p>
      {#if date}
        <p class="text-[11px] text-bone-200/60">{date}</p>
      {/if}
    </div>
  </div>
{/if}
