// 用户登录、获取用户信息、登出
import https from "@/http/https"

export function login(data) {
  console.log("data", data);
  return https.fetchPost("/user/login", data);
}
// 根据返回的token信息获取用户信息
export function getInfo(token) {
  return https.fetchGet("/user/info", token);
}