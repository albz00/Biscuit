<script>
  import { currentPath } from './router.js';
  import {
    SITE_NAME,
    DEFAULT_OG_IMAGE,
    DEFAULT_OG_IMAGE_ALT,
    OG_IMAGE_WIDTH,
    OG_IMAGE_HEIGHT,
    getRouteSeo,
    pageSeoOverride,
    canonicalUrl,
    organizationJsonLd
  } from './seo.js';

  $: seo = $pageSeoOverride ?? getRouteSeo($currentPath);
  $: canonical = canonicalUrl($currentPath);
  $: robots = seo.noindex ? 'noindex, nofollow' : 'index, follow';
  $: showOrganizationSchema = $currentPath === '/';
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta name="robots" content={robots} />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={seo.image || DEFAULT_OG_IMAGE} />
  <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
  <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
  <meta property="og:image:alt" content={DEFAULT_OG_IMAGE_ALT} />
  <meta property="og:locale" content="en_US" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.description} />
  <meta name="twitter:image" content={seo.image || DEFAULT_OG_IMAGE} />

  {#if showOrganizationSchema}
    <!-- svelte-ignore a11y-missing-attribute -->
    <script type="application/ld+json">
      {JSON.stringify(organizationJsonLd)}
    </script>
  {/if}
</svelte:head>
