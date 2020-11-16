import VueRouter from 'vue-router';
// import HelloWorld from '../components/HelloWorld.vue'

export default new VueRouter({
    routes: [
        { 
            path: '/', 
            name: 'home',
            component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
        }
    ]
});