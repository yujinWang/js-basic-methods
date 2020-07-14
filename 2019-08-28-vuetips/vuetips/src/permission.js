// 判断是否有token，存在再获取角色可访问信息，无token则直接进入白名单

import router from './router/router'
import { getToken } from '@/utils/auth' // get token from cookie
import store from "@/store/store"
import user from "@/store/modules/user"
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/Login66") { //看页面设计，如果token存在情况下回登录页重定向到redirect指向的home页面-Login66并不存在
      next({ path: "/" })
    } else {
      // 不同登录用户可查看权限页面-以下为else里执行的操作-根据用户角色判断对应的权限
      store.dispatch("getInfo");
      // getInfo(hasToken)
      const hasRoles = true;
      if (hasRoles) {
        next();
      } else {
        // 获取用户信息
      }
    }
  }
})