import singleSpaSvelte from 'single-spa-svelte';
import Menu from './Widget.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: Menu,
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount
export const unmount = svelteLifecycles.unmount
