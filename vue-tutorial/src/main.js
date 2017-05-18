

import Vue from 'vue'
  // SPA的核心--前端路由
import VueRouter from 'vue-router'
  // 将VueResource 替换成axios
//import VueResource from 'vue-resource'
import Axios from 'axios'

  /*store中
  mutation-types 记录我们所有的事件名
  mutations 注册我们各种数据变化的方法
  actions 则可以编写异步的逻辑或者是一些逻辑，再去commit
  */
import store from './store'   // 数据管理中心，默认引入index.js
import App from './App'
import Home from './components/Home'     // 任务追踪
import TimeEntries from './components/TimeEntries'     // 时间跟踪列表
import LogTime from './components/LogTime'    // 创建时间
import 'bootstrap/dist/css/bootstrap.css'    // 引入bootstrap

Vue.use(VueRouter)
//Vue.use(VueResource)

// 单页应用路由定义--一个路由，一个地址对应一个或者多个组件
const routes = [{
  path: '/',      // 路由路径
  component: Home
},
  {
    path: '/home',
    component: Home
  },
  {
    path : '/time-entries',
    component : TimeEntries,
    // 子路由
    children : [{
      // LogTime属于我们TimeEntries组件的一个子路由, 创建计划时间列表
      path : 'log-time',
      // 懒加载
      component : resolve => require(['./components/LogTime.vue'], resolve)
    }]
  }]

// 实例化路由
const router = new VueRouter({
  routes
})

// 实例化Vue
var app = new Vue({
  el: '#app',
  router,
  store,    // 组件插入数据流的功能
  ...App    // 交给app组件渲染
})
