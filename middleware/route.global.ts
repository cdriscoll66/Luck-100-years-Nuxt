export default defineNuxtRouteMiddleware((to, from) => {
  // this moves the site to the top of the page when navigating to a new page
    if (to.path !== from.path && process.client) {
      window.scrollTo(0, 0)
    }
  })