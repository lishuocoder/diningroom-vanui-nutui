import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './router'

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

import Vant from 'vant';
import 'vant/lib/index.css';

import "../src/assets/mynutui.scss"

Vue.use(VueRouter);
Vue.use(Vant);
NutUI.install(Vue);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
