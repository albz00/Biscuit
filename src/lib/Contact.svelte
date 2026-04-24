<script>
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
</script>

<section id="contact" class="relative py-28 sm:py-36">
  <div class="container-x">
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <div class="eyebrow mb-6" use:reveal>Contact</div>
        <h2 class="font-display text-4xl font-light leading-[1.05] tracking-tight text-bone-50 sm:text-5xl lg:text-6xl" use:reveal={{ delay: 100 }}>
          Call, text,<br />or email.
        </h2>
        <p class="mt-8 max-w-md text-base leading-relaxed text-bone-200/70" use:reveal={{ delay: 200 }}>
          For appointments and general information, reach us during office hours. Please call before you stop by so we can give you our full attention.
        </p>

        <dl class="mt-12 space-y-8" use:reveal={{ delay: 300 }}>
          <div>
            <dt class="num-tag">Office</dt>
            <dd class="mt-2">
              <a href="tel:5716573847" class="font-display text-[1.625rem] font-light text-bone-50 transition-colors hover:text-sky-300 sm:text-4xl">
                571 · 657 · 3847
              </a>
              <p class="mt-2 text-sm text-bone-200/60">Calls and texts welcome during business hours.</p>
            </dd>
          </div>
          <div>
            <dt class="num-tag">After hours</dt>
            <dd class="mt-2">
              <a href="tel:7036253517" class="link-underline text-lg text-bone-100">703 · 625 · 3517</a>
            </dd>
          </div>
          <div>
            <dt class="num-tag">Email</dt>
            <dd class="mt-2">
              <a href="mailto:elevation@elevationflight.com" class="link-underline text-lg text-bone-100">
                elevation@elevationflight.com
              </a>
            </dd>
          </div>
          <div>
            <dt class="num-tag">Hours</dt>
            <dd class="mt-2 text-lg text-bone-100">Monday – Sunday, 8:00 a.m. – 6:00 p.m.</dd>
          </div>
          <div>
            <dt class="num-tag">Address</dt>
            <dd class="mt-2 text-base leading-relaxed text-bone-100">
              APP Jet Center<br />
              9998 Wakeman Drive, Suite 204<br />
              Manassas, VA 20110
            </dd>
            <p class="mt-3 text-sm text-bone-200/65">
              Visiting: take the lobby elevator to the mezzanine, then turn left to find our office.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=9998+Wakeman+Dr+Suite+204+Manassas+VA+20110"
              target="_blank"
              rel="noopener"
              class="mt-3 inline-block link-underline text-sm text-sky-300"
            >
              Open in Google Maps →
            </a>
          </div>
          <div>
            <dt class="num-tag">Dispatch</dt>
            <dd class="mt-2">
              <a
                href="https://forms.gle/4yXK1m6m4o7BcrZj8"
                target="_blank"
                rel="noopener"
                class="link-underline text-lg text-bone-100"
              >
                Aircraft dispatch form →
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div class="lg:col-span-7" use:reveal={{ delay: 200 }}>
        <form
          on:submit|preventDefault={submit}
          class="rounded-sm border border-white/[0.08] bg-gradient-to-b from-ink-900/50 to-ink-950/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:p-10"
        >
          <h3 class="font-display text-2xl font-medium text-bone-50">Information request</h3>
          <p class="mt-3 max-w-xl text-sm leading-relaxed text-bone-200/65">
            If you would like us to contact you for more information, please fill out the form below. Fields marked with
            <span class="text-sky-400">*</span> are required.
          </p>

          {#if submitted}
            <div class="mt-10 rounded-sm border border-sky-400/30 bg-gradient-to-b from-sky-400/10 to-sky-400/5 p-8 text-center" use:reveal>
              <div class="num-tag">Received</div>
              <div class="mt-3 font-display text-2xl text-bone-50">Thanks, {name.split(' ')[0] || 'there'}.</div>
              <p class="mt-3 text-sm text-bone-200/70">
                We will follow up using your preferred method ({preferredContact.toLowerCase()}). If you need something sooner, call
                <a href="tel:5716573847" class="text-sky-300">571 · 657 · 3847</a>
                (office) or
                <a href="tel:7036253517" class="text-sky-300">703 · 625 · 3517</a>
                (after hours).
              </p>
            </div>
          {:else}
            <div class="mt-10 space-y-8">
              <label class="block sm:max-w-md">
                <span class="form-label">
                  Name <span class="text-sky-400">*</span>
                </span>
                <input
                  type="text"
                  bind:value={name}
                  required
                  autocomplete="name"
                  class="mt-2 w-full rounded-sm border border-white/[0.08] bg-ink-950/40 px-3 py-3 text-base text-bone-50 outline-none transition-colors focus:border-sky-400/50 sm:py-2.5 sm:text-sm"
                />
              </label>

              <label class="block sm:max-w-xs">
                <span class="form-label">Date</span>
                <input
                  type="date"
                  bind:value={preferredDate}
                  class="mt-2 w-full rounded-sm border border-white/[0.08] bg-ink-950/40 px-3 py-3 text-base text-bone-50 outline-none transition-colors focus:border-sky-400/50 sm:py-2.5 sm:text-sm [color-scheme:dark]"
                />
              </label>

              <fieldset>
                <legend class="form-label">
                  What level of training are you interested in? <span class="text-sky-400">*</span>
                </legend>
                <div class="mt-4 flex flex-col gap-2">
                  {#each trainingOptions as opt}
                    <label class="flex cursor-pointer items-center gap-3 rounded-sm border border-white/[0.08] bg-ink-950/40 px-4 py-3 transition-colors hover:border-white/15 has-[:checked]:border-sky-400/50 has-[:checked]:bg-sky-400/5">
                      <input
                        type="radio"
                        bind:group={trainingLevel}
                        value={opt}
                        class="h-3 w-3 shrink-0 accent-sky-400"
                      />
                      <span class="text-sm text-bone-100">{opt}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>

              <label class="block">
                <span class="form-label">Additional questions you want answered?</span>
                <textarea
                  bind:value={additionalQuestions}
                  rows="4"
                  class="mt-2 w-full resize-y rounded-sm border border-white/[0.08] bg-ink-950/40 p-4 text-base text-bone-50 outline-none transition-colors focus:border-sky-400/50 sm:text-sm"
                ></textarea>
              </label>

              <fieldset>
                <legend class="form-label">Preferred contact method <span class="text-sky-400">*</span></legend>
                <div class="mt-4 flex flex-wrap gap-2">
                  {#each contactMethods as method}
                    <label class="flex cursor-pointer items-center gap-2 rounded-sm border border-white/[0.08] bg-ink-950/40 px-4 py-3 transition-colors hover:border-white/15 has-[:checked]:border-sky-400/50 has-[:checked]:bg-sky-400/5 sm:py-2.5">
                      <input
                        type="radio"
                        bind:group={preferredContact}
                        value={method}
                        class="h-3 w-3 accent-sky-400"
                      />
                      <span class="text-sm text-bone-100">{method}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>

              <div>
                <p class="form-label">
                  Contact information (email, phone number, or both) <span class="text-sky-400">*</span>
                </p>
                <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <label class="block">
                    <span class="text-xs text-bone-200/50">Email</span>
                    <input
                      type="email"
                      bind:value={email}
                      autocomplete="email"
                      inputmode="email"
                      class="mt-2 w-full rounded-sm border border-white/[0.08] bg-ink-950/40 px-3 py-3 text-base text-bone-50 outline-none transition-colors focus:border-sky-400/50 sm:py-2.5 sm:text-sm"
                    />
                  </label>
                  <label class="block">
                    <span class="text-xs text-bone-200/50">Phone</span>
                    <input
                      type="tel"
                      bind:value={phone}
                      autocomplete="tel"
                      inputmode="tel"
                      class="mt-2 w-full rounded-sm border border-white/[0.08] bg-ink-950/40 px-3 py-3 text-base text-bone-50 outline-none transition-colors focus:border-sky-400/50 sm:py-2.5 sm:text-sm"
                    />
                  </label>
                </div>
                {#if contactError}
                  <p class="mt-3 text-sm text-red-300/90" role="alert">{contactError}</p>
                {/if}
              </div>
            </div>

            <div class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-bone-100/10 pt-6">
              <p class="text-xs text-bone-200/50">
                This demo form does not connect to a server. Use it as a layout reference or wire it to your backend.
              </p>
              <button type="submit" class="btn-primary">
                <span>Submit</span>
                <span aria-hidden="true" class="font-sans">→</span>
              </button>
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>
