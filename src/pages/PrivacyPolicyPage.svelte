<script>
  import LegalPage from '../lib/LegalPage.svelte';
  import { LEGAL_EFFECTIVE_DATE, privacyPolicySections } from '../lib/legalContent.js';
</script>

<LegalPage
  title="Privacy Policy"
  subtitle="This policy describes how Elevation Aviation collects and uses information when you visit our website, contact us, or participate in flight training and related services."
  effectiveDate={LEGAL_EFFECTIVE_DATE}
  sections={privacyPolicySections}
/>
