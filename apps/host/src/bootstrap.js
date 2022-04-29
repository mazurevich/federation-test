import { registerApplication, start } from 'single-spa';

registerApplication(
  'header',
  () => import('remote/Header'),
  location => location.pathname.startsWith('/')
);

start();
