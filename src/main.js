import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import VueRouter from 'vue-router';
import router from "./router";
import { Container, Header, Main ,Footer, Button}  from 'element-ui';
import  "./assets/style.css";
Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Button);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
