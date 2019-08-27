import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    //创建一个store仓库
export default new Vuex.Store({
    state: { count: 10 },
    mutations: {
        add(state) {
            state.count++;
        },
        declare(state) {
            state.count--;
        }
    },
    actions: {
        //context是承上启下的意思 可以调用到commit中的方法 如果使用actions的话调用的方式使用dispatch
        //actions提交的是mutations而不是直接变更状态，也可以包含任意的异步操作例如添加一个延迟定时器
        //如果是一些网络请求的话可以在actions中进行异步操作
        add(context) {
            setTimeout(function() {
                context.commit("add")
            });
        },
        declare(context) {
            setTimeout(function() {
                context.commit("declare")
            });
        }
    },
    getters: {
        getState(state) {
            return state.count > 0 ? state.count : 0;
        }
    }
})