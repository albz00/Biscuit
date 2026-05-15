<script>
  import GoogleGIcon from './GoogleGIcon.svelte';

  /** 'on-dark' hero / ink sections; 'on-light' bone/paper sections; 'solid' filled chip on light */
  export let variant = 'on-dark';

  export let href = 'https://share.google/ZkXvK29oHBL8Ot2nI';
  export let label = 'Leave us a review';

  const iconSize = variant === 'solid' ? 20 : 22;

  $: wrapClass =
    variant === 'on-dark'
      ? 'group btn-clip-sm inline-flex items-center gap-2.5 border border-white/15 bg-ink-950/35 px-4 py-2.5 text-sm font-medium text-bone-100/95 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:border-sky-400/35 hover:bg-ink-950/55 hover:text-bone-50'
      : variant === 'solid'
        ? 'group btn-clip-sm inline-flex items-center gap-2.5 border border-ink-900/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 shadow-[0_12px_32px_-20px_rgba(7,14,28,0.25)] transition-all hover:border-sky-500/30 hover:bg-sky-50/90'
        : 'group inline-flex items-center gap-2.5 text-sm font-semibold text-sky-800 transition-colors hover:text-sky-950';
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class={wrapClass}
>
  <GoogleGIcon size={iconSize} title="Google" />
  <span class="leading-none">{label}</span>
</a>
