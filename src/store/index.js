import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import { Store } from "vuex";
import RequestInvite from "./rai";
import Status from "./status";


export default  new Store({
    modules:{
        status : new Status(),
        ri: new RequestInvite()
    }
});

