// src/store/actions.js
// actions作用：触发事件和配置参数
  // 在mutations里都是用大写下划线连接，而我们的actions里都用小写驼峰对应。

import * as types from './mutation-types'

export default {
  // commit是vuex提供，提交。 执行mutations的事件
  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  }
};
