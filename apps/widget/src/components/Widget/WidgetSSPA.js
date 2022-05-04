import singleSpaSvelte from 'single-spa-svelte';
import Menu from './Widget.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: Menu,
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = (...args) => {
  console.log('on mount')
  return svelteLifecycles.mount(...args);
}
export const unmount = (...args) => {
  console.log('unmount')
  return svelteLifecycles.unmount(...args);
}
