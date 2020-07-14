// 保存token
import { getToken, setToken, removeToken } from "@/utils/auth.js"
import { login, getInfo } from "@/API/user"
import Cookies from 'js-cookie';
// 作为module形式定义的数据通过this.$store.state查看时候是以从store中定义的变量名保存的
const state = {
  token: getToken(),
  teststate: "user"
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  submitForm({ commit }, userInfo) {
    // 此处继续，需发送请求获取真实token值,对象解构赋值，需和登录框定义属性名一致
    const { username, password } = userInfo
    return new Promise((resolve) => {
      login({ username: username.trim(), password: password }).then(res => {
        console.log(res);
        const { data } = res;
        commit("SET_TOKEN", data.token);  // 保存在vuex中
        setToken(data.token);  // 保存在cookie中
        resolve();
      })
    }).catch(error => {
      reject(error);
    })
  },
  // get user info
  getInfo({ commit, state }) {
    console.log(state.token);
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(res => {
        console.log(res);
        // commit("SET_ROLES")
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}