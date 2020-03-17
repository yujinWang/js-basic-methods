// 用户登录、获取用户信息、登出
import https from "@/http/https"

export function login(data) {
  return https.fetchPost("/user/login222", data)
}