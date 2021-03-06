import { quintOut } from "svelte/easing";
import { crossfade } from "svelte/transition";
const [send, receive] = crossfade({
  duration: d => {
    return Math.sqrt(d * 300);
  },
  fallback(node, params) {
    const style = window.getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    return {
      duration: 600,
      easing: quintOut,
      css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
    };
  }
});

export { send, receive };
