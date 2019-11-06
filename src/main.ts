import '@/assets/font/iconfont/iconfont.css';
import '@/assets/font/iconfont/iconfont.js';
import '@/assets/fonts/iconfont.css';
import '@/assets/fonts/iconfont.js';
import i18n from '@/assets/i18n'; // 国际化
import '@/assets/styles/index.less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

const loadingEle = document.getElementById('_loading');
// tslint:disable-next-line:no-unused-expression
loadingEle && (loadingEle.style.display = 'none');

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  i18n: (key: string, value: any[] | { [key: string]: any; } | undefined) => i18n.t(key, value),
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
