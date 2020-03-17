// 保存token
import { getToken, setToken, removeToken } from "@/utils/auth.js"
import { login } from "@/API/user"
import Cookies from 'js-cookie';
const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
}

const actions = {
  // user login
  submitForm({ commit }, userInfo) {
    console.log("user/submitForm")
    // 此处继续，需发送请求获取真实token值,对象解构赋值，需和登录框定义属性名一致
    const { username, password } = userInfo
    // return new Promise((resolve, reject) => {
    // 无mock情况下临时数据
    // const data = {
    //   token: "admin"
    // }
    login({ username: username.trim(), password: password }).then(res => {
      console.log(res);
      // const { data } = res;
      // Cookies.set("user_token", data.token);
      // commit("SET_TOKEN", data.token);
      // resolve();
    })
    // }).catch(error => {
    //   reject(error);
    // })
  },
  test() {
    return 123
  }
}

export default {
  state,
  mutations,
  actions
}