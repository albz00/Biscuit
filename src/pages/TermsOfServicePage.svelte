<script>
  import LegalPage from '../lib/LegalPage.svelte';
  import { LEGAL_EFFECTIVE_DATE, termsOfServiceSections } from '../lib/legalContent.js';
</script>

<LegalPage
  title="Terms of Service"
  subtitle="These terms govern use of the Elevation Aviation website and participation in our flight training, aircraft rental, and related aviation services."
  effectiveDate={LEGAL_EFFECTIVE_DATE}
  sections={termsOfServiceSections}
/>
