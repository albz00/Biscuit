<script>
  import Hero from '../lib/Hero.svelte';
  import Marquee from '../lib/Marquee.svelte';
  import Pillars from '../lib/Pillars.svelte';
  import Training from '../lib/Training.svelte';
  import Rates from '../lib/Rates.svelte';
  import Testimonials from '../lib/Testimonials.svelte';
  import DemoCTA from '../lib/DemoCTA.svelte';
  import Contact from '../lib/Contact.svelte';
</script>

<svelte:head>
  <title>Elevation Aviation · Flight Training at Manassas Regional</title>
  <meta
    name="description"
    content="Elevation Aviation. Personalized flight training at Manassas Regional Airport. Weekly recurring lessons, a PA-28 fleet, and a pay-as-you-fly program."
  />
</svelte:head>

<Hero />
<Marquee />
<Pillars />
<Training endCta="contact" />
<Rates />
<Testimonials />
<DemoCTA />
<Contact />
