import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import test from './components/test.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/test', component: test }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')