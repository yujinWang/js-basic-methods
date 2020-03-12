import Vue from "vue";
// 引入vue-router，vue-cli3默认是不安装的，需要自己去安装
// npm i vue-router -S
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入对应的组件-前置加载-初次就加载所有的组件
// import Portal from "../views/Layout/Layout";
// import DataChange from "../views/DataChange/DataChange";
// import Vuexs from "../views/Vuex/Vuex";
// import ElementUi from "../views/ElementUi/ElementUI";
// import Note from "../views/Note/Note";

// 引入对应的组件-后置加载-当有使用到才加载
const DataChange = () => import("../views/DataChange/DataChange");
const Vuexs = () => import("../views/Vuex/Vuex");
const ElementUi = () => import("../views/ElementUi/ElementUi");
const Portal = () => import("../views/Layout/Layout");
const Notes1 = () => import("../views/Note/Note.vue");
const Notes2 = () => import("../views/Note/Note2.vue");
const Notes3 = () => import("../views/Note/Note3.vue");
const SlotTest = () => import("../views/Slot/SlotTest.vue");
const VuexTest = () => import("../views/Note/Note4.vue");
const WatchTest = () => import("../views/WatchTest/WatchTest.vue");
const LifeCycle = () => import("../views/LifeCycle/LifeCycle.vue");
const TableExport = () => import("../views/TableExport/TableExport.vue");
const CsvTableExport = () => import("../views/TableExport/CsvTableExport.vue");
const Login = () => import("../views/Login/Login.vue");

// 导出router对象
export default new VueRouter({
  routes: [{
    path: "/",
    redirect: "/Login"
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "/Portal",
    component: Portal,
    children: [
      {
        path: "/DataChange",
        component: DataChange
      },
      {
        path: "/Vuexs",
        component: Vuexs
      },
      {
        path: "/ElementUi",
        component: ElementUi
      },
      {
        path: "/Notes1",
        component: Notes1
      },
      {
        path: "/Notes2",
        component: Notes2
      },
      {
        path: "/Notes3",
        component: Notes3
      },
      {
        path: "/Slots",
        component: SlotTest
      },
      {
        path: "/VuexTest",
        component: VuexTest
      },
      {
        path: "/WatchTest",
        component: WatchTest
      },
      {
        path: "/LifeCycle",
        component: LifeCycle
      },
      {
        path: "/TableExport",
        component: TableExport
      },
      {
        path: "/CsvTableExport",
        component: CsvTableExport
      }
    ]
  }
  ]
});