// 用户登录、获取用户信息、登出
import request from "@/http/https"

export function login(data) {
  return request({
    url: "/user/login",
    type: "post",
    data
  });
}
// 根据返回的token信息获取用户信息
export function getInfo(token) {
  return request({
    url: "/user/info",
    type: "get",
    params: { token }
  })
}