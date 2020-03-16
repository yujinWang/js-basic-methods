// 保存token
import { getToken, setToken, removeToken } from "@/utils/auth.js"
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
    console.log("submit", state.token)
    // 此处继续，需发送请求获取真实token值
    return new Promise((resolve, reject) => {
      const data = {
        token: "admin"
      }
      Cookies.set("user_token", data.token);
      console.log(Cookies.get("user_token"))
      commit("SET_TOKEN", data.token);
      resolve();
    }).catch(error => {
      reject(error);
    })
    return false;
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