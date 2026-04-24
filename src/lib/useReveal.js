// Svelte action: `use:reveal` to fade-up elements as they enter the viewport.
export function reveal(node, options = {}) {
  const { threshold = 0.15, once = true, delay = 0 } = options;

  if (typeof IntersectionObserver === 'undefined') {
    node.classList.add('in');
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => node.classList.add('in'), delay);
          } else {
            node.classList.add('in');
          }
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove('in');
        }
      });
    },
    { threshold }
  );

  node.classList.add('reveal');
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
