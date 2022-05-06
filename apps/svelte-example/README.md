# Svelte application that exposes its parts as micro-frontend instances
There are two exposed instances. 
- Widget. It is very simple "dummy" component without any state or internal navigation. 
- App. Simple application with 2 pages.

To support navigation internal navigation via it's own router application should support concept of 'Base Path'. 
For example. Internally it might have to routes:
- /home for Home Page
- /news for News page

if some host application will render it as micro-frontend most likely it will do it on some path like /some-other-app
so this "some-other-app" should be "Base Path" for the App. It should be written in a way when it will react to /some-other/app/home and render Home page. Also navigation links should support relative paths for follow to /some-other-apps/news instead of just /news



