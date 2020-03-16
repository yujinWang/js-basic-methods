// 获取 设置 移除用户token
import Cookies from 'js-cookie';

const TokenKey = "user_token";
// 方便测试，初始给定默认值
Cookies.set(TokenKey, "token-123");

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}