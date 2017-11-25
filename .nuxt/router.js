import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6e2240d6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _36b7b612 = () => import('../pages/user.vue' /* webpackChunkName: "pages/user" */).then(m => m.default || m)
const _230e2d06 = () => import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */).then(m => m.default || m)
const _162bfc68 = () => import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _6e2240d6,
			name: "index"
		},
		{
			path: "/user",
			component: _36b7b612,
			name: "user"
		},
		{
			path: "/detail",
			component: _230e2d06,
			name: "detail"
		},
		{
			path: "/cart",
			component: _162bfc68,
			name: "cart"
		}
    ],
    fallback: false
  })
}
