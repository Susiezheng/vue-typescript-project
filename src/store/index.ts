import Vue from 'vue'; // vue插件
import Vuex from 'vuex';
import modules from './module/index';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

export default store;



