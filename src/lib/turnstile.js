/** @typedef {import('svelte/action').Action} Action */

/**
 * Mount Cloudflare Turnstile on a container element.
 * @param {HTMLElement} node
 * @param {{ siteKey: string; onToken: (token: string) => void; onClear: () => void; handle?: { reset: () => void } }} params
 */
export function turnstile(node, { siteKey, onToken, onClear, handle }) {
  if (!siteKey) return {};

  /** @type {string | undefined} */
  let widgetId;
  let destroyed = false;

  const renderWidget = () => {
    if (destroyed || widgetId || !window.turnstile) return;
    widgetId = window.turnstile.render(node, {
      sitekey: siteKey,
      theme: 'light',
      callback: (token) => onToken(token),
      'expired-callback': () => onClear(),
      'error-callback': () => onClear()
    });
  };

  const loadScript = () => {
    const existing = document.querySelector('script[data-turnstile]');
    if (existing) {
      if (window.turnstile) renderWidget();
      else existing.addEventListener('load', renderWidget, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.dataset.turnstile = 'true';
    script.onload = renderWidget;
    document.head.appendChild(script);
  };

  const resetWidget = () => {
    onClear();
    if (widgetId && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  };

  if (handle) {
    handle.reset = resetWidget;
  }

  loadScript();

  return {
    update(next) {
      onToken = next.onToken;
      onClear = next.onClear;
      if (next.handle) {
        next.handle.reset = resetWidget;
      }
      if (next.siteKey !== siteKey) {
        siteKey = next.siteKey;
        if (widgetId && window.turnstile) {
          window.turnstile.remove(widgetId);
          widgetId = undefined;
        }
        onClear();
        if (siteKey) loadScript();
      }
    },
    destroy() {
      destroyed = true;
      if (handle) {
        handle.reset = () => {};
      }
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    }
  };
}
