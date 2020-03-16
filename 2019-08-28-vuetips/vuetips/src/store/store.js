import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user"

Vue.use(Vuex)

const state = {
  count: 100,
  count2: 200
}

// 操作改变这个值，需要放在mutations中，通过里面定义的方法来改变他的值
const mutations = {
  mutationAddCount(state, n = 0) {
    return (state.count += n);
  },
  mutationReduceCount(state, n = 0) {
    return (state.count -= n);
  },
  mutationAddCount1(state, n = 0) {
    return (state.count2 += n);
  },
  mutationReduceCount1(state, n = 0) {
    return (state.count2 -= n);
  }
}

// 异步操作需要使用actions，context是一个和store对象具有相同对象属性的参数
// action执行的是mutations中的方法，可以实现异步操作
const actions = {
  actionAddCount(context, n = 0) {
    setTimeout(() => {
      return context.commit("mutationAddCount1", n);
    }, 2000)
  },
  actionReduceCount({ commit }, n = 0) {
    setTimeout(() => {
      return commit("mutationReduceCount1", n);
    }, 1000)
  }
}

// getters，我们一般使用getters来获取我们的state，因为它算是state的一个计算属性
const getters = {
  getterCount(state, n = 0) {
    return (state.count += n);
  }
}

export default new Vuex.Store({
  modules: {
    user
  },
  state,
  mutations,
  actions,
  getters
})