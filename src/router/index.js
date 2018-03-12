import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
})
