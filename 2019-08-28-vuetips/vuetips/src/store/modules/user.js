// 保存token
import { getToken, setToken, removeToken } from "@/utils/auth.js"

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
    return new Promise((resolve, reject) => {
      getToken(userName, password).then(res => {
        const data = res.data;
        Cookies.set("user_token", data.token);
        commit("SET_TOKEN", data.token);
        resolve();
      })
    }).catch(error => {
      reject(error);
    })
  }
}