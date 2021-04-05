import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

Vue.use(Croppa);
Vue.config.productionTip = false;
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
