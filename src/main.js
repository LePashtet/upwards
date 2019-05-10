import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//TODO import {store} from './store';
// import './registerServiceWorker';
import PrettyCheckbox from 'pretty-checkbox-vue';
import wysiwyg from "vue-wysiwyg";
import VueKonva from 'vue-konva'
import VueSession from 'vue-session'


Vue.use(PrettyCheckbox);
Vue.use(VueSession);
Vue.use(wysiwyg, {});
Vue.use(VueKonva);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
