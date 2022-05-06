# Micro-frontend applications that might be embedded in other apps

Repo created with turborepo cli

- Article. Simple app with one page written on Vue.js 
- Widget. Simple app written on Svelte. Exposes two components (Widget, App). More info in its own README file

Both applications uses Webpack Federation plugin to compile exportable chunks. Also they use Single SPA to prepare its' parts to be embedded in Onehub.
