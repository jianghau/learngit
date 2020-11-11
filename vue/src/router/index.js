import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "../layout/index.vue"
import Login from "../views/login"
Vue.use(VueRouter)

  const routes = [
    {
      path: "/login",
      component: Login,
      name: "Login",
      hidden: true
    },
    {
      path: '/',
      component: layout,
      children:[
        {
        path: '/',
        name: 'index',
        meta: { title: "任务大全", icon: "el-icon-document-copy" },
        component: () => import('../views/index/index.vue')
       }
      ]
    },
    {
      path: '/list',
      component: layout,
      children:[
        {
        path: '/list',
        name: 'list',
        meta: { title: "任务列表", icon: "el-icon-document" },
        component: () => import('../views/list/index.vue')
       }
      ]
    },
    {
      path: '/detils',
      component: layout,
      hidden: true,
      children:[
        {
        path: '/detils',
        name: 'detils',
        meta: { title: "完成任务详情", icon: "el-icon-document-checked" },
        component: () => import('../views/detils/index.vue')
       }
      ]
    },
    {
      path: '/addtask',
      component: layout,
      hidden: true,
      children:[
        {
        path: '/addtask',
        name: 'addtask',
        meta: { title: "添加任务", icon: "el-icon-document-checked" },
        component: () => import('../views/addtask/index.vue')
       }
      ]
    },
  
  
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == "/login") {
    sessionStorage.removeItem("user");
  }
  let user = JSON.parse(sessionStorage.getItem("user"));
  if (!user && to.path != "/login") {
    next({ path: "/login" });
  } else {
    next();
  }
});
export default router
