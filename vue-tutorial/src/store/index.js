// src/store/index.js

// 数据管理中心，Vuex的逻辑
import Vue from 'vue'
/*
Vuex是主要负责数据流
统一管理机制：数据改变的动作、通信由store管理
单一职责
*/
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 定义state常量，状态集合(全局管理的引起界面状态改变的)
const state = {
  totalTime: 0,
  list: []      // 任务列表
};

// Vuex的实例
export default new Vuex.Store({
  state,        // 状态机: 管理状态
  mutations,    // 改变： 改变声明，直接改变state
  actions       // 动作，不能直接改变state，-->mutations
})
