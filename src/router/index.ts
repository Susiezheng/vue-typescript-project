import Login from '@/views/login/login.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './router';

Vue.use(VueRouter);

// @ts-ignore
const routes = [
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/components/errorPage/404.vue'),
  },
  {
    path: '/401',
    hidden: true,
    component: () => import('@/components/errorPage/401.vue'),
  },
];
const constantRouterMap = [...routes, ...routerMap];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap,
});
const LOGIN_PAGE_NAME = 'login';

// 跳转之前
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token');
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME, // 跳转到登录页
    });
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next(); // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: '/', // 跳转到 index 页
    });
  } else {
    if (token) {
      next(); // 跳转
    } else {
      next({
        name: LOGIN_PAGE_NAME,
      });
    }
  }
});

export default router;
