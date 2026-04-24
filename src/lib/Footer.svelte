<script>
  const year = new Date().getFullYear();
</script>

<footer class="relative border-t border-white/[0.08] bg-ink-950/70">
  <div
    class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
  ></div>

  <div class="container-x py-16">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
      <div class="md:col-span-5">
        <div class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            class="logo-mark h-10 w-auto"
          />
          <span class="font-display text-base font-medium uppercase tracking-[0.22em] text-bone-50">
            Elevation Aviation
          </span>
        </div>
        <p class="mt-5 max-w-sm text-sm leading-relaxed text-bone-200/68">
          Flight training at Manassas Regional Airport. Student-focused scheduling, a unified Piper fleet, and clear billing.
        </p>
        <p class="mt-4 text-sm leading-relaxed text-bone-200/50">
          APP Jet Center, 9998 Wakeman Drive, Suite 204, Manassas, VA 20110
        </p>
      </div>

      <div class="md:col-span-3">
        <div class="num-tag">Explore</div>
        <ul class="mt-4 space-y-2 text-sm text-bone-200/78">
          <li><a href="#program" class="hover:text-sky-300">Program</a></li>
          <li><a href="#rates" class="hover:text-sky-300">Rates</a></li>
          <li><a href="#training" class="hover:text-sky-300">Training</a></li>
          <li><a href="#fleet" class="hover:text-sky-300">Fleet</a></li>
          <li><a href="#faq" class="hover:text-sky-300">FAQ</a></li>
          <li><a href="#contact" class="hover:text-sky-300">Contact</a></li>
        </ul>
      </div>

      <div class="md:col-span-4">
        <div class="num-tag">Contact</div>
        <ul class="mt-4 space-y-3 text-sm">
          <li>
            <a href="tel:5716573847" class="font-display text-lg tabular-nums text-bone-50 hover:text-sky-300 sm:text-xl">571 · 657 · 3847</a>
            <span class="mt-1 block text-xs text-bone-200/55">Office, Mon to Sun, 8 to 6</span>
          </li>
          <li>
            <a href="tel:7036253517" class="text-bone-200/80 hover:text-sky-300">After hours: 703 · 625 · 3517</a>
          </li>
          <li>
            <a href="mailto:elevation@elevationflight.com" class="text-bone-200/80 hover:text-sky-300">elevation@elevationflight.com</a>
          </li>
          <li>
            <a href="https://forms.gle/4yXK1m6m4o7BcrZj8" target="_blank" rel="noopener" class="text-bone-200/80 hover:text-sky-300">Dispatch form →</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-16 border-t border-white/[0.08] pt-6 text-xs text-bone-200/45">
      © {year} Elevation Aviation. All rights reserved.
    </div>
  </div>
</footer>
