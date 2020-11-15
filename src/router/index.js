import VueRouter from 'vue-router';
// import HelloWorld from '../components/HelloWorld.vue'

export default new VueRouter({
    routes: [
        { 
            path: '/helloworld', 
            name: 'helloworld',
            component: () => import(/* webpackChunkName: "helloworld" */ '../views/Main.vue'),
        }
    ]
});