<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from './useReveal.js';

  let name = '';
  let preferredDate = '';
  /** @type {string} */
  let trainingLevel = 'Private Pilot';
  let additionalQuestions = '';
  /** @type {string} */
  let preferredContact = 'Call';
  let email = '';
  let phone = '';

  let submitted = false;
  let contactError = '';

  const trainingOptions = [
    'Private Pilot',
    'Instrument',
    'Commercial',
    'Certified Flight Instructor',
    'Certified Flight Instructor Instrument'
  ];

  const contactMethods = ['Call', 'Email', 'Text'];

  function submit() {
    contactError = '';
    if (!name.trim()) return;
    if (!trainingLevel) return;
    if (!preferredContact) return;
    const hasEmail = email.trim().length > 0;
    const hasPhone = phone.trim().length > 0;
    if (!hasEmail && !hasPhone) {
      contactError = 'Please provide an email, a phone number, or both.';
      return;
    }
    submitted = true;
  }

  /** @type {string} */
  const fieldBase =
    'w-full border border-ink-900/12 bg-white px-3 py-2.5 text-base text-ink-900 outline-none ring-0 transition-all btn-clip-xs sm:py-2 sm:text-sm';
  const fieldFocus =
    'focus:border-sky-500/50 focus:shadow-[0_0_0_3px_rgba(61,147,227,0.12)]';
</script>

<section
  id="contact"
  class="relative overflow-hidden bg-gradient-to-b from-bone-100 via-bone-50 to-bone-100 py-28 text-ink-900 sm:py-36"
>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_90%_10%,rgba(61,147,227,0.12),transparent_55%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_0%_100%,rgba(42,111,158,0.08),transparent_55%)]"
  ></div>

  <div class="container-x relative">
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <div class="eyebrow mb-6 text-sky-700/85" use:reveal>Contact</div>
        <h2
          class="font-display text-4xl font-light leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
          use:reveal={{ delay: 100 }}
        >
          Please fill out an<br />information request form below.
        </h2>
        <p class="mt-8 max-w-md text-base leading-relaxed text-ink-700" use:reveal={{ delay: 200 }}>
          For appointments and information, call, text, or email.
        </p>

        <dl class="mt-12 space-y-8 [&_.num-tag]:text-sky-700/85" use:reveal={{ delay: 300 }}>
          <div>
            <dt class="num-tag">Office</dt>
            <dd class="mt-2">
              <a
                href="tel:5716573847"
                class="font-display text-[1.625rem] font-light text-ink-900 transition-colors hover:text-sky-600 sm:text-4xl"
              >
                571 · 657 · 3847
              </a>
              <p class="mt-2 text-sm text-ink-600">For appointments and information.</p>
            </dd>
          </div>
          <div>
            <dt class="num-tag">After hours</dt>
            <dd class="mt-2">
              <a href="tel:7036253517" class="link-underline-dark text-lg text-ink-900">703 · 625 · 3517</a>
            </dd>
          </div>
          <div>
            <dt class="num-tag">Email</dt>
            <dd class="mt-2">
              <a href="mailto:elevation@elevationflight.com" class="link-underline-dark text-lg text-ink-900">
                elevation@elevationflight.com
              </a>
            </dd>
          </div>
          <div>
            <dt class="num-tag">Hours</dt>
            <dd class="mt-2 text-lg text-ink-800">Mon-Sun: 8:00am - 6:00pm</dd>
          </div>
          <div>
            <dt class="num-tag">Address</dt>
            <dd class="mt-2 text-base leading-relaxed text-ink-800">
              APP Jet Center<br />
              9998 Wakeman Drive, Suite 204<br />
              <a href="/manassas-regional-airport-virginia" use:link class="link-underline-dark text-ink-800">
                Manassas, VA 20110
              </a>
            </dd>
            <p class="mt-3 text-sm text-ink-600">
              For those visiting: Take the lobby elevator up to the mezzanine, and take a left to find our office.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=9998+Wakeman+Dr+Suite+204+Manassas+VA+20110"
              target="_blank"
              rel="noopener"
              class="mt-3 inline-block link-underline-dark text-sm text-sky-700"
            >
              Open in Google Maps
            </a>
          </div>
          <div>
            <dt class="num-tag">Notice</dt>
            <dd class="mt-2">
              <p class="text-sm leading-relaxed text-ink-700">
                IMPORTANT NOTICE: Our office is currently staffed by instructors. For that reason, sometimes we are out
                flying. We encourage walk-ins to call first to coordinate a time to stop by in case we are up flying.
              </p>
              <a
                href="https://forms.gle/4yXK1m6m4o7BcrZj8"
                target="_blank"
                rel="noopener"
                class="mt-3 inline-block link-underline-dark text-sm text-ink-900"
              >
                Aircraft dispatch form
              </a>
            </dd>
            <img
              src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9ee4b242-d084-4a7e-047e-9b5679facd00/public"
              alt=""
              width="320"
              height="240"
              class="mt-6 block w-full max-w-[17rem] object-contain sm:max-w-[19rem]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </dl>
      </div>

      <div class="lg:col-span-7" use:reveal={{ delay: 200 }}>
        <form
          on:submit|preventDefault={submit}
          class="btn-clip overflow-hidden border border-ink-900/18 bg-gradient-to-b from-white to-bone-50/95 text-ink-900 shadow-[0_2px_0_0_rgba(12,22,41,0.04),0_28px_64px_-32px_rgba(12,22,41,0.22),inset_0_1px_0_rgba(255,255,255,0.95)]"
        >
          <div class="border-b border-ink-900/10 bg-white/80 px-5 py-6 sm:px-8 sm:py-7">
            <p class="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-500">Information request form</p>
            <h3 class="mt-3 font-display text-2xl font-medium text-ink-900">Student inquiry</h3>
            <p class="mt-3 max-w-xl text-sm leading-relaxed text-ink-700">
              Complete each section in order. Fields marked with <span class="text-sky-600">*</span> are required.
            </p>
          </div>

          {#if submitted}
            <div
              class="border-b border-ink-900/10 bg-gradient-to-b from-sky-50 to-bone-50 p-8 text-center sm:p-10"
              use:reveal
            >
              <div class="mx-auto max-w-md btn-clip-sm border border-sky-200/90 bg-white/90 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                <div class="num-tag text-sky-700/85">Received</div>
                <div class="mt-3 font-display text-2xl text-ink-900">Thanks, {name.split(' ')[0] || 'there'}.</div>
                <p class="mt-3 text-sm text-ink-700">
                  We will follow up using your preferred method ({preferredContact.toLowerCase()}). If you need something sooner, call
                  <a href="tel:5716573847" class="font-medium text-sky-700 hover:text-sky-600">571 · 657 · 3847</a>
                  (office) or
                  <a href="tel:7036253517" class="font-medium text-sky-700 hover:text-sky-600">703 · 625 · 3517</a>
                  (after hours).
                </p>
              </div>
            </div>
          {:else}
            <div class="divide-y divide-ink-900/[0.08] bg-[linear-gradient(to_bottom,transparent_0%,rgba(12,22,41,0.02)_100%)]">
              <div class="px-5 py-5 sm:grid sm:grid-cols-[minmax(7.5rem,11rem)_1fr] sm:items-center sm:gap-8 sm:px-8 sm:py-5">
                <span class="form-label block pb-2 sm:pb-0">
                  Name <span class="text-sky-600">*</span>
                </span>
                <label class="block min-w-0">
                  <span class="sr-only">Name</span>
                  <input
                    type="text"
                    bind:value={name}
                    required
                    autocomplete="name"
                    placeholder="Full name"
                    class="{fieldBase} placeholder:text-ink-400 {fieldFocus}"
                  />
                </label>
              </div>

              <div class="px-5 py-5 sm:grid sm:grid-cols-[minmax(7.5rem,11rem)_1fr] sm:items-center sm:gap-8 sm:px-8 sm:py-5">
                <span class="form-label block pb-2 sm:pb-0">Preferred date</span>
                <label class="block min-w-0 max-w-xs">
                  <span class="sr-only">Preferred date</span>
                  <input
                    type="date"
                    bind:value={preferredDate}
                    class="{fieldBase} [color-scheme:light] {fieldFocus}"
                  />
                </label>
              </div>

              <fieldset class="px-5 py-5 sm:px-8 sm:py-6">
                <legend class="form-label mb-4 block w-full border-b border-ink-900/[0.06] pb-3">
                  Training level <span class="text-sky-600">*</span>
                </legend>
                <div class="space-y-0 border border-ink-900/10 bg-white btn-clip-sm">
                  {#each trainingOptions as opt}
                    <label
                      class="flex cursor-pointer items-center gap-3 border-b border-ink-900/[0.06] px-4 py-3.5 transition-colors last:border-b-0 hover:bg-bone-50/80 has-[:checked]:bg-sky-50/90"
                    >
                      <input
                        type="radio"
                        bind:group={trainingLevel}
                        value={opt}
                        class="h-3.5 w-3.5 shrink-0 accent-sky-600"
                      />
                      <span class="text-sm leading-snug text-ink-800">{opt}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>

              <div class="px-5 py-5 sm:px-8 sm:py-6">
                <label class="block w-full">
                  <span class="form-label block border-b border-ink-900/[0.06] pb-3">Questions or notes</span>
                  <textarea
                    bind:value={additionalQuestions}
                    rows="4"
                    placeholder="Optional: scheduling constraints, experience, goals."
                    class="mt-4 w-full resize-y border border-ink-900/12 bg-white p-3 text-base text-ink-900 outline-none ring-0 transition-all placeholder:text-ink-400 btn-clip-sm sm:text-sm {fieldFocus}"
                  ></textarea>
                </label>
              </div>

              <fieldset class="px-5 py-5 sm:px-8 sm:py-6">
                <legend class="form-label mb-4 block w-full border-b border-ink-900/[0.06] pb-3">
                  Preferred contact <span class="text-sky-600">*</span>
                </legend>
                <div class="grid grid-cols-1 divide-y divide-ink-900/[0.06] border border-ink-900/10 bg-white btn-clip-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {#each contactMethods as method}
                    <label
                      class="flex cursor-pointer items-center justify-center gap-2 px-4 py-3.5 transition-colors hover:bg-bone-50/80 has-[:checked]:bg-sky-50/90 sm:py-4"
                    >
                      <input
                        type="radio"
                        bind:group={preferredContact}
                        value={method}
                        class="h-3.5 w-3.5 accent-sky-600"
                      />
                      <span class="text-sm font-medium text-ink-800">{method}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>

              <div class="px-5 py-5 sm:px-8 sm:py-6">
                <p class="form-label mb-4 border-b border-ink-900/[0.06] pb-3">
                  Reach you at <span class="text-sky-600">*</span>
                  <span class="mt-1 block font-sans text-[11px] font-normal normal-case tracking-normal text-ink-500">
                    Provide an email, a phone number, or both.
                  </span>
                </p>
                <div class="grid grid-cols-1 divide-y divide-ink-900/[0.06] border border-ink-900/10 bg-white btn-clip-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <label class="block p-4">
                    <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500">Email</span>
                    <input
                      type="email"
                      bind:value={email}
                      autocomplete="email"
                      inputmode="email"
                      class="mt-2 {fieldBase} {fieldFocus}"
                    />
                  </label>
                  <label class="block p-4">
                    <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500">Phone</span>
                    <input
                      type="tel"
                      bind:value={phone}
                      autocomplete="tel"
                      inputmode="tel"
                      class="mt-2 {fieldBase} {fieldFocus}"
                    />
                  </label>
                </div>
                {#if contactError}
                  <p class="mt-4 text-sm text-red-600" role="alert">{contactError}</p>
                {/if}
              </div>
            </div>

            <div
              class="flex flex-wrap items-center justify-between gap-4 border-t border-ink-900/12 bg-bone-100/90 px-5 py-5 sm:px-8"
            >
              <p class="max-w-md text-xs leading-relaxed text-ink-600">Submit this form and we will follow up.</p>
              <button type="submit" class="btn-primary shrink-0">Submit</button>
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>
