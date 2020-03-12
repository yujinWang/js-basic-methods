import http from "../http/https"
export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return http.fetchPost({
    url: '/login/loginbyemail',
    data
  });
}
// 测试数据，如果启动了mock模式，对于每个发送的请求，mock都会拦截
export function returnNum() {
  return "hello world";
}