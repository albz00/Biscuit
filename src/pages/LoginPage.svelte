<script>
  import { reveal } from '../lib/useReveal.js';
  import { link, navigate } from '../lib/router.js';
  import { signIn, user, authReady } from '../lib/auth.js';

  let email = '';
  let password = '';
  let loading = false;
  let error = '';

  $: if ($authReady && $user) {
    navigate('/blog/new', { replace: true });
  }

  async function submitLogin() {
    if (!email.trim() || !password) return;
    loading = true;
    error = '';
    try {
      await signIn(email, password);
      navigate('/blog/new', { replace: true });
    } catch (e) {
      const code = e?.code || '';
      if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
        error = 'Invalid email or password.';
      } else if (code === 'auth/too-many-requests') {
        error = 'Too many attempts. Try again later.';
      } else {
        error = 'Could not sign in. Please try again.';
      }
    } finally {
      loading = false;
    }
  }
</script>

<section class="relative overflow-hidden bg-ink-900 py-28 sm:py-36">
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_85%_8%,rgba(176,217,245,0.10),transparent_58%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_0%_100%,rgba(61,147,227,0.08),transparent_55%)]"
  ></div>

  <div class="container-x">
    <div class="mx-auto max-w-md">
      <div class="text-center">
        <div class="eyebrow mb-6 justify-center" use:reveal>Login</div>
        <h1
          class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl"
          use:reveal={{ delay: 90 }}
        >
          Sign in.
        </h1>
        <p class="mt-6 text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 170 }}>
          Sign in to write and publish blog posts.
        </p>
      </div>

      <form
        on:submit|preventDefault={submitLogin}
        class="mt-10 btn-clip overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.10] to-white/[0.035] shadow-[0_28px_64px_-36px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-sm"
        use:reveal={{ delay: 220 }}
      >
        <div class="border-b border-white/[0.08] p-7 sm:p-8">
          <p class="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">Restricted access</p>
          <h2 class="mt-3 font-display text-2xl font-medium tracking-tight text-bone-50">Sign in</h2>
          <p class="mt-4 text-sm leading-relaxed text-bone-200/70">
            Enter your email and password to create and publish blog posts, including images.
          </p>
        </div>

        {#if error}
          <div class="border-b border-white/[0.08] bg-red-400/10 p-6 text-sm leading-relaxed text-red-100">
            {error}
          </div>
        {/if}

        <div class="space-y-5 p-7 sm:p-8">
          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Email</span>
            <input
              type="email"
              bind:value={email}
              autocomplete="email"
              required
              disabled={loading}
              class="mt-2 w-full border border-white/12 bg-ink-950/60 px-3 py-3 text-base text-bone-50 outline-none transition-all placeholder:text-bone-200/35 focus:border-sky-300/50 focus:shadow-[0_0_0_3px_rgba(176,217,245,0.10)] btn-clip-xs disabled:opacity-60"
              placeholder="you@elevationflight.com"
            />
          </label>
          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Password</span>
            <input
              type="password"
              bind:value={password}
              autocomplete="current-password"
              required
              disabled={loading}
              class="mt-2 w-full border border-white/12 bg-ink-950/60 px-3 py-3 text-base text-bone-50 outline-none transition-all placeholder:text-bone-200/35 focus:border-sky-300/50 focus:shadow-[0_0_0_3px_rgba(176,217,245,0.10)] btn-clip-xs disabled:opacity-60"
              placeholder="Password"
            />
          </label>
          <button type="submit" class="btn-primary w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Log in'}
          </button>
          <p class="text-xs leading-relaxed text-bone-200/55">
            Staff only. <a href="/blog" use:link class="text-sky-300/80 hover:text-sky-300">Back to blog</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</section>
