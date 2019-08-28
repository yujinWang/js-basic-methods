// 安装vuex并引入
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 定义需要监控的数据
const state = {
	count: 0,
	count1: 10
}

// 定义方法
const mutations = {
	addCount(state,n=1){
		setTimeout(()=>{
			return (state.count += n);
		},2000)
		
	},
	reduceCount(state,n=1){
		return (state.count -=n);
	},
	// actions方法，可以在里面进行异步操作
	addCount1(state, n = 1) {
		setTimeout(()=>{
			return (state.count1 += n);
		},2000)
	},
	reduceCount1(state, n = 1) {
		return (state.count1 -= n);
	},
}

// 异步操作actions
const actions = {
	//使用context，它是和store对象具有相同对象属性的参数
	actionAddCount(context,n=1){
		console.log(context);
		// setTimeout(()=>{
			return context.commit("addCount1", n);
		// },2000)
	},
	//直接使用对象的commit方法
	actionReduceCount({ commit },n=1){
		return commit("reduceCount1",n)
	}
}

// getters，它算是state的计算属性，一般使用getters来获取我们定义在state中的值
const getters = {
	getterCount(state){
		return state.count1;
	}
}

// 导出数据对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})