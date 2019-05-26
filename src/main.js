import Vue from 'vue';
import PrettyCheckbox from 'pretty-checkbox-vue';
import wysiwyg from 'vue-wysiwyg';
import VueKonva from 'vue-konva';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from "vue-lazyload";
// TODO import {store} from './store';
// import './registerServiceWorker';


Vue.use(VueLazyload);
Vue.use(PrettyCheckbox);
Vue.use(wysiwyg, {});
Vue.use(VueKonva);

Vue.config.productionTip = false;

var vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
global.vm=vm;
