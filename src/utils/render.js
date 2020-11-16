import Vue from 'vue'
import App from '../App.vue'
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import store from "../store";
import router from "../router";
import { Container, Header, Main ,Footer, Button , Form, FormItem, Input, Dialog , Message}  from 'element-ui';
import  "../assets/style.css";
Vue.config.productionTip = false;
Vue.prototype.$message = Message;

Vue.use(VueRouter)
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dialog);






/**
 * Render a vue app to a target element.
 * @returns {void}
 */
export function renderVueApp() {
    new Vue({
        router,
        render: h => h(App),
        store,
      }).$mount('#app')
}
