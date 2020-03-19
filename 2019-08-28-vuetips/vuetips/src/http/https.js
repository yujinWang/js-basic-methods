import axios from 'axios'
import qs from 'qs'
import store from "@/store/modules/user"
import { getToken } from "@/utils/auth"

const service = axios.create({
  baseURL: "",
  timeout: 7000
})

//POST传参序列化(添加请求拦截器)
service.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
service.interceptors.response.use((response) => {
  const res = response.data;
  // if (res.code !== 20000) {
  //   alert("数据错误！");
  // }
  return Promise.resolve(res);
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});

export default service;