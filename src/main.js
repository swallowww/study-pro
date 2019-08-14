import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import test from './components/test.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: test }
    ]
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')