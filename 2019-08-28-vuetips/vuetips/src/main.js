// 完整的写法是import Vue from '../node_modules/vue/dist/vue.js'
// 在此vue.js文件中存在全局的Vue，这里引入的就是它
// 同理如果给出的只是包的名称的话会从node_modules中去寻找对应的文件，
// 如果给出的是指定到某个具体的文件的话则去加载对应的文件
import Vue from 'vue'
import App from './App.vue'

// 引入element-ui，如下的方式是直接引入，如果为了提高项目响应速度和实现定制化
// 使用按需加载方式，具体操作可参考element文档
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入vue-router并挂载到new Vue实例上
import Router from "./router/router.js";

// 引入store
import store from "./store/store"

// 国际化vue-i18n并挂载到Vue实例上
import VueI18n from "vue-i18n";

// 引入axios
import axios from "axios";
import QS from 'qs'
Vue.prototype.qs = QS;
Vue.prototype.$http = axios;  //引入完成之后不可直接使用，需要改写原型链

// 引入mock
require("./mock/mock.js");
// import "./mock/mock";

// window.Vue = Vue;
Vue.use(ElementUi);
Vue.use(VueI18n);

const i18n = new VueI18n({
  // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})

Vue.config.productionTip = false

// 这里遇到的一个问题，之前的写法是router，那是因为这里的是简写router:router
// 但是这里引入的是Router，那么展开就是Router:Router，显然前面的键值是有问题的
// 报的错误是Error in render: "TypeError: Cannot read property 'matched' of undefined"
new Vue({
  router: Router,
  render: h => h(App),
  i18n,
  store
}).$mount('#app')
