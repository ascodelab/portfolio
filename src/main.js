import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

Vue.use(VueScrollTo)

Vue.config.productionTip = false

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
