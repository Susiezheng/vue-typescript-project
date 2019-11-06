const router = [
  {
    path: '/home',
    name: 'home',
    meta: {title: '首页'},
    component: () => import('@/components/HelloWorld.vue'),
  }];

export default router;
