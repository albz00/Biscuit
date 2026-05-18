<script>
  import { onMount } from 'svelte';
  import { link, navigate } from '../lib/router.js';
  import { reveal } from '../lib/useReveal.js';
  import {
    user,
    authReady,
    updateUserProfile,
    uploadProfilePhoto,
    sendPasswordReset
  } from '../lib/auth.js';
  import { updatePostsByAuthor } from '../lib/blogs.js';

  let displayName = '';
  let photoPreview = '';
  let photoFile = null;
  let saving = false;
  let resetting = false;
  let profileMessage = '';
  let profileError = '';
  let resetMessage = '';
  let resetError = '';

  let initialized = false;

  function syncFromUser() {
    if (!$user) return;
    displayName = $user.displayName || '';
    photoPreview = $user.photoURL || '';
    photoFile = null;
  }

  onMount(() => {
    const unsubAuth = authReady.subscribe(async (ready) => {
      if (!ready || initialized) return;
      if (!$user) {
        navigate('/login', { replace: true });
        return;
      }
      initialized = true;
      syncFromUser();
    });

    const unsubUser = user.subscribe(() => {
      if (initialized && $user) syncFromUser();
    });

    return () => {
      unsubAuth();
      unsubUser();
    };
  });

  function onPhotoChange(event) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    photoFile = file;
    photoPreview = URL.createObjectURL(file);
  }

  async function saveProfile() {
    if (!$user) return;
    profileMessage = '';
    profileError = '';
    saving = true;
    try {
      let photoURL = $user.photoURL || undefined;
      if (photoFile) {
        photoURL = await uploadProfilePhoto(photoFile, $user.uid);
      }
      const savedName = displayName.trim();
      await updateUserProfile({
        displayName: savedName || undefined,
        photoURL
      });
      if ($user?.email) {
        await updatePostsByAuthor($user.email, {
          authorName: savedName,
          authorPhotoUrl: photoURL || ''
        });
      }
      photoFile = null;
      profileMessage = 'Profile saved. Your name and photo on blog posts were updated too.';
    } catch (e) {
      profileError = e?.message || 'Could not save profile. Try again.';
    } finally {
      saving = false;
    }
  }

  async function resetPassword() {
    if (!$user?.email) return;
    resetMessage = '';
    resetError = '';
    resetting = true;
    try {
      await sendPasswordReset($user.email);
      resetMessage = `Password reset email sent to ${$user.email}. Check your inbox and follow the link.`;
    } catch (e) {
      const code = e?.code || '';
      if (code === 'auth/too-many-requests') {
        resetError = 'Too many requests. Wait a few minutes and try again.';
      } else {
        resetError = 'Could not send reset email. Try again later.';
      }
    } finally {
      resetting = false;
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
      <a
        href="/blog"
        use:link
        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-200/70 transition-colors hover:text-sky-300"
      >
        ← Back to blog
      </a>

      <div class="mt-8 text-center">
        <div class="eyebrow mb-6 justify-center" use:reveal>Account</div>
        <h1
          class="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-5xl"
          use:reveal={{ delay: 90 }}
        >
          Your profile.
        </h1>
        <p class="mt-6 text-base leading-relaxed text-bone-200/75" use:reveal={{ delay: 170 }}>
          Update your name, photo, and password.
        </p>
      </div>

      <form
        on:submit|preventDefault={saveProfile}
        class="mt-10 btn-clip overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.10] to-white/[0.035] shadow-[0_28px_64px_-36px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-sm"
        use:reveal={{ delay: 220 }}
      >
        <div class="border-b border-white/[0.08] p-7 sm:p-8">
          <p class="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">Profile</p>
          <h2 class="mt-3 font-display text-2xl font-medium tracking-tight text-bone-50">Account details</h2>
        </div>

        {#if profileError}
          <div class="border-b border-white/[0.08] bg-red-400/10 p-6 text-sm leading-relaxed text-red-100">
            {profileError}
          </div>
        {:else if profileMessage}
          <div class="border-b border-white/[0.08] bg-sky-400/10 p-6 text-sm leading-relaxed text-sky-100">
            {profileMessage}
          </div>
        {/if}

        <div class="space-y-5 p-7 sm:p-8">
          <div class="flex flex-col items-center gap-4">
            {#if photoPreview}
              <img
                src={photoPreview}
                alt=""
                class="h-24 w-24 rounded-full object-cover border border-white/15"
              />
            {:else}
              <div
                class="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-ink-950/60 text-2xl font-medium text-bone-200/50"
              >
                {(displayName || $user?.email || '?').charAt(0).toUpperCase()}
              </div>
            {/if}
            <label class="block w-full">
              <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65"
                >Profile photo</span
              >
              <input
                type="file"
                accept="image/*"
                on:change={onPhotoChange}
                disabled={saving}
                class="mt-2 block w-full text-sm text-bone-200/70"
              />
            </label>
          </div>

          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Email</span>
            <input
              type="email"
              value={$user?.email || ''}
              readonly
              class="mt-2 w-full cursor-not-allowed border border-white/12 bg-ink-950/40 px-3 py-3 text-base text-bone-200/60 outline-none btn-clip-xs"
            />
          </label>

          <label class="block">
            <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-bone-200/65">Display name</span>
            <input
              type="text"
              bind:value={displayName}
              autocomplete="name"
              disabled={saving}
              class="mt-2 w-full border border-white/12 bg-ink-950/60 px-3 py-3 text-base text-bone-50 outline-none transition-all placeholder:text-bone-200/35 focus:border-sky-300/50 focus:shadow-[0_0_0_3px_rgba(176,217,245,0.10)] btn-clip-xs disabled:opacity-60"
              placeholder="Your name"
            />
          </label>

          <button type="submit" class="btn-primary w-full" disabled={saving}>
            {saving ? 'Saving…' : 'Save profile'}
          </button>
        </div>
      </form>

      <div
        class="mt-8 btn-clip overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7 sm:p-8"
        use:reveal={{ delay: 280 }}
      >
        <p class="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">Security</p>
        <h2 class="mt-3 font-display text-xl font-medium tracking-tight text-bone-50">Reset password</h2>
        <p class="mt-3 text-sm leading-relaxed text-bone-200/70">
          We will email you a link to reset your password for {$user?.email || 'your account'}.
        </p>

        {#if resetError}
          <p class="mt-4 border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">{resetError}</p>
        {:else if resetMessage}
          <p class="mt-4 border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm text-sky-100">{resetMessage}</p>
        {/if}

        <button
          type="button"
          class="btn-primary mt-5 w-full"
          disabled={resetting}
          on:click={resetPassword}
        >
          {resetting ? 'Sending…' : 'Send password reset email'}
        </button>
      </div>
    </div>
  </div>
</section>
