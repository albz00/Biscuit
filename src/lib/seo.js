import { writable } from 'svelte/store';

export const SITE_ORIGIN = 'https://elevationflight.com';
export const SITE_NAME = 'Elevation Aviation';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;
export const DEFAULT_OG_IMAGE_ALT =
  'Elevation Aviation flight training homepage at Manassas Regional Airport, Virginia';

/** @type {Record<string, { title: string; description: string; noindex?: boolean }>} */
export const routeSeo = {
  '/': {
    title: 'Elevation Aviation · Flight Training at Manassas Regional',
    description:
      'Elevation Aviation. Personalized flight training at Manassas Regional Airport. Weekly recurring lessons, a PA-28 fleet, and a pay-as-you-fly program.'
  },
  '/training': {
    title: 'Training paths · Elevation Aviation',
    description:
      'Private pilot, instrument, and commercial training at Manassas Regional Airport with recurring weekly scheduling and mentorship-first instruction.'
  },
  '/fleet': {
    title: 'Training fleet · Elevation Aviation',
    description:
      'Our Piper PA-28 training fleet at Manassas Regional Airport: one cockpit, consistent procedures, and aircraft ready for private, instrument, and commercial lessons.'
  },
  '/instructors': {
    title: 'Instructors · Elevation Aviation',
    description:
      'Meet the certificated flight instructors and team guiding private, instrument, and commercial training at Elevation Aviation in Manassas, Virginia.'
  },
  '/faqs': {
    title: 'FAQs · Elevation Aviation',
    description:
      'Answers about scheduling, demo flights, and payment options for flight training with Elevation Aviation at Manassas Regional Airport.'
  },
  '/about': {
    title: 'About · Elevation Aviation',
    description:
      'Our student-forward approach to flight training at Manassas Regional Airport: mentorship, clear expectations, and paths for every certificate.'
  },
  '/resources': {
    title: 'Resources · Elevation Aviation',
    description:
      'Site map, student links, and practical resources for flight training with Elevation Aviation at Manassas Regional Airport.'
  },
  '/blog': {
    title: 'Blog · Elevation Aviation',
    description:
      'Training articles and updates from Elevation Aviation. Check back for new posts from the flight line.'
  },
  '/contact': {
    title: 'Contact · Elevation Aviation',
    description:
      'Reach Elevation Aviation by phone or message for scheduling, demo flights, and questions about training at Manassas Regional Airport.'
  },
  '/manassas-regional-airport-virginia': {
    title: 'Manassas Regional Airport · Elevation Aviation',
    description:
      'Flight training at Manassas Regional Airport (HEF) in Northern Virginia: location, operations context, and how Elevation Aviation uses the airport for training.'
  },
  '/login': {
    title: 'Login · Elevation Aviation',
    description: 'Sign in to write and publish blog posts for Elevation Aviation.',
    noindex: true
  },
  '/privacy-policy': {
    title: 'Privacy Policy · Elevation Aviation',
    description:
      'How Elevation Aviation collects, uses, and protects information when you use our website or flight training services at Manassas Regional Airport.'
  },
  '/terms-of-service': {
    title: 'Terms of Service · Elevation Aviation',
    description:
      'Terms governing use of the Elevation Aviation website and participation in flight training, aircraft rental, and related services.'
  },
  '/blog/new': {
    title: 'New post · Elevation Aviation',
    description: 'Create a blog post.',
    noindex: true
  }
};

/** @type {import('svelte/store').Writable<{ title: string; description: string; image?: string; noindex?: boolean } | null>} */
export const pageSeoOverride = writable(null);

export const notFoundSeo = {
  title: 'Page not found · Elevation Aviation',
  description:
    'We could not find that page. Return to Elevation Aviation for flight training at Manassas Regional Airport.',
  noindex: true
};

/** @param {string} path */
export function canonicalUrl(path) {
  if (!path || path === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

/** @param {string} path */
export function getRouteSeo(path) {
  if (path.startsWith('/blog/edit/')) {
    return { title: 'Edit post · Elevation Aviation', description: 'Edit a blog post.', noindex: true };
  }
  if (path.startsWith('/blog/') && path !== '/blog') {
    return routeSeo['/blog'];
  }
  return routeSeo[path] ?? notFoundSeo;
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FlightSchool',
  name: SITE_NAME,
  url: SITE_ORIGIN,
  image: DEFAULT_OG_IMAGE,
  telephone: '+1-571-657-3847',
  email: 'elevation@elevationflight.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9998 Wakeman Drive, Suite 204',
    addressLocality: 'Manassas',
    addressRegion: 'VA',
    postalCode: '20110',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7214,
    longitude: -77.5206
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Northern Virginia'
  },
  description:
    'Private pilot, instrument, and commercial flight training at Manassas Regional Airport (HEF) with recurring weekly lessons and a Piper PA-28 fleet.'
};
