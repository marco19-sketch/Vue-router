import { createRouter, createWebHistory } from 'vue-router'
// import HomeVue from '../views/HomeVue.vue'
// import AboutVue from '../views/AboutVue.vue'
// import MoviesVue from '../views/MoviesVue.vue'

// Lazy import, load only the component needed
const HomeVue = () => import('../views/HomeVue.vue')
const AboutVue = () => import('../views/AboutVue.vue')
const MoviesVue = () => import('../views/MoviesVue.vue')

const routes = [
  { path: '/', component: HomeVue },
  { path: '/about', component: AboutVue },
  { path: '/movies', component: MoviesVue },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router






