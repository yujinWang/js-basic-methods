import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 100,
	count2: 200
}

// 操作改变这个值，需要放在mutations中，通过里面定义的方法来改变他的值
const mutations = {
	mutationAddCount(state,n=0) {
		return (state.count += n);
	},
	mutationReduceCount(state,n=0) {
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
	actionAddCount(context,n=0) {
		console.log(context);
		return context.commit("mutationAddCount1",n);
	},
	actionReduceCount({commit},n=0) {
		return commit("mutationReduceCount1",n);
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})