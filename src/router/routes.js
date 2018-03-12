import App from '../App'

import index from '@/page/index/index'

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由，对应App.vue
    // 地址为空时跳转到index页面
    {
      path: '',
      redirect: '/index'
    },
    // 首页
    {
      path: '/index',
      component: index
    },
    // 地址为任意字符时跳转到index页面
    {
      path: '*',
      redirect: '/index'
    }
  ]
}]
