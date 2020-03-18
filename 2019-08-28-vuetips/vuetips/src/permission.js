// 判断是否有token，存在再获取角色可访问信息，无token则直接进入白名单

import router from './router/router'
import { getToken } from '@/utils/auth' // get token from cookie
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  console.log("hasToken", hasToken)
  if (hasToken) {
    // if (to.path === "/Login") { //页面设计，如果token存在情况下回登录页重定向到首页
    //   next({ path: "/" })
    // } else {
    // 不同登录用户可查看权限页面
    next();
    // }
  } else {
    // no token
  }
})