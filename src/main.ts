// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

import './styles/main.css'
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'
// store
import { useUserStore } from '~/stores/user'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
    i.install?.(ctx),
  )

  // ctx.router.addRoute({
  //   path: '/hi', component: () => import('~/views/HelloWorld.vue'), beforeEnter: (to, from, next) => {
  //     console.log('hi guard')
  //     next()
  //   }
  // })

  // https://next.router.vuejs.org/guide/advanced/scroll-behavior.html#scroll-behavior
  ctx.router.options.scrollBehavior = () => {
    return { top: 0 }
  }

  ctx.router.beforeEach((to, from, next) => {
    // eslint-disable-next-line no-console
    if (to.meta.requiresAuth) {
      const { user } = useUserStore()
      if (!user) return next(`/signin?redirect=${to.path}`)
    }
    next()
  })
})
