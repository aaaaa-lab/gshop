/*
vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态对象
  state,
  //直接更新state的多个方法的对象
  mutations,
  //通过mutation间接更新state的多个方法的对象
  actions,
  //基于state的getter计算属性的对象
  getters
})
