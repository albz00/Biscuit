<script>
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import Nav from './lib/Nav.svelte';
  import Footer from './lib/Footer.svelte';
  import Home from './pages/Home.svelte';
  import FleetPage from './pages/FleetPage.svelte';
  import TrainingPage from './pages/TrainingPage.svelte';
  import InstructorsPage from './pages/InstructorsPage.svelte';
  import FaqsPage from './pages/FaqsPage.svelte';
  import AboutPage from './pages/AboutPage.svelte';
  import ResourcesPage from './pages/ResourcesPage.svelte';
  import BlogPage from './pages/BlogPage.svelte';
  import ContactPage from './pages/ContactPage.svelte';
  import ManassasAirportPage from './pages/ManassasAirportPage.svelte';
  import LoginPage from './pages/LoginPage.svelte';

  const routes = {
    '/': Home,
    '/fleet': FleetPage,
    '/training': TrainingPage,
    '/instructors': InstructorsPage,
    '/faqs': FaqsPage,
    '/about': AboutPage,
    '/resources': ResourcesPage,
    '/blog': BlogPage,
    '/contact': ContactPage,
    '/login': LoginPage,
    '/manassas-regional-airport-virginia': ManassasAirportPage,
    '*': Home
  };

  let splashMounted = true;
  let splashExiting = false;

  onMount(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minMs = reducedMotion ? 400 : 1400;
    const fadeMs = reducedMotion ? 120 : 520;
    const started = performance.now();

    const finish = () => {
      const elapsed = performance.now() - started;
      const rest = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        splashExiting = true;
        window.setTimeout(() => {
          splashMounted = false;
        }, fadeMs);
      }, rest);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }
  });
</script>

{#if splashMounted}
  <div
    class="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-ink-950 bg-gradient-page px-6 transition-opacity duration-500 ease-out {splashExiting
      ? 'pointer-events-none opacity-0'
      : 'opacity-100'}"
    role="status"
    aria-live="polite"
    aria-label="Loading Elevation Aviation"
  >
    <div class="flex flex-col items-center gap-5 animate-fade-in motion-reduce:animate-none">
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        class="logo-mark h-16 w-auto brightness-0 invert drop-shadow-[0_0_24px_rgba(255,255,255,0.12)] sm:h-20"
      />
      <p class="font-display text-center text-xl font-medium uppercase tracking-[0.22em] text-bone-50 sm:text-2xl">
        Elevation Aviation
      </p>
    </div>
    <div
      class="h-0.5 w-28 rounded-full bg-gradient-to-r from-transparent via-sky-400/70 to-transparent animate-pulse motion-reduce:animate-none"
      aria-hidden="true"
    ></div>
  </div>
{/if}

<Nav />
<main>
  <Router {routes} on:routeLoaded={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} />
</main>
<Footer />
